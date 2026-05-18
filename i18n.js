/* TravelX — строки интерфейса (RU / Oʻzbek) */
(function (global) {
  "use strict";

  var STR = {
    ru: {
      meta_title: "TravelX — авторские туры и круизы из Узбекистана",
      meta_desc:
        "Персональный подбор туров, отелей, перелётов и круизов из Ташкента. Продуманные маршруты по Европе, Ближнему Востоку и морю с прозрачной сметой.",
      skip: "К форме заявки",
      logo_aria: "TravelX — на главную",
      lang_aria: "Язык сайта",
      lang_ru: "RU",
      lang_uz: "UZ",
      nav_aria: "Основное меню",
      nav_directions: "Маршруты",
      nav_cruises: "Круизы",
      nav_video: "Видео",
      nav_cta: "Оставить заявку",
      hero_eyebrow: "Из Ташкента — в мир без лишней суеты",
      hero_title: "Превращаем ваши мечты в реальные маршруты и приятные воспоминания",
      hero_lead:
        "Подберём маршрут под ваш ритм: перелёты, отели в удачных локациях, трансферы, круизы, визовую поддержку и помощь с документами. Вы получаете понятный план и честную смету до оплаты.",
      hero_btn1: "Подобрать тур",
      hero_btn2: "Выбрать маршрут",
      hero_s1_k: "12+ лет",
      hero_s1_t: "создаём поездки для путешественников из Узбекистана",
      hero_s2_k: "Европа · Восток · море",
      hero_s2_t: "городские туры, пляжный отдых и круизы на лайнерах",
      hero_s3_k: "Личный менеджер",
      hero_s3_t: "держит маршрут под контролем от заявки до возвращения",
      dir_title: "Популярные сценарии путешествий",
      dir_sub:
        "Выберите настроение поездки, а мы соберём маршрут вокруг ваших дат, бюджета и привычного темпа отдыха.",
      card1_t: "Европейские каникулы",
      card1_p:
        "Рим и Флоренция, Париж и Лазурный берег, Барселона и Валенсия, Альпы и рождественские ярмарки — с удобной логистикой и отелями там, где действительно приятно жить.",
      card2_t: "Ближний Восток с комфортом",
      card2_p:
        "Дубай, Абу-Даби, Доха и Оман: пляж, город, гастрономия, шопинг или деловая поездка. Подберём район, отель и перелёт под цель путешествия.",
      card3_t: "Короткий отпуск рядом",
      card3_p:
        "Стамбул на выходные, Каппадокия с воздушными шарами, море и шопинг — насыщенный маршрут без долгих перелётов и сложной подготовки.",
      places_title: "Маршруты, которые хочется сохранить в кадре",
      places_sub:
        "Города, побережья и лайнеры, где каждая деталь работает на впечатление: от первого вида из окна до последнего вечера поездки.",
      place1: "Средиземноморье",
      place2: "Столицы Европы",
      place3: "Персидский залив",
      place4: "Побережье и острова",
      place5: "Город у моря",
      place6: "Виза и документы",
      cruises_title: "Круиз на лайнере: несколько стран без переездов",
      cruises_sub:
        "Средиземноморье или Ближний Восток: завтраки и ужины на борту, бассейны, шоу и новые города по расписанию. Подскажем, какую каюту выбрать, какие пакеты нужны, а от каких можно спокойно отказаться.",
      cruise_li1: "Сравним лайнеры, даты и маршруты под ваш отпуск",
      cruise_li2: "Покажем, что входит в стоимость и где возможны доплаты",
      cruise_li3: "Добавим страховку, трансферы и багаж только там, где это нужно",
      video_title: "Почувствуйте атмосферу до бронирования",
      video_sub:
        "Набережные, вечерние прогулки, отели, лайнеры и реальные детали маршрутов — чтобы вы выбирали поездку не по обещаниям, а по ощущению.",
      video_card1: "Средиземноморье в кадре",
      video_card2: "Город, море и сервис",
      video_card3: "Круизное настроение",
      vid_iframe1: "Видео TravelX 1",
      vid_iframe2: "Видео TravelX 2",
      vid_iframe3: "Видео TravelX 3",
      contact_title: "Расскажите, каким должен быть ваш отпуск",
      contact_sub:
        "Оставьте контакты и пару пожеланий — подготовим 2–3 варианта маршрута с ориентиром по стоимости. Свяжемся по делу и в удобное для вас время.",
      label_name: "Имя",
      label_phone: "Телефон",
      label_trip: "Куда, когда и в каком формате хотите поехать",
      ph_phone: "+998 …",
      ph_trip: "Например: Италия в мае, 10 ночей, из Ташкента, комфортный отель, бюджет средний+",
      submit: "Получить варианты маршрута",
      fineprint: "Нажимая кнопку, вы соглашаетесь, что мы используем контакты только для связи по вашей заявке.",
      footer1: "Узбекистан · международные туры, круизы и индивидуальные маршруты",
      footer2: "TravelX — когда хочется путешествовать красиво, спокойно и без лишней суеты",
      form_err_fields: "Заполните имя, телефон и пожелания по поездке.",
      form_err_hp: "Заявка не отправлена.",
      form_sending: "Отправляем…",
      form_ok: "Спасибо! Менеджер скоро свяжется с вами и уточнит детали поездки.",
      form_err_config: "Telegram не настроен: вставьте BOT_TOKEN и CHAT_ID в index.html.",
      form_err_generic: "Не удалось отправить заявку. Попробуйте ещё раз или свяжитесь с нами напрямую.",
      form_err_offline:
        "Сайт открыт без сервера. Запустите npm start в папке проекта и откройте http://localhost:3333",
    },
    uz: {
      meta_title: "TravelX — Oʻzbekistondan mualliflik turlari va kruizlar",
      meta_desc:
        "Toshkentdan turlar, mehmonxonalar, parvozlar va kruizlarni shaxsiy tanlash. Yevropa, Yaqin Sharq va dengiz yoʻnalishlari bo‘yicha puxta marshrut va shaffof smeta.",
      skip: "Ariza formasiga",
      logo_aria: "TravelX — bosh sahifa",
      lang_aria: "Sayt tili",
      lang_ru: "RU",
      lang_uz: "UZ",
      nav_aria: "Asosiy menyu",
      nav_directions: "Marshrutlar",
      nav_cruises: "Kruizlar",
      nav_video: "Video",
      nav_cta: "Ariza qoldirish",
      hero_eyebrow: "Toshkentdan dunyoga — ortiqcha tashvishsiz",
      hero_title: "Orzularingizni haqiqiy marshrutlar va yoqimli xotiralarga aylantiramiz",
      hero_lead:
        "Sayohatni sizning ritmingizga moslaymiz: parvozlar, qulay joylashuvdagi mehmonxonalar, transferlar, kruizlar, viza bo‘yicha yordam va hujjatlarni tayyorlash. To‘lovdan oldin aniq reja va halol smeta olasiz.",
      hero_btn1: "Tur tanlash",
      hero_btn2: "Marshrut tanlash",
      hero_s1_k: "12+ yil",
      hero_s1_t: "Oʻzbekistonlik sayohatchilar uchun yo‘nalishlar yaratamiz",
      hero_s2_k: "Yevropa · Sharq · dengiz",
      hero_s2_t: "shahar turlari, plyaj dam olishi va liner kruizlari",
      hero_s3_k: "Shaxsiy menejer",
      hero_s3_t: "arizadan uyga qaytishgacha marshrutni nazorat qiladi",
      dir_title: "Mashhur sayohat ssenariylari",
      dir_sub:
        "Sayohat kayfiyatini tanlang, biz esa marshrutni sanalaringiz, byudjetingiz va dam olish uslubingizga moslab yig‘amiz.",
      card1_t: "Yevropa taʼtili",
      card1_p:
        "Rim va Florensiya, Parij va Lazur qirg‘og‘i, Barselona va Valensiya, Alp tog‘lari va Rojdestvo yarmarkalari — qulay logistika va yashashga yoqimli hududlardagi mehmonxonalar bilan.",
      card2_t: "Yaqin Sharq — qulay formatda",
      card2_p:
        "Dubay, Abu-Dabi, Doha va Oman: plyaj, shahar, gastronomiya, shopping yoki biznes safari. Hudud, mehmonxona va parvozni safar maqsadiga qarab tanlaymiz.",
      card3_t: "Yaqindagi qisqa taʼtil",
      card3_p:
        "Dam olish kunlari Istanbul, havo sharlari bilan Kapadokiya, dengiz va shopping — uzoq parvoz va murakkab tayyorgarliksiz mazmunli marshrut.",
      places_title: "Kadrda saqlab qo‘ygisi keladigan marshrutlar",
      places_sub:
        "Shaharlar, qirg‘oqlar va laynerlar: derazadan ko‘ringan ilk manzaradan safarning so‘nggi oqshomigacha har bir detal taassurot uchun ishlaydi.",
      place1: "Oʻrta yer dengizi",
      place2: "Yevropa poytaxtlari",
      place3: "Fors koʻrfazi",
      place4: "Sohil va orollar",
      place5: "Dengiz boʻyidagi shahar",
      place6: "Viza va hujjatlar",
      cruises_title: "Laynerdagi kruiz: ko‘chib yurmasdan bir nechta davlat",
      cruises_sub:
        "O‘rta yer dengizi yoki Yaqin Sharq: bortda nonushta va kechki ovqat, basseynlar, shoular va jadval bo‘yicha yangi shaharlar. Qaysi kajutani tanlashni, qaysi paketlar kerakligini va qaysilaridan bemalol voz kechish mumkinligini aytamiz.",
      cruise_li1: "Laynerlar, sanalar va marshrutlarni taʼtilingizga moslab solishtiramiz",
      cruise_li2: "Narxga nimalar kirishini va qayerda qo‘shimcha to‘lov bo‘lishini ko‘rsatamiz",
      cruise_li3: "Sug‘urta, transfer va bagajni faqat kerak joyida qo‘shamiz",
      video_title: "Bron qilishdan oldin atmosferani his qiling",
      video_sub:
        "Qirg‘oq bo‘ylari, kechki sayrlar, mehmonxonalar, laynerlar va marshrutlarning real detallari — safarni vaʼdalar bilan emas, his bilan tanlashingiz uchun.",
      video_card1: "O‘rta yer dengizi kadrda",
      video_card2: "Shahar, dengiz va servis",
      video_card3: "Kruiz kayfiyati",
      vid_iframe1: "TravelX video 1",
      vid_iframe2: "TravelX video 2",
      vid_iframe3: "TravelX video 3",
      contact_title: "Taʼtilingiz qanday bo‘lishini aytib bering",
      contact_sub:
        "Kontaktlaringizni va bir-ikki istagingizni qoldiring — taxminiy narxi bilan 2–3 ta marshrut tayyorlaymiz. Sizga qulay vaqtda, faqat kerakli masala bo‘yicha bog‘lanamiz.",
      label_name: "Ism",
      label_phone: "Telefon",
      label_trip: "Qayerga, qachon va qanday formatda bormoqchisiz",
      ph_phone: "+998 …",
      ph_trip: "Masalan: Italiya, may oyi, 10 tun, Toshkentdan, qulay mehmonxona, o‘rta+ byudjet",
      submit: "Marshrut variantlarini olish",
      fineprint: "Tugmani bosish orqali kontaktlaringizdan faqat arizangiz bo‘yicha bog‘lanish uchun foydalanishimizga rozilik bildirasiz.",
      footer1: "Oʻzbekiston · xalqaro turlar, kruizlar va individual marshrutlar",
      footer2: "TravelX — chiroyli, xotirjam va ortiqcha tashvishsiz sayohat qilishni xohlaganda",
      form_err_fields: "Ism, telefon va sayohat bo‘yicha istaklaringizni to‘ldiring.",
      form_err_hp: "Ariza yuborilmadi.",
      form_sending: "Yuborilmoqda…",
      form_ok: "Rahmat! Menejer tez orada bog‘lanib, safar tafsilotlarini aniqlashtiradi.",
      form_err_config: "Telegram sozlanmagan: index.html ichiga BOT_TOKEN va CHAT_ID ni kiriting.",
      form_err_generic: "Arizani yuborib boʻlmadi. Qayta urinib koʻring yoki biz bilan bevosita bog‘laning.",
      form_err_offline:
        "Server ishlamayapti. Loyiha papkasida npm start ni ishga tushiring va http://localhost:3333 ni oching",
    },
  };

  function apply(lang) {
    var L = STR[lang] || STR.ru;
    document.documentElement.lang = lang === "uz" ? "uz" : "ru";

    var titleEl = document.getElementById("page-title");
    if (titleEl) titleEl.textContent = L.meta_title;
    var descEl = document.getElementById("page-desc");
    if (descEl) descEl.setAttribute("content", L.meta_desc);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key || L[key] == null) return;
      el.textContent = L[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (!key || L[key] == null) return;
      el.setAttribute("placeholder", L[key]);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (!key || L[key] == null) return;
      el.setAttribute("aria-label", L[key]);
    });

    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-title");
      if (!key || L[key] == null) return;
      el.setAttribute("title", L[key]);
    });

    document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
      var isRu = btn.getAttribute("data-lang") === "ru";
      var active = (lang === "ru" && isRu) || (lang === "uz" && !isRu);
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try {
      localStorage.setItem("travelx_lang", lang);
    } catch (e) {}

    document.dispatchEvent(new CustomEvent("travelx:lang", { detail: { lang: lang, strings: L } }));
  }

  function getInitialLang() {
    try {
      var saved = localStorage.getItem("travelx_lang");
      if (saved === "uz" || saved === "ru") return saved;
    } catch (e) {}
    return "ru";
  }

  function getStrings(lang) {
    return STR[lang] || STR.ru;
  }

  global.TravelX_i18n = {
    apply: apply,
    getInitialLang: getInitialLang,
    getStrings: getStrings,
  };
})(typeof window !== "undefined" ? window : this);
