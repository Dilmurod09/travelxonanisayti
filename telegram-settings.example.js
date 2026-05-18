"use strict";

/**
 * 1) Сохраните копию этого файла как `telegram-settings.js` (рядом с server.js).
 * 2) Вставьте токен от @BotFather и chat_id (личный чат или группа, куда писать боту).
 * 3) `npm start` — форма на сайте начнёт слать сообщения в этот чат.
 *
 * Узнать chat_id: напишите боту в нужном чате, затем откройте в браузере
 * https://api.telegram.org/bot<ВАШ_ТОКЕН>/getUpdates
 * и найдите "chat":{"id": ... в последнем сообщении.
 */

module.exports = {
  BOT_TOKEN: "PASTE_YOUR_BOT_TOKEN_HERE",
  CHAT_ID: "PASTE_YOUR_CHAT_ID_HERE",
};
