/**
 * TravelX — локальный сервер: отдаёт лендинг и принимает заявки в Telegram.
 *
 * 1) npm install
 * 2) Скопируйте telegram-settings.example.js → telegram-settings.js
 *    и вставьте BOT_TOKEN и CHAT_ID (или задайте переменные окружения).
 * 3) npm start
 * 4) Откройте http://localhost:3333
 */

"use strict";

const path = require("path");
const fs = require("fs");
const express = require("express");

const PORT = Number(process.env.PORT) || 3333;
const app = express();

function loadTelegramSettings() {
  const fromEnv = {
    BOT_TOKEN: process.env.BOT_TOKEN || "",
    CHAT_ID: process.env.CHAT_ID || "",
  };
  if (fromEnv.BOT_TOKEN && fromEnv.CHAT_ID) {
    return fromEnv;
  }

  const settingsPath = path.join(__dirname, "telegram-settings.js");
  if (fs.existsSync(settingsPath)) {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const cfg = require("./telegram-settings.js");
    return {
      BOT_TOKEN: String(cfg.BOT_TOKEN || "").trim(),
      CHAT_ID: String(cfg.CHAT_ID || "").trim(),
    };
  }

  return { BOT_TOKEN: "", CHAT_ID: "" };
}

function looksUnset(value) {
  if (!value) return true;
  const t = String(value).toUpperCase();
  return (
    t.includes("PASTE") ||
    t.includes("ВСТАВ") ||
    t.includes("YOUR_BOT") ||
    t.includes("YOUR_CHAT") ||
    t.includes("HERE")
  );
}

app.disable("x-powered-by");
app.use(express.json({ limit: "32kb" }));

app.use((req, res, next) => {
  const base = path.basename(req.path || "");
  if (
    base === "server.js" ||
    base === "package.json" ||
    base === "package-lock.json" ||
    base === "telegram-settings.js"
  ) {
    res.status(404).end();
    return;
  }
  next();
});

app.use(
  express.static(__dirname, {
    extensions: ["html"],
    setHeaders(res, filePath) {
      if (filePath.endsWith(".html")) {
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  })
);

app.post("/api/lead", async (req, res) => {
  const { BOT_TOKEN, CHAT_ID } = loadTelegramSettings();

  if (!BOT_TOKEN || !CHAT_ID || looksUnset(BOT_TOKEN) || looksUnset(CHAT_ID)) {
    res.status(503).json({
      ok: false,
      message:
        "Telegram не настроен: заполните BOT_TOKEN и CHAT_ID в telegram-settings.js (см. telegram-settings.example.js) или задайте переменные окружения.",
    });
    return;
  }

  const name = String(req.body && req.body.name || "").trim();
  const phone = String(req.body && req.body.phone || "").trim();
  const countries = String(req.body && req.body.countries || "").trim();

  if (!name || !phone || !countries) {
    res.status(400).json({ ok: false, message: "Заполните имя, телефон и направление." });
    return;
  }

  const text =
    "<b>Новая заявка TravelX</b>\n" +
    "<b>Имя:</b> " +
    escapeHtml(name) +
    "\n" +
    "<b>Телефон:</b> " +
    escapeHtml(phone) +
    "\n" +
    "<b>Интересуют:</b>\n" +
    escapeHtml(countries);

  const url = "https://api.telegram.org/bot" + encodeURIComponent(BOT_TOKEN) + "/sendMessage";

  try {
    const tgRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    const data = await tgRes.json().catch(() => ({}));

    if (!tgRes.ok || !data.ok) {
      const desc = (data && data.description) || tgRes.statusText || "Ошибка Telegram";
      res.status(502).json({ ok: false, message: "Telegram: " + desc });
      return;
    }

    res.json({ ok: true });
  } catch (err) {
    res.status(502).json({ ok: false, message: "Сеть или Telegram недоступны." });
  }
});

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log("TravelX: http://localhost:" + PORT);
});
