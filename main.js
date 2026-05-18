(function () {
  "use strict";

  var currentLang = "ru";

  function getStr(key) {
    if (!window.TravelX_i18n) return "";
    var L = window.TravelX_i18n.getStrings(currentLang);
    return (L && L[key]) || "";
  }

  function setLang(lang) {
    if (lang !== "ru" && lang !== "uz") return;
    currentLang = lang;
    if (window.TravelX_i18n) window.TravelX_i18n.apply(lang);
  }

  function initLang() {
    if (!window.TravelX_i18n) return;
    var lang = window.TravelX_i18n.getInitialLang();
    setLang(lang);

    document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var next = btn.getAttribute("data-lang");
        if (next === "ru" || next === "uz") setLang(next);
      });
    });
  }

  var navToggle = document.querySelector(".nav-toggle");
  var navMobile = document.getElementById("nav-mobile");

  if (navToggle && navMobile) {
    navToggle.addEventListener("click", function () {
      var open = navMobile.hidden;
      navMobile.hidden = !open;
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navMobile.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMobile.hidden = true;
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var form = document.getElementById("lead-form");
  var statusEl = document.getElementById("form-status");
  var submitBtn = document.getElementById("form-submit");
  var phoneInput = document.getElementById("phone");
  var PHONE_PREFIX = "+998 ";

  function setStatus(message, kind) {
    if (!statusEl) return;
    statusEl.textContent = message || "";
    statusEl.classList.remove("is-error", "is-ok");
    if (kind === "error") statusEl.classList.add("is-error");
    if (kind === "ok") statusEl.classList.add("is-ok");
  }

  function looksUnset(value) {
    var t = String(value || "").trim().toUpperCase();
    return !t || t.indexOf("PASTE") !== -1 || t.indexOf("YOUR_") !== -1 || t.indexOf("HERE") !== -1;
  }

  function getTelegramConfig() {
    var cfg = window.TravelXTelegram || {};
    return {
      BOT_TOKEN: String(cfg.BOT_TOKEN || "").trim(),
      CHAT_ID: String(cfg.CHAT_ID || "").trim(),
    };
  }

  function sendTelegramLead(name, phone, countries) {
    var cfg = getTelegramConfig();

    if (looksUnset(cfg.BOT_TOKEN) || looksUnset(cfg.CHAT_ID)) {
      return Promise.reject(new Error("telegram_config"));
    }

    var text =
      "Новая заявка TravelX\n\n" +
      "Имя: " +
      name +
      "\n" +
      "Телефон: " +
      phone +
      "\n\n" +
      "Интересуют:\n" +
      countries;

    return fetch("https://api.telegram.org/bot" + encodeURIComponent(cfg.BOT_TOKEN) + "/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        chat_id: cfg.CHAT_ID,
        text: text,
        disable_web_page_preview: true,
      }),
    }).then(function (res) {
      return res.json().then(function (data) {
        return { ok: res.ok, data: data };
      });
    });
  }

  function formatUzPhone(value) {
    var digits = String(value || "").replace(/\D/g, "");

    if (digits.indexOf("998") === 0) {
      digits = digits.slice(3);
    }

    digits = digits.slice(0, 9);

    var formatted = PHONE_PREFIX;
    if (digits.length > 0) formatted += digits.slice(0, 2);
    if (digits.length > 2) formatted += " " + digits.slice(2, 5);
    if (digits.length > 5) formatted += " " + digits.slice(5, 7);
    if (digits.length > 7) formatted += " " + digits.slice(7, 9);

    return formatted;
  }

  function keepPhoneCaretAtEnd() {
    if (!phoneInput) return;
    var end = phoneInput.value.length;
    phoneInput.setSelectionRange(end, end);
  }

  function initPhoneMask() {
    if (!phoneInput) return;

    phoneInput.value = formatUzPhone(phoneInput.value || PHONE_PREFIX);

    phoneInput.addEventListener("focus", function () {
      phoneInput.value = formatUzPhone(phoneInput.value || PHONE_PREFIX);
      keepPhoneCaretAtEnd();
    });

    phoneInput.addEventListener("click", function () {
      if (phoneInput.selectionStart < PHONE_PREFIX.length) keepPhoneCaretAtEnd();
    });

    phoneInput.addEventListener("keydown", function (e) {
      var allowedControl =
        e.key === "Backspace" ||
        e.key === "Delete" ||
        e.key === "Tab" ||
        e.key === "Escape" ||
        e.key === "Enter" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === "Home" ||
        e.key === "End" ||
        e.metaKey ||
        e.ctrlKey;

      if (allowedControl) {
        if ((e.key === "Backspace" || e.key === "Delete") && phoneInput.selectionStart <= PHONE_PREFIX.length) {
          e.preventDefault();
          keepPhoneCaretAtEnd();
        }
        return;
      }

      if (!/^\d$/.test(e.key)) e.preventDefault();
    });

    phoneInput.addEventListener("input", function () {
      phoneInput.value = formatUzPhone(phoneInput.value);
      keepPhoneCaretAtEnd();
    });

    phoneInput.addEventListener("paste", function (e) {
      e.preventDefault();
      var text = (e.clipboardData || window.clipboardData).getData("text");
      phoneInput.value = formatUzPhone(text);
      keepPhoneCaretAtEnd();
    });
  }

  if (form && statusEl && submitBtn) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      setStatus("");

      var hp = form.querySelector(".hp");
      if (hp && hp.value) {
        setStatus(getStr("form_err_hp"), "error");
        return;
      }

      var name = String((form.elements.name && form.elements.name.value) || "").trim();
      var phone = formatUzPhone((form.elements.phone && form.elements.phone.value) || "");
      var countries = String((form.elements.countries && form.elements.countries.value) || "").trim();
      var phoneDigits = phone.replace(/\D/g, "");

      if (!name || phoneDigits.length !== 12 || !countries) {
        setStatus(getStr("form_err_fields"), "error");
        return;
      }

      submitBtn.disabled = true;
      setStatus(getStr("form_sending"));

      sendTelegramLead(name, phone, countries)
        .then(function (result) {
          if (result.ok && result.data && result.data.ok) {
            setStatus(getStr("form_ok"), "ok");
            form.reset();
            if (phoneInput) phoneInput.value = PHONE_PREFIX;
          } else {
            var msg = (result.data && result.data.message) || getStr("form_err_generic");
            setStatus(msg, "error");
          }
        })
        .catch(function (err) {
          if (err && err.message === "telegram_config") {
            setStatus(getStr("form_err_config"), "error");
            return;
          }
          setStatus(getStr("form_err_generic"), "error");
        })
        .finally(function () {
          submitBtn.disabled = false;
        });
    });

    document.addEventListener("travelx:lang", function () {
      if (statusEl.textContent) setStatus("", null);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initLang();
      initPhoneMask();
    });
  } else {
    initLang();
    initPhoneMask();
  }
})();
