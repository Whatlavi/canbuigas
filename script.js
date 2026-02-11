// ============================================
// SISTEMA COMPLETO DE MENÚ DEL DÍA
// ============================================

// Datos de traducción COMPLETOS CON 13 IDIOMAS
const translations = {
    es: {
        // Selector de idioma
        "home": "Inicio",
        "menu": "Carta",
        "dailyMenu": "Menú del Día",
        "contact": "Contacto",
        "heroTitle": "Can Buïgas",
        "heroSubtitle": "Sabores exclusivos en un ambiente de lujo",
        "viewMenu": "Ver Carta",
        "ourMenu": "Nuestra Carta",
        "menuSubtitle": "Selección de platos creados con ingredientes de primera calidad",
        "all": "Todos",
        "starters": "Entrantes",
        "mainCourses": "Platos Principales",
        "desserts": "Postres",
        "drinks": "Bebidas",
        "dailyMenuSubtitle": "Descubre nuestra propuesta gastronómica diaria",
        "todaySpecial": "Especial de Hoy",
        "priceDailyMenu": "25€",
        "firstCourse": "Primer Plato",
        "firstCourseDesc": "Crema de calabaza con crujiente de jamón ibérico y virutas de oro comestible",
        "secondCourse": "Segundo Plato",
        "secondCourseDesc": "Lomo de lubina al horno con verduras asadas y emulsión de azafrán",
        "dessertCourse": "Postre",
        "dessertCourseDesc": "Tarta de chocolate negro con salsa de frutos rojos y lámina de oro",
        "includes": "Incluye",
        "includesDesc": "Pan artesano, agua y café o infusión",
        "reserveNow": "Reservar Ahora",
        "contactUs": "Sobre Nosotros",
        "contactSubtitle": "Reserva tu mesa o solicita información",
        "address": "Dirección",
        "phone": "Teléfono",
        "email": "Email",
        "hours": "Horario",
        "hoursDetail": "Lunes a Sábado: 13:00 - 16:00 / 20:00 - 00:00<br>Domingo: 13:00 - 17:00",
        "selectPersons": "Número de personas",
        "morePersons": "7 personas o más",
        "sendReservation": "Enviar Reserva",
        "location": "Nuestra Ubicación",
        "scanContact": "Escanea para guardar contacto",
        "qrInfo": "Guarda nuestro contacto escaneando el código QR",
        "scanWebsite": "Escanea para visitar nuestro sitio",
        "footerDescription": "Restaurante de gastronomía moderna con ingredientes de máxima calidad y presentación exquisita.",
        "quickLinks": "Enlaces Rápidos",
        "followUs": "Síguenos",
        "allRightsReserved": "Todos los derechos reservados.",
        "languageSupport": "Disponible en 13 idiomas",
        "reservationSuccess": "¡Reserva Confirmada!",
        "reservationText": "Su reserva ha sido recibida. Le contactaremos pronto para confirmar.",
        "okButton": "Aceptar",
        "shareMenu": "Compartir Menú",
        "printMenu": "Imprimir Menú",
        "date": "Fecha",
        "time": "Hora",
        "message": "Mensaje",
        "specialRequests": "Peticiones Especiales",
        "name": "Nombre",
        "required": "Obligatorio",
        "reservationFor": "Reserva para",
        "persons": "personas",
        "selectDate": "Seleccionar fecha",
        "selectTime": "Seleccionar hora",
        "bookTable": "Reservar Mesa",
        "viewDailyMenu": "Ver Menú del Día",
        "discoverMenu": "Descubre Nuestra Carta",
        "followInstagram": "Síguenos en Instagram",
        "followFacebook": "Síguenos en Facebook",
        "madeWithLove": "Hecho con ❤️ en Barcelona",
        "openingHours": "Horario de apertura",
        "closed": "Cerrado",
        "mondayToFriday": "Lunes a Viernes",
        "saturday": "Sábado",
        "sunday": "Domingo",
        "reservations": "Reservas",
        "walkIn": "Aceptamos clientes sin reserva",
        "privateEvents": "Eventos Privados",
        "cateringService": "Servicio de Catering",
        "winePairing": "Maridaje de Vinos",
        "chefRecommendation": "Recomendación del Chef",
        "seasonalProducts": "Productos de Temporada",
        "organicIngredients": "Ingredientes Orgánicos",
        "glutenFreeOptions": "Opciones Sin Gluten",
        "veganOptions": "Opciones Veganas",
        "suggestions": "Sugerencias",
        "menus": "Menús",
        "salads": "Ensaladas",
        "seafood": "Mariscos",
        "riceDishes": "Arroces",
        "beef": "Ternera",
        "tortillas": "Tortillas",
        "ham": "Jamón",
        "torradas": "Torradas",
        "wines": "Vinos",
        "reserveByPhone": "Reservar por teléfono",
        "reservationNote": "El envío de reservas no está disponible desde la web. Llámanos: <a href=\"tel:+34622249736\">+34 622249736</a>",
        "languageSupport": "Disponible en 13 idiomas"
    },
    en: {
        "home": "Home",
        "menu": "Menu",
        "dailyMenu": "Daily Menu",
        "contact": "Contact",
        "heroTitle": "Can Buïgas Experience",
        "heroSubtitle": "Exclusive flavors in a luxury atmosphere",
        "viewMenu": "View Menu",
        "ourMenu": "Our Menu",
        "menuSubtitle": "Selection of dishes created with premium ingredients",
        "all": "All",
        "starters": "Starters",
        "mainCourses": "Main Courses",
        "desserts": "Desserts",
        "drinks": "Drinks",
        "dailyMenuSubtitle": "Discover our daily gastronomic proposal",
        "todaySpecial": "Today's Special",
        "priceDailyMenu": "25€",
        "firstCourse": "First Course",
        "firstCourseDesc": "Pumpkin cream with Iberian ham crisp and edible gold flakes",
        "secondCourse": "Second Course",
        "secondCourseDesc": "Baked sea bass loin with roasted vegetables and saffron emulsion",
        "dessertCourse": "Dessert",
        "dessertCourseDesc": "Dark chocolate cake with red fruit sauce and gold leaf",
        "includes": "Includes",
        "includesDesc": "Artisan bread, water and coffee or infusion",
        "reserveNow": "Reserve Now",
        "contactUs": "Contact Us",
        "contactSubtitle": "Book your table or request information",
        "address": "Address",
        "phone": "Phone",
        "email": "Email",
        "hours": "Opening Hours",
        "hoursDetail": "Monday to Saturday: 1:00 PM - 4:00 PM / 8:00 PM - 12:00 AM<br>Sunday: 1:00 PM - 5:00 PM",
        "selectPersons": "Number of people",
        "morePersons": "7 people or more",
        "sendReservation": "Send Reservation",
        "location": "Our Location",
        "scanContact": "Scan to save contact",
        "qrInfo": "Save our contact by scanning the QR code",
        "scanWebsite": "Scan to visit our website",
        "footerDescription": "Modern gastronomy restaurant with highest quality ingredients and exquisite presentation.",
        "quickLinks": "Quick Links",
        "followUs": "Follow Us",
        "allRightsReserved": "All rights reserved.",
        "languageSupport": "Available in 13 languages",
        "reservationSuccess": "Reservation Confirmed!",
        "reservationText": "Your reservation has been received. We will contact you soon to confirm.",
        "okButton": "OK",
        "shareMenu": "Share Menu",
        "printMenu": "Print Menu",
        "date": "Date",
        "time": "Time",
        "message": "Message",
        "specialRequests": "Special Requests",
        "name": "Name",
        "required": "Required",
        "reservationFor": "Reservation for",
        "persons": "people",
        "selectDate": "Select date",
        "selectTime": "Select time",
        "bookTable": "Book Table",
        "viewDailyMenu": "View Daily Menu",
        "discoverMenu": "Discover Our Menu",
        "followInstagram": "Follow us on Instagram",
        "followFacebook": "Follow us on Facebook",
        "madeWithLove": "Made with ❤️ in Barcelona",
        "openingHours": "Opening hours",
        "closed": "Closed",
        "mondayToFriday": "Monday to Friday",
        "saturday": "Saturday",
        "sunday": "Sunday",
        "reservations": "Reservations",
        "walkIn": "Walk-ins welcome",
        "privateEvents": "Private Events",
        "cateringService": "Catering Service",
        "winePairing": "Wine Pairing",
        "chefRecommendation": "Chef's Recommendation",
        "seasonalProducts": "Seasonal Products",
        "organicIngredients": "Organic Ingredients",
        "glutenFreeOptions": "Gluten Free Options",
        "veganOptions": "Vegan Options",
        "suggestions": "Suggestions",
        "menus": "Menus",
        "salads": "Salads",
        "seafood": "Seafood",
        "riceDishes": "Rice Dishes",
        "beef": "Beef",
        "tortillas": "Tortillas",
        "ham": "Ham",
        "torradas": "Torradas",
        "wines": "Wines",
        "reserveByPhone": "Reserve by phone",
        "reservationNote": "Online reservation is not available. Please call us: <a href=\"tel:+34622249736\">+34 622249736</a>",
        "languageSupport": "Available in 13 languages"
    },
    ca: {
    "home": "Inici",
    "menu": "Carta",
    "dailyMenu": "Menú del Dia",
    "contact": "Contacte",
    "heroTitle": "Can Buïgas",
    "heroSubtitle": "Sabors exclusius en un ambient de luxe",
    "viewMenu": "Veure Carta",
    "ourMenu": "La Nostra Carta",
    "menuSubtitle": "Selecció de plats creats amb ingredients de primera qualitat",
    "all": "Tots",
    "starters": "Entrants",
    "mainCourses": "Plats Principals",
    "desserts": "Postres",
    "drinks": "Begudes",
    "dailyMenuSubtitle": "Descobreix la nostra proposta gastronòmica diària",
    "todaySpecial": "Especial d'Avui",
    "priceDailyMenu": "25€",
    "firstCourse": "Primer Plat",
    "firstCourseDesc": "Crema de carbassa amb cruixent de pernil ibèric i estovalles d'or comestibles",
    "secondCourse": "Segon Plat",
    "secondCourseDesc": "Llom de llobarro al forn amb verdures rostitades i emulsió de safrà",
    "dessertCourse": "Postre",
    "dessertCourseDesc": "Tarta de xocolata negre amb salsa de fruits vermells i làmina d'or",
    "includes": "Inclou",
    "includesDesc": "Pa artesà, aigua i cafè o infusió",
    "reserveNow": "Reservar Ara",
    "contactUs": "Contacta amb Nosaltres",
    "contactSubtitle": "Reserva la teva taula o sol·licita informació",
    "address": "Adreça",
    "phone": "Telèfon",
    "email": "Correu electrònic",
    "hours": "Horari",
    "hoursDetail": "Dilluns a Dissabte: 13:00 - 16:00 / 20:00 - 00:00<br>Diumenge: 13:00 - 17:00",
    "selectPersons": "Nombre de persones",
    "morePersons": "7 persones o més",
    "sendReservation": "Enviar Reserva",
    "location": "La Nostra Ubicació",
    "scanContact": "Escaneja per guardar contacte",
    "qrInfo": "Guarda el nostre contacte escanejant el codi QR",
    "scanWebsite": "Escaneja per visitar el nostre lloc",
    "footerDescription": "Restaurant de gastronomia moderna amb ingredients de màxima qualitat i presentació exquisida.",
    "quickLinks": "Enllaços Ràpids",
    "followUs": "Segueix-nos",
    "allRightsReserved": "Tots els drets reservats.",
    "languageSupport": "Disponible en 13 idiomes",
    "reservationSuccess": "¡Reserva Confirmada!",
    "reservationText": "La seva reserva ha estat rebuda. La contactarem aviat per confirmar.",
    "okButton": "Acceptar",
    "shareMenu": "Compartir Menú",
    "printMenu": "Imprimir Menú",
    "date": "Data",
    "time": "Hora",
    "message": "Missatge",
    "specialRequests": "Peticions Especials",
    "name": "Nom",
    "required": "Obligatori",
    "reservationFor": "Reserva per a",
    "persons": "persones",
    "selectDate": "Seleccionar data",
    "selectTime": "Seleccionar hora",
    "bookTable": "Reservar Taula",
    "viewDailyMenu": "Veure Menú del Dia",
    "discoverMenu": "Descobreix la Nostra Carta",
    "followInstagram": "Segueix-nos a Instagram",
    "followFacebook": "Segueix-nos a Facebook",
    "madeWithLove": "Fet amb ❤️ a Barcelona",
    "openingHours": "Horari d'obertura",
    "closed": "Tancat",
    "mondayToFriday": "Dilluns a Divendres",
    "saturday": "Dissabte",
    "sunday": "Diumenge",
    "reservations": "Reserves",
    "walkIn": "Acceptem clients sense reserva",
    "privateEvents": "Esdeveniments Privats",
    "cateringService": "Servei de Catering",
    "winePairing": "Maridatge de Vins",
    "chefRecommendation": "Recomanació del Xef",
    "seasonalProducts": "Productes de Temporada",
    "organicIngredients": "Ingredients Orgànics",
    "glutenFreeOptions": "Opcions Sense Gluten",
    "veganOptions": "Opcions Veganes",
        "suggestions": "Suggerències",
        "menus": "Menús",
        "salads": "Amanides",
        "seafood": "Mariscos",
        "riceDishes": "Arròs",
        "beef": "Vedella",
        "tortillas": "Truites",
        "ham": "Pernil",
        "torradas": "Torrades",
        "wines": "Vins",
        "reserveByPhone": "Reservar per telèfon",
        "reservationNote": "La reserva des de la web no està disponible. Truca'ns: <a href=\"tel:+34622249736\">+34 622249736</a>",
        "languageSupport": "Disponible en 13 idiomes",
    "continue": "Continuar amb",
    "updated": "actualitzat",
    "copiedToClipboard": "copiat al porta-retalls",
    "menuUpdated": "Menú actualitzat des de l'emmagatzematge local",
    "confirmReset": "¿Estàs segur que vols restaurar el menú original? Es perdran els canvis actuals.",
    "notAvailable": "no disponible"
},
    zh: {
        "home": "首页",
        "menu": "菜单",
        "dailyMenu": "每日菜单",
        "contact": "联系我们",
        "heroTitle": "Can Buïgas 体验",
        "heroSubtitle": "豪华氛围中的独家风味",
        "viewMenu": "查看菜单",
        "ourMenu": "我们的菜单",
        "menuSubtitle": "采用优质食材制作的精选菜肴",
        "all": "全部",
        "starters": "开胃菜",
        "mainCourses": "主菜",
        "desserts": "甜点",
        "drinks": "饮料",
        "dailyMenuSubtitle": "发现我们的每日美食提案",
        "todaySpecial": "今日特色",
        "priceDailyMenu": "25€",
        "firstCourse": "第一道菜",
        "firstCourseDesc": "南瓜奶油配伊比利亚火腿脆片和食用金箔",
        "secondCourse": "第二道菜",
        "secondCourseDesc": "烤鲈鱼柳配烤蔬菜和藏红花酱汁",
        "dessertCourse": "甜点",
        "dessertCourseDesc": "黑巧克力蛋糕配红果酱和金箔",
        "includes": "包括",
        "includesDesc": "手工面包、水和咖啡或茶",
        "reserveNow": "立即预订",
        "contactUs": "联系我们",
        "contactSubtitle": "预订餐桌或索取信息",
        "address": "地址",
        "phone": "电话",
        "email": "电子邮件",
        "hours": "营业时间",
        "hoursDetail": "周一至周六: 13:00 - 16:00 / 20:00 - 00:00<br>周日: 13:00 - 17:00",
        "selectPersons": "人数",
        "morePersons": "7人或以上",
        "sendReservation": "发送预订",
        "location": "我们的位置",
        "scanContact": "扫描保存联系方式",
        "qrInfo": "扫描二维码保存我们的联系方式",
        "scanWebsite": "扫描访问我们的网站",
        "footerDescription": "现代美食餐厅，采用最高品质的食材和精致的呈现方式。",
        "quickLinks": "快速链接",
        "followUs": "关注我们",
        "allRightsReserved": "版权所有。",
        "languageSupport": "提供13种语言",
        "reservationSuccess": "预订确认！",
        "reservationText": "您的预订已收到。我们将很快与您联系确认。",
        "okButton": "确定",
        "shareMenu": "分享菜单",
        "printMenu": "打印菜单",
        "date": "日期",
        "time": "时间",
        "message": "留言",
        "specialRequests": "特殊要求",
        "name": "姓名",
        "required": "必填",
        "reservationFor": "预订人数",
        "persons": "人",
        "selectDate": "选择日期",
        "selectTime": "选择时间",
        "bookTable": "预订餐桌",
        "viewDailyMenu": "查看每日菜单",
        "discoverMenu": "发现我们的菜单",
        "followInstagram": "在Instagram关注我们",
        "followFacebook": "在Facebook关注我们",
        "madeWithLove": "巴塞罗那制作 ❤️",
        "openingHours": "营业时间",
        "closed": "休息",
        "mondayToFriday": "周一至周五",
        "saturday": "周六",
        "sunday": "周日",
        "reservations": "预订",
        "walkIn": "欢迎直接上门",
        "privateEvents": "私人活动",
        "cateringService": "餐饮服务",
        "winePairing": "葡萄酒搭配",
        "chefRecommendation": "主厨推荐",
        "seasonalProducts": "时令产品",
        "organicIngredients": "有机食材",
        "glutenFreeOptions": "无麸质选项",
        "veganOptions": "纯素选项",
        "suggestions": "建议",
        "menus": "套餐",
        "salads": "沙拉",
        "seafood": "海鲜",
        "riceDishes": "饭类",
        "beef": "牛肉",
        "tortillas": "土豆蛋饼",
        "ham": "火腿",
        "torradas": "烤面包",
        "wines": "葡萄酒",
        "reserveByPhone": "电话预订",
        "reservationNote": "网站预订不可用。请致电：<a href=\"tel:+34622249736\">+34 622249736</a>",
        "languageSupport": "提供13种语言"
    },
    hi: {
        "home": "होम",
        "menu": "मेनू",
        "dailyMenu": "दैनिक मेनू",
        "contact": "संपर्क करें",
        "heroTitle": "Can Buïgas अनुभव",
        "heroSubtitle": "लक्जरी वातावरण में विशेष स्वाद",
        "viewMenu": "मेनू देखें",
        "ourMenu": "हमारा मेनू",
        "menuSubtitle": "प्रीमियम सामग्री से बने व्यंजनों का चयन",
        "all": "सभी",
        "starters": "स्टार्टर",
        "mainCourses": "मुख्य व्यंजन",
        "desserts": "डेसर्ट",
        "drinks": "पेय",
        "dailyMenuSubtitle": "हमारे दैनिक गैस्ट्रोनोमिक प्रस्ताव की खोज करें",
        "todaySpecial": "आज का विशेष",
        "priceDailyMenu": "25€",
        "firstCourse": "पहला कोर्स",
        "firstCourseDesc": "आइबेरियन हैम क्रिस्प और खाने योग्य सोने के पन्नी के साथ कद्दू क्रीम",
        "secondCourse": "दूसरा कोर्स",
        "secondCourseDesc": "भुनी हुई सब्जियों और केसर इमल्शन के साथ बेक्ड सी बास लोइन",
        "dessertCourse": "डेसर्ट",
        "dessertCourseDesc": "लाल फल सॉस और सोने के पत्ते के साथ डार्क चॉकलेट केक",
        "includes": "शामिल है",
        "includesDesc": "हस्तनिर्मित ब्रेड, पानी और कॉफी या हर्बल चाय",
        "reserveNow": "अभी बुक करें",
        "contactUs": "हमसे संपर्क करें",
        "contactSubtitle": "अपनी टेबल बुक करें या जानकारी का अनुरोध करें",
        "address": "पता",
        "phone": "फ़ोन",
        "email": "ईमेल",
        "hours": "खुलने का समय",
        "hoursDetail": "सोमवार से शनिवार: 13:00 - 16:00 / 20:00 - 00:00<br>रविवार: 13:00 - 17:00",
        "selectPersons": "लोगों की संख्या",
        "morePersons": "7 या अधिक लोग",
        "sendReservation": "आरक्षण भेजें",
        "location": "हमारा स्थान",
        "scanContact": "संपर्क सहेजने के लिए स्कैन करें",
        "qrInfo": "QR कोड स्कैन करके हमारा संपर्क सहेजें",
        "scanWebsite": "हमारी वेबसाइट पर जाने के लिए स्कैन करें",
        "footerDescription": "आधुनिक गैस्ट्रोनॉमी रेस्तरां जिसमें उच्चतम गुणवत्ता वाली सामग्री और उत्कृष्ट प्रस्तुति है।",
        "quickLinks": "त्वरित लिंक",
        "followUs": "हमें फॉलो करें",
        "allRightsReserved": "सर्वाधिकार सुरक्षित।",
        "languageSupport": "13 भाषाओं में उपलब्ध",
        "reservationSuccess": "आरक्षण पुष्टि हुई!",
        "reservationText": "आपका आरक्षण प्राप्त हो गया है। हम जल्द ही पुष्टि के लिए आपसे संपर्क करेंगे।",
        "okButton": "ठीक है",
        "shareMenu": "मेनू साझा करें",
        "printMenu": "मेनू प्रिंट करें",
        "date": "तारीख",
        "time": "समय",
        "message": "संदेश",
        "specialRequests": "विशेष अनुरोध",
        "name": "नाम",
        "required": "आवश्यक",
        "reservationFor": "के लिए आरक्षण",
        "persons": "लोग",
        "selectDate": "तारीख चुनें",
        "selectTime": "समय चुनें",
        "bookTable": "टेबल बुक करें",
        "viewDailyMenu": "दैनिक मेनू देखें",
        "discoverMenu": "हमारा मेनू देखें",
        "followInstagram": "Instagram पर फॉलो करें",
        "followFacebook": "Facebook पर फॉलो करें",
        "madeWithLove": "बार्सिलोना में ❤️ से बना",
        "openingHours": "खुलने का समय",
        "closed": "बंद",
        "mondayToFriday": "सोमवार से शुक्रवार",
        "saturday": "शनिवार",
        "sunday": "रविवार",
        "reservations": "आरक्षण",
        "walkIn": "बिना बुकिंग के स्वागत है",
        "privateEvents": "निजी कार्यक्रम",
        "cateringService": "केटरिंग सेवा",
        "winePairing": "वाइन पेयरिंग",
        "chefRecommendation": "शेफ की सिफारिश",
        "seasonalProducts": "मौसमी उत्पाद",
        "organicIngredients": "जैविक सामग्री",
        "glutenFreeOptions": "ग्लूटेन-मुक्त विकल्प",
        "veganOptions": "शाकाहारी विकल्प",
        "suggestions": "सुझाव",
        "menus": "मेनू",
        "salads": "सलाद",
        "seafood": "समुद्री भोजन",
        "riceDishes": "चावल व्यंजन",
        "beef": "गाइ का मांस",
        "tortillas": "टॉर्टिला",
        "ham": "हम",
        "torradas": "टोस्ट",
        "wines": "वाइन",
        "reserveByPhone": "फोन से रिज़र्व करें",
        "reservationNote": "ऑनलाइन आरक्षण उपलब्ध नहीं है। कृपया हमें कॉल करें: <a href=\"tel:+34622249736\">+34 622249736</a>",
        "languageSupport": "13 भाषाओं में उपलब्ध"
    },
    fr: {
        "home": "Accueil",
        "menu": "Menu",
        "dailyMenu": "Menu du Jour",
        "contact": "Contact",
        "heroTitle": "Expérience Can Buïgas",
        "heroSubtitle": "Saveurs exclusives dans une ambiance luxueuse",
        "viewMenu": "Voir le Menu",
        "ourMenu": "Notre Menu",
        "menuSubtitle": "Sélection de plats créés avec des ingrédients de première qualité",
        "all": "Tous",
        "starters": "Entrées",
        "mainCourses": "Plats Principaux",
        "desserts": "Desserts",
        "drinks": "Boissons",
        "dailyMenuSubtitle": "Découvrez notre proposition gastronomique quotidienne",
        "todaySpecial": "Spécial du Jour",
        "priceDailyMenu": "25€",
        "firstCourse": "Premier Plat",
        "firstCourseDesc": "Crème de potiron avec croustillant de jambon ibérique et paillettes d'or comestibles",
        "secondCourse": "Deuxième Plat",
        "secondCourseDesc": "Longe de bar cuit au four avec légumes rôtis et émulsion de safran",
        "dessertCourse": "Dessert",
        "dessertCourseDesc": "Gâteau au chocolat noir avec sauce aux fruits rouges et feuille d'or",
        "includes": "Comprend",
        "includesDesc": "Pain artisanal, eau et café ou infusion",
        "reserveNow": "Réserver Maintenant",
        "contactUs": "Contactez-nous",
        "contactSubtitle": "Réservez votre table ou demandez des informations",
        "address": "Adresse",
        "phone": "Téléphone",
        "email": "Email",
        "hours": "Horaires",
        "hoursDetail": "Lundi à Samedi: 13:00 - 16:00 / 20:00 - 00:00<br>Dimanche: 13:00 - 17:00",
        "selectPersons": "Nombre de personnes",
        "morePersons": "7 personnes ou plus",
        "sendReservation": "Envoyer la Réservation",
        "location": "Notre Emplacement",
        "scanContact": "Scannez pour enregistrer le contact",
        "qrInfo": "Enregistrez notre contact en scannant le code QR",
        "scanWebsite": "Scannez pour visiter notre site",
        "footerDescription": "Restaurant de gastronomie moderne avec des ingrédients de la plus haute qualité et une présentation exquise.",
        "quickLinks": "Liens Rapides",
        "followUs": "Suivez-nous",
        "allRightsReserved": "Tous droits réservés.",
        "languageSupport": "Disponible en 13 langues",
        "reservationSuccess": "Réservation Confirmée!",
        "reservationText": "Votre réservation a été reçue. Nous vous contacterons bientôt pour confirmer.",
        "okButton": "D'accord",
        "shareMenu": "Partager le Menu",
        "printMenu": "Imprimer le Menu",
        "date": "Date",
        "time": "Heure",
        "message": "Message",
        "specialRequests": "Demandes Spéciales",
        "name": "Nom",
        "required": "Obligatoire",
        "reservationFor": "Réservation pour",
        "persons": "personnes",
        "selectDate": "Sélectionner la date",
        "selectTime": "Sélectionner l'heure",
        "bookTable": "Réserver une Table",
        "viewDailyMenu": "Voir le Menu du Jour",
        "discoverMenu": "Découvrez Notre Menu",
        "followInstagram": "Suivez-nous sur Instagram",
        "followFacebook": "Suivez-nous sur Facebook",
        "madeWithLove": "Fait avec ❤️ à Barcelone",
        "openingHours": "Heures d'ouverture",
        "closed": "Fermé",
        "mondayToFriday": "Lundi à Vendredi",
        "saturday": "Samedi",
        "sunday": "Dimanche",
        "reservations": "Réservations",
        "walkIn": "Clients sans réservation bienvenus",
        "privateEvents": "Événements Privés",
        "cateringService": "Service de Traiteur",
        "winePairing": "Accord des Vins",
        "chefRecommendation": "Recommandation du Chef",
        "seasonalProducts": "Produits de Saison",
        "organicIngredients": "Ingrédients Biologiques",
        "glutenFreeOptions": "Options Sans Gluten",
        "veganOptions": "Options Véganes",
        "suggestions": "Suggestions",
        "menus": "Menus",
        "salads": "Salades",
        "seafood": "Fruits de Mer",
        "riceDishes": "Plats de Riz",
        "beef": "Bœuf",
        "tortillas": "Tortillas",
        "ham": "Jambon",
        "torradas": "Torradas",
        "wines": "Vins",
        "reserveByPhone": "Réserver par téléphone",
        "reservationNote": "La réservation en ligne n'est pas disponible. Appelez-nous : <a href=\"tel:+34622249736\">+34 622249736</a>",
        "languageSupport": "Disponible en 13 langues"
    },
    de: {
        "home": "Startseite",
        "menu": "Speisekarte",
        "dailyMenu": "Tageskarte",
        "contact": "Kontakt",
        "heroTitle": "Can Buïgas Erlebnis",
        "heroSubtitle": "Exklusive Aromen in einer luxuriösen Atmosphäre",
        "viewMenu": "Speisekarte Ansehen",
        "ourMenu": "Unsere Speisekarte",
        "menuSubtitle": "Auswahl an Gerichten mit hochwertigen Zutaten",
        "all": "Alle",
        "starters": "Vorspeisen",
        "mainCourses": "Hauptgerichte",
        "desserts": "Desserts",
        "drinks": "Getränke",
        "dailyMenuSubtitle": "Entdecken Sie unser tägliches gastronomisches Angebot",
        "todaySpecial": "Tagesempfehlung",
        "priceDailyMenu": "25€",
        "firstCourse": "Erster Gang",
        "firstCourseDesc": "Kürbiscreme mit Iberischem Schinken-Crisp und essbaren Goldflocken",
        "secondCourse": "Zweiter Gang",
        "secondCourseDesc": "Gebackener Wolfsbarsch-Rücken mit geröstetem Gemüse und Safran-Emulsion",
        "dessertCourse": "Dessert",
        "dessertCourseDesc": "Dunkle Schokoladentorte mit roter Fruchtsauce und Blattgold",
        "includes": "Enthält",
        "includesDesc": "Arteisanbrot, Wasser und Kaffee oder Aufguss",
        "reserveNow": "Jetzt Reservieren",
        "contactUs": "Kontaktieren Sie uns",
        "contactSubtitle": "Tisch reservieren oder Informationen anfordern",
        "address": "Adresse",
        "phone": "Telefon",
        "email": "E-Mail",
        "hours": "Öffnungszeiten",
        "hoursDetail": "Montag bis Samstag: 13:00 - 16:00 / 20:00 - 00:00<br>Sonntag: 13:00 - 17:00",
        "selectPersons": "Anzahl Personen",
        "morePersons": "7 Personen oder mehr",
        "sendReservation": "Reservierung Senden",
        "location": "Unser Standort",
        "scanContact": "Scannen Sie, um Kontakt zu speichern",
        "qrInfo": "Speichern Sie unseren Kontakt durch Scannen des QR-Codes",
        "scanWebsite": "Scannen Sie, um unsere Website zu besuchen",
        "footerDescription": "Moderne Gastronomie mit hochwertigsten Zutaten und exquisiter Präsentation.",
        "quickLinks": "Schnellzugriff",
        "followUs": "Folgen Sie uns",
        "allRightsReserved": "Alle Rechte vorbehalten.",
        "languageSupport": "Verfügbar in 13 Sprachen",
        "reservationSuccess": "Reservierung Bestätigt!",
        "reservationText": "Ihre Reservierung ist eingegangen. Wir werden Sie bald zur Bestätigung kontaktieren.",
        "okButton": "OK",
        "shareMenu": "Speisekarte Teilen",
        "printMenu": "Speisekarte Drucken",
        "date": "Datum",
        "time": "Uhrzeit",
        "message": "Nachricht",
        "specialRequests": "Besondere Wünsche",
        "name": "Name",
        "required": "Erforderlich",
        "reservationFor": "Reservierung für",
        "persons": "Personen",
        "selectDate": "Datum auswählen",
        "selectTime": "Uhrzeit auswählen",
        "bookTable": "Tisch Reservieren",
        "viewDailyMenu": "Tageskarte Ansehen",
        "discoverMenu": "Entdecken Sie Unsere Karte",
        "followInstagram": "Folgen Sie uns auf Instagram",
        "followFacebook": "Folgen Sie uns auf Facebook",
        "madeWithLove": "Mit ❤️ in Barcelona gemacht",
        "openingHours": "Öffnungszeiten",
        "closed": "Geschlossen",
        "mondayToFriday": "Montag bis Freitag",
        "saturday": "Samstag",
        "sunday": "Sonntag",
        "reservations": "Reservierungen",
        "walkIn": "Gäste ohne Reservierung willkommen",
        "privateEvents": "Private Veranstaltungen",
        "cateringService": "Catering-Service",
        "winePairing": "Weinbegleitung",
        "chefRecommendation": "Empfehlung des Küchenchefs",
        "seasonalProducts": "Saisonale Produkte",
        "organicIngredients": "Biologische Zutaten",
        "glutenFreeOptions": "Glutenfreie Optionen",
        "veganOptions": "Vegane Optionen",
        "suggestions": "Empfehlungen",
        "menus": "Menüs",
        "salads": "Salate",
        "seafood": "Meeresfrüchte",
        "riceDishes": "Reisgerichte",
        "beef": "Rindfleisch",
        "tortillas": "Tortillas",
        "ham": "Schinken",
        "torradas": "Torradas",
        "wines": "Weine",
        "reserveByPhone": "Per Telefon reservieren",
        "reservationNote": "Online-Reservierungen sind nicht verfügbar. Bitte rufen Sie uns an: <a href=\"tel:+34622249736\">+34 622249736</a>",
        "languageSupport": "Verfügbar in 13 Sprachen"
    },
    ar: {
        "home": "الرئيسية",
        "menu": "قائمة الطعام",
        "dailyMenu": "قائمة اليوم",
        "contact": "اتصل بنا",
        "heroTitle": "تجربة كان بوينغاس",
        "heroSubtitle": "نكهات حصرية في أجواء فاخرة",
        "viewMenu": "عرض القائمة",
        "ourMenu": "قائمتنا",
        "menuSubtitle": "اختيار من الأطباق المصنوعة من مكونات عالية الجودة",
        "all": "الكل",
        "starters": "المقبلات",
        "mainCourses": "الأطباق الرئيسية",
        "desserts": "الحلويات",
        "drinks": "المشروبات",
        "dailyMenuSubtitle": "اكتشف عرضنا الغذائي اليومي",
        "todaySpecial": "طبق اليوم الخاص",
        "priceDailyMenu": "25€",
        "firstCourse": "الطبق الأول",
        "firstCourseDesc": "كريمة اليقطين مع شرائح لحم الخنزير الإيبيري المقرمشة ورقائق الذهب الصالحة للأكل",
        "secondCourse": "الطبق الثاني",
        "secondCourseDesc": "لحم أسماك القاروس المشوي مع الخضار المحمصة ومستحلب الزعفران",
        "dessertCourse": "الحلوى",
        "dessertCourseDesc": "كعكة الشوكولاتة الداكنة مع صلصة الفواكه الحمراء ورقائق الذهب",
        "includes": "يشمل",
        "includesDesc": "خبز حرفي، ماء وقهوة أو شاي أعشاب",
        "reserveNow": "احجز الآن",
        "contactUs": "اتصل بنا",
        "contactSubtitle": "احجز طاولتك أو اطلب المعلومات",
        "address": "العنوان",
        "phone": "الهاتف",
        "email": "البريد الإلكتروني",
        "hours": "ساعات العمل",
        "hoursDetail": "من الاثنين إلى السبت: 13:00 - 16:00 / 20:00 - 00:00<br>الأحد: 13:00 - 17:00",
        "selectPersons": "عدد الأشخاص",
        "morePersons": "7 أشخاص أو أكثر",
        "sendReservation": "إرسال الحجز",
        "location": "موقعنا",
        "scanContact": "امسح لحفظ جهة الاتصال",
        "qrInfo": "احفظ جهة اتصالنا عن طريق مسح رمز الاستجابة السريعة",
        "scanWebsite": "امسح لزيارة موقعنا",
        "footerDescription": "مطعم للطهي الحديث بمكونات عالية الجودة وعرض رائع.",
        "quickLinks": "روابط سريعة",
        "followUs": "تابعنا",
        "allRightsReserved": "جميع الحقوق محفوظة.",
        "languageSupport": "متاح بـ 13 لغة",
        "reservationSuccess": "تم تأكيد الحجز!",
        "reservationText": "تم استلام حجزك. سنتواصل معك قريبًا للتأكيد.",
        "okButton": "موافق",
        "shareMenu": "مشاركة القائمة",
        "printMenu": "طباعة القائمة",
        "date": "التاريخ",
        "time": "الوقت",
        "message": "رسالة",
        "specialRequests": "طلبات خاصة",
        "name": "الاسم",
        "required": "مطلوب",
        "reservationFor": "حجز لـ",
        "persons": "أشخاص",
        "selectDate": "اختر التاريخ",
        "selectTime": "اختر الوقت",
        "bookTable": "احجز طاولة",
        "viewDailyMenu": "عرض قائمة اليوم",
        "discoverMenu": "اكتشف قائمتنا",
        "followInstagram": "تابعنا على انستغرام",
        "followFacebook": "تابعنا على فيسبوك",
        "madeWithLove": "صنع بـ ❤️ في برشلونة",
        "openingHours": "ساعات العمل",
        "closed": "مغلق",
        "mondayToFriday": "الإثنين إلى الجمعة",
        "saturday": "السبت",
        "sunday": "الأحد",
        "reservations": "الحجوزات",
        "walkIn": "نرحب بالزبائن بدون حجز",
        "privateEvents": "مناسبات خاصة",
        "cateringService": "خدمة التموين",
        "winePairing": "تزويق النبيذ",
        "chefRecommendation": "توصية الشيف",
        "seasonalProducts": "منتجات موسمية",
        "organicIngredients": "مكونات عضوية",
        "glutenFreeOptions": "خيارات خالية من الغلوتين",
        "veganOptions": "خيارات نباتية",
        "suggestions": "اقتراحات",
        "menus": "قوائم",
        "salads": "سلطات",
        "seafood": "مأكولات بحرية",
        "riceDishes": "أطباق الأرز",
        "beef": "لحم البقر",
        "tortillas": "تورتيا",
        "ham": "لحم الخنزير",
        "torradas": "توست",
        "wines": "نبيذ",
        "reserveByPhone": "الحجز عبر الهاتف",
        "reservationNote": "الحجز عبر الإنترنت غير متاح. الرجاء الاتصال بنا: <a href=\"tel:+34622249736\">+34 622249736</a>",
        "languageSupport": "متاح بـ 13 لغة"
    },
    ru: {
        "home": "Главная",
        "menu": "Меню",
        "dailyMenu": "Меню дня",
        "contact": "Контакты",
        "heroTitle": "Опыт Can Buïgas",
        "heroSubtitle": "Эксклюзивные вкусы в роскошной атмосфере",
        "viewMenu": "Посмотреть меню",
        "ourMenu": "Наше меню",
        "menuSubtitle": "Выбор блюд, созданных из первоклассных ингредиентов",
        "all": "Все",
        "starters": "Закуски",
        "mainCourses": "Основные блюда",
        "desserts": "Десерты",
        "drinks": "Напитки",
        "dailyMenuSubtitle": "Откройте для себя наше ежедневное гастрономическое предложение",
        "todaySpecial": "Специальное предложение дня",
        "priceDailyMenu": "25€",
        "firstCourse": "Первое блюдо",
        "firstCourseDesc": "Тыквенный крем с хрустящей иберийской ветчиной и съедобными золотыми хлопьями",
        "secondCourse": "Второе блюдо",
        "secondCourseDesc": "Запеченное филе сибаса с жареными овощами и шафрановой эмульсией",
        "dessertCourse": "Десерт",
        "dessertCourseDesc": "Темный шоколадный торт с соусом из красных ягод и золотым листом",
        "includes": "Включает",
        "includesDesc": "Ремесленный хлеб, вода и кофе или настой",
        "reserveNow": "Забронировать сейчас",
        "contactUs": "Свяжитесь с нами",
        "contactSubtitle": "Забронируйте столик или запросите информацию",
        "address": "Адрес",
        "phone": "Телефон",
        "email": "Электронная почта",
        "hours": "Часы работы",
        "hoursDetail": "Понедельник-Суббота: 13:00 - 16:00 / 20:00 - 00:00<br>Воскресенье: 13:00 - 17:00",
        "selectPersons": "Количество человек",
        "morePersons": "7 человек или больше",
        "sendReservation": "Отправить бронирование",
        "location": "Наше местоположение",
        "scanContact": "Отсканируйте, чтобы сохранить контакт",
        "qrInfo": "Сохраните наш контакт, отсканировав QR-код",
        "scanWebsite": "Отсканируйте, чтобы посетить наш сайт",
        "footerDescription": "Ресторан современной гастрономии с ингредиентами высочайшего качества и изысканной подачей.",
        "quickLinks": "Быстрые ссылки",
        "followUs": "Подписывайтесь на нас",
        "allRightsReserved": "Все права защищены.",
        "languageSupport": "Доступно на 13 языках",
        "reservationSuccess": "Бронирование подтверждено!",
        "reservationText": "Ваше бронирование получено. Мы скоро свяжемся с вами для подтверждения.",
        "okButton": "ОК",
        "shareMenu": "Поделиться меню",
        "printMenu": "Распечатать меню",
        "date": "Дата",
        "time": "Время",
        "message": "Сообщение",
        "specialRequests": "Особые просьбы",
        "name": "Имя",
        "required": "Обязательно",
        "reservationFor": "Бронирование для",
        "persons": "человек",
        "selectDate": "Выбрать дату",
        "selectTime": "Выбрать время",
        "bookTable": "Забронировать стол",
        "viewDailyMenu": "Посмотреть меню дня",
        "discoverMenu": "Откройте наше меню",
        "followInstagram": "Подписывайтесь в Instagram",
        "followFacebook": "Подписывайтесь в Facebook",
        "madeWithLove": "Сделано с ❤️ в Барселоне",
        "openingHours": "Часы работы",
        "closed": "Закрыто",
        "mondayToFriday": "Понедельник-Пятница",
        "saturday": "Суббота",
        "sunday": "Воскресенье",
        "reservations": "Бронирование",
        "walkIn": "Гости без брони приветствуются",
        "privateEvents": "Частные мероприятия",
        "cateringService": "Кейтеринг",
        "winePairing": "Подбор вин",
        "chefRecommendation": "Рекомендация шеф-повара",
        "seasonalProducts": "Сезонные продукты",
        "organicIngredients": "Органические ингредиенты",
        "glutenFreeOptions": "Безглютеновые блюда",
        "veganOptions": "Веганские блюда",
        "suggestions": "Рекомендации",
        "menus": "Меню",
        "salads": "Салаты",
        "seafood": "Морепродукты",
        "riceDishes": "Рисовые блюда",
        "beef": "Говядина",
        "tortillas": "Тортильи",
        "ham": "Ветчина",
        "torradas": "Торадос",
        "wines": "Вина",
        "reserveByPhone": "Бронировать по телефону",
        "reservationNote": "Онлайн-бронирование недоступно. Позвоните нам: <a href=\"tel:+34622249736\">+34 622249736</a>",
        "languageSupport": "Доступно на 13 языках"
    },
    ja: {
        "home": "ホーム",
        "menu": "メニュー",
        "dailyMenu": "日替わりメニュー",
        "contact": "お問い合わせ",
        "heroTitle": "Can Buïgas エクスペリエンス",
        "heroSubtitle": "豪華な雰囲気の中での特別な味",
        "viewMenu": "メニューを見る",
        "ourMenu": "私たちのメニュー",
        "menuSubtitle": "高品質な食材で作られた料理のセレクション",
        "all": "すべて",
        "starters": "前菜",
        "mainCourses": "メインコース",
        "desserts": "デザート",
        "drinks": "ドリンク",
        "dailyMenuSubtitle": "毎日の美食提案をご覧ください",
        "todaySpecial": "本日のおすすめ",
        "priceDailyMenu": "25€",
        "firstCourse": "第一コース",
        "firstCourseDesc": "イベリアハムのクリスプと食用金箔を添えたカボチャのクリーム",
        "secondCourse": "第二コース",
        "secondCourseDesc": "ロースト野菜とサフランエマルジョンを添えた焼きスズキのロイン",
        "dessertCourse": "デザート",
        "dessertCourseDesc": "レッドフルーツソースと金箔を添えたダークチョコレートケーキ",
        "includes": "含む",
        "includesDesc": "アーティザンブレッド、水、コーヒーまたはハーブティー",
        "reserveNow": "今すぐ予約",
        "contactUs": "お問い合わせ",
        "contactSubtitle": "テーブルを予約するか、情報をリクエストする",
        "address": "住所",
        "phone": "電話",
        "email": "メール",
        "hours": "営業時間",
        "hoursDetail": "月曜日から土曜日: 13:00 - 16:00 / 20:00 - 00:00<br>日曜日: 13:00 - 17:00",
        "selectPersons": "人数",
        "morePersons": "7人以上",
        "sendReservation": "予約を送信",
        "location": "私たちの場所",
        "scanContact": "連絡先を保存するにはスキャンしてください",
        "qrInfo": "QRコードをスキャンして連絡先を保存",
        "scanWebsite": "当サイトにアクセスするにはスキャンしてください",
        "footerDescription": "最高品質の食材と洗練されたプレゼンテーションを備えた現代的な美食レストラン。",
        "quickLinks": "クイックリンク",
        "followUs": "フォローする",
        "allRightsReserved": "全著作権所有。",
        "languageSupport": "13言語で利用可能",
        "reservationSuccess": "予約が確認されました！",
        "reservationText": "ご予約を受領しました。確認のため間もなくご連絡いたします。",
        "okButton": "OK",
        "shareMenu": "メニューを共有",
        "printMenu": "メニューを印刷",
        "date": "日付",
        "time": "時間",
        "message": "メッセージ",
        "specialRequests": "特別なリクエスト",
        "name": "名前",
        "required": "必須",
        "reservationFor": "予約人数",
        "persons": "人",
        "selectDate": "日付を選択",
        "selectTime": "時間を選択",
        "bookTable": "テーブルを予約",
        "viewDailyMenu": "日替わりメニューを見る",
        "discoverMenu": "メニューを発見",
        "followInstagram": "Instagramでフォロー",
        "followFacebook": "Facebookでフォロー",
        "madeWithLove": "バルセロナで ❤️ 込めて作りました",
        "openingHours": "営業時間",
        "closed": "休業",
        "mondayToFriday": "月曜日から金曜日",
        "saturday": "土曜日",
        "sunday": "日曜日",
        "reservations": "予約",
        "walkIn": "予約なしでも大歓迎",
        "privateEvents": "プライベートイベント",
        "cateringService": "ケータリングサービス",
        "winePairing": "ワインペアリング",
        "chefRecommendation": "シェフのおすすめ",
        "seasonalProducts": "季節の食材",
        "organicIngredients": "有機食材",
        "glutenFreeOptions": "グルテンフリーオプション",
        "veganOptions": "ビーガンオプション",
        "suggestions": "おすすめ",
        "menus": "メニュー",
        "salads": "サラダ",
        "seafood": "シーフード",
        "riceDishes": "ライス料理",
        "beef": "牛肉",
        "tortillas": "トルティーヤ",
        "ham": "ハム",
        "torradas": "トラーダス",
        "wines": "ワイン",
        "reserveByPhone": "お電話での予約",
        "reservationNote": "オンライン予約は利用できません。お電話ください：<a href=\"tel:+34622249736\">+34 622249736</a>",
        "languageSupport": "13言語で利用可能"
    },
    pt: {
        "home": "Início",
        "menu": "Cardápio",
        "dailyMenu": "Menu do Dia",
        "contact": "Contato",
        "heroTitle": "Experiência Can Buïgas",
        "heroSubtitle": "Sabores exclusivos em uma atmosfera de luxo",
        "viewMenu": "Ver Cardápio",
        "ourMenu": "Nosso Cardápio",
        "menuSubtitle": "Seleção de pratos criados com ingredientes premium",
        "all": "Todos",
        "starters": "Entradas",
        "mainCourses": "Pratos Principais",
        "desserts": "Sobremesas",
        "drinks": "Bebidas",
        "dailyMenuSubtitle": "Descubra nossa proposta gastronômica diária",
        "todaySpecial": "Especial do Dia",
        "priceDailyMenu": "25€",
        "firstCourse": "Primeiro Prato",
        "firstCourseDesc": "Creme de abóbora com crocante de presunto ibérico e lascas de ouro comestível",
        "secondCourse": "Segundo Prato",
        "secondCourseDesc": "Lombo de robalo assado com legumes grelhados e emulsão de açafrão",
        "dessertCourse": "Sobremesa",
        "dessertCourseDesc": "Bolo de chocolate amargo com molho de frutas vermelhas e folha de ouro",
        "includes": "Inclui",
        "includesDesc": "Pão artesanal, agua e café ou infusão",
        "reserveNow": "Reserve Agora",
        "contactUs": "Entre em Contato",
        "contactSubtitle": "Reserve sua mesa ou solicite informações",
        "address": "Endereço",
        "phone": "Telefone",
        "email": "E-mail",
        "hours": "Horário de Funcionamento",
        "hoursDetail": "Segunda a Sábado: 13:00 - 16:00 / 20:00 - 00:00<br>Domingo: 13:00 - 17:00",
        "selectPersons": "Número de pessoas",
        "morePersons": "7 pessoas ou mais",
        "sendReservation": "Enviar Reserva",
        "location": "Nossa Localização",
        "scanContact": "Escaneie para salvar contato",
        "qrInfo": "Salve nosso contato escaneando o código QR",
        "scanWebsite": "Escaneie para visitar nosso site",
        "footerDescription": "Restaurante de gastronomia moderna com ingredientes da mais alta qualidade e apresentação requintada.",
        "quickLinks": "Links Rápidos",
        "followUs": "Siga-nos",
        "allRightsReserved": "Todos os direitos reservados.",
        "languageSupport": "Disponível em 13 idiomas",
        "reservationSuccess": "Reserva Confirmada!",
        "reservationText": "Sua reserva foi recebida. Entraremos em contato em breve para confirmar.",
        "okButton": "OK",
        "shareMenu": "Compartilhar Cardápio",
        "printMenu": "Imprimir Cardápio",
        "date": "Data",
        "time": "Hora",
        "message": "Mensagem",
        "specialRequests": "Pedidos Especiais",
        "name": "Nome",
        "required": "Obrigatório",
        "reservationFor": "Reserva para",
        "persons": "pessoas",
        "selectDate": "Selecionar data",
        "selectTime": "Selecionar hora",
        "bookTable": "Reservar Mesa",
        "viewDailyMenu": "Ver Menu do Dia",
        "discoverMenu": "Descubra Nosso Cardápio",
        "followInstagram": "Siga-nos no Instagram",
        "followFacebook": "Siga-nos no Facebook",
        "madeWithLove": "Feito com ❤️ em Barcelona",
        "openingHours": "Horário de funcionamento",
        "closed": "Fechado",
        "mondayToFriday": "Segunda a Sexta",
        "saturday": "Sábado",
        "sunday": "Domingo",
        "reservations": "Reservas",
        "walkIn": "Aceitamos clientes sem reserva",
        "privateEvents": "Eventos Privados",
        "cateringService": "Serviço de Catering",
        "winePairing": "Harmonização de Vinhos",
        "chefRecommendation": "Recomendação do Chef",
        "seasonalProducts": "Produtos Sazonais",
        "organicIngredients": "Ingredientes Orgânicos",
        "glutenFreeOptions": "Opções Sem Glúten",
        "veganOptions": "Opções Veganas",
        "suggestions": "Sugestões",
        "menus": "Menus",
        "salads": "Saladas",
        "seafood": "Mariscos",
        "riceDishes": "Pratos de Arroz",
        "beef": "Vaca",
        "tortillas": "Tortillas",
        "ham": "Presunto",
        "torradas": "Torradas",
        "wines": "Vinhos",
        "reserveByPhone": "Reservar por telefone",
        "reservationNote": "Reserva online não disponível. Por favor ligue-nos: <a href=\"tel:+34622249736\">+34 622249736</a>",
        "languageSupport": "Disponível em 13 idiomas"
    },
    it: {
        "home": "Home",
        "menu": "Menu",
        "dailyMenu": "Menu del Giorno",
        "contact": "Contatto",
        "heroTitle": "Esperienza Can Buïgas",
        "heroSubtitle": "Sapori esclusivi in un'atmosfera di lusso",
        "viewMenu": "Vedi Menu",
        "ourMenu": "Il Nostro Menu",
        "menuSubtitle": "Selezione di piatti creati con ingredienti di prima qualità",
        "all": "Tutti",
        "starters": "Antipasti",
        "mainCourses": "Piatti Principali",
        "desserts": "Dessert",
        "drinks": "Bevande",
        "dailyMenuSubtitle": "Scopri la nostra proposta gastronomica giornaliera",
        "todaySpecial": "Speciale del Giorno",
        "priceDailyMenu": "25€",
        "firstCourse": "Primo Piatto",
        "firstCourseDesc": "Crema di zucca con croccante di prosciutto iberico e scaglie d'oro commestibili",
        "secondCourse": "Secondo Piatto",
        "secondCourseDesc": "Lombo di branzino al forno con verdure arrosto ed emulsione di zafferano",
        "dessertCourse": "Dessert",
        "dessertCourseDesc": "Torta al cioccolato fondente con salsa di frutti rossi e foglia d'oro",
        "includes": "Include",
        "includesDesc": "Pane artigianale, acqua e caffè o infusione",
        "reserveNow": "Prenota Ora",
        "contactUs": "Contattaci",
        "contactSubtitle": "Prenota il tuo tavolo o richiedi informazioni",
        "address": "Indirizzo",
        "phone": "Telefono",
        "email": "Email",
        "hours": "Orari",
        "hoursDetail": "Lunedì a Sabato: 13:00 - 16:00 / 20:00 - 00:00<br>Domenica: 13:00 - 17:00",
        "selectPersons": "Numero di persone",
        "morePersons": "7 persone o più",
        "sendReservation": "Invia Prenotazione",
        "location": "La Nostra Posizione",
        "scanContact": "Scansiona per salvare il contatto",
        "qrInfo": "Salva il nostro contatto scansionando il codice QR",
        "scanWebsite": "Scansiona per visitare il nostro sito",
        "footerDescription": "Ristorante di gastronomia moderna con ingredienti di massima qualità e presentazione squisita.",
        "quickLinks": "Link Rapidi",
        "followUs": "Seguici",
        "allRightsReserved": "Tutti i diritti riservati.",
        "languageSupport": "Disponibile in 13 lingue",
        "reservationSuccess": "Prenotazione Confermata!",
        "reservationText": "La tua prenotazione è stata ricevuta. Ti contatteremo presto per confermare.",
        "okButton": "OK",
        "shareMenu": "Condividi Menu",
        "printMenu": "Stampa Menu",
        "date": "Data",
        "time": "Ora",
        "message": "Messaggio",
        "specialRequests": "Richieste Speciali",
        "name": "Nome",
        "required": "Obbligatorio",
        "reservationFor": "Prenotazione per",
        "persons": "persone",
        "selectDate": "Seleziona data",
        "selectTime": "Seleziona ora",
        "bookTable": "Prenota Tavolo",
        "viewDailyMenu": "Vedi Menu del Giorno",
        "discoverMenu": "Scopri il Nostro Menu",
        "followInstagram": "Seguici su Instagram",
        "followFacebook": "Seguici su Facebook",
        "madeWithLove": "Fatto con ❤️ a Barcellona",
        "openingHours": "Orari di apertura",
        "closed": "Chiuso",
        "mondayToFriday": "Lunedì a Venerdì",
        "saturday": "Sabato",
        "sunday": "Domenica",
        "reservations": "Prenotazioni",
        "walkIn": "Clienti senza prenotazione benvenuti",
        "privateEvents": "Eventi Privati",
        "cateringService": "Servizio di Catering",
        "winePairing": "Abbinamento Vini",
        "chefRecommendation": "Raccomandazione dello Chef",
        "seasonalProducts": "Prodotti Stagionali",
        "organicIngredients": "Ingredienti Biologici",
        "glutenFreeOptions": "Opzioni Senza Glutine",
        "veganOptions": "Opzioni Vegane",
        "suggestions": "Suggerimenti",
        "menus": "Menu",
        "salads": "Insalate",
        "seafood": "Frutti di Mare",
        "riceDishes": "Piatti di Riso",
        "beef": "Manzo",
        "tortillas": "Tortillas",
        "ham": "Prosciutto",
        "torradas": "Torradas",
        "wines": "Vini",
        "reserveByPhone": "Prenota per telefono",
        "reservationNote": "La prenotazione online non è disponibile. Per favore chiamaci: <a href=\"tel:+34622249736\">+34 622249736</a>",
        "languageSupport": "Disponibile in 13 lingue"
    },
    ko: {
        "home": "홈",
        "menu": "메뉴",
        "dailyMenu": "일일 메뉴",
        "contact": "연락처",
        "heroTitle": "Can Buïgas 경험",
        "heroSubtitle": "럭셔리한 분위기에서의 독점적인 맛",
        "viewMenu": "메뉴 보기",
        "ourMenu": "우리의 메뉴",
        "menuSubtitle": "프리미엄 재료로 만든 요리 선택",
        "all": "모두",
        "starters": "에피타이저",
        "mainCourses": "메인 요리",
        "desserts": "디저트",
        "drinks": "음료",
        "dailyMenuSubtitle": "매일 제공되는 미식 제안을 발견하세요",
        "todaySpecial": "오늘의 특선",
        "priceDailyMenu": "25€",
        "firstCourse": "첫 번째 코스",
        "firstCourseDesc": "이베리안 햄 크리스프와 식용 금박을 곁들인 호박 크림",
        "secondCourse": "두 번째 코스",
        "secondCourseDesc": "로스팅한 채소와 사프란 에멀젼을 곁들인 구운 농어 로인",
        "dessertCourse": "디저트",
        "dessertCourseDesc": "레드 과일 소스와 금박을 곁들인 다크 초콜릿 케이크",
        "includes": "포함",
        "includesDesc": "아티산 빵, 물, 커피 또는 허브 차",
        "reserveNow": "지금 예약",
        "contactUs": "문의하기",
        "contactSubtitle": "테이블 예약 또는 정보 요청",
        "address": "주소",
        "phone": "전화",
        "email": "이메일",
        "hours": "영업 시간",
        "hoursDetail": "월요일부터 토요일: 13:00 - 16:00 / 20:00 - 00:00<br>일요일: 13:00 - 17:00",
        "selectPersons": "인원 수",
        "morePersons": "7명 이상",
        "sendReservation": "예약 보내기",
        "location": "우리의 위치",
        "scanContact": "연락처 저장을 위해 스캔하세요",
        "qrInfo": "QR 코드를 스캔하여 연락처 저장",
        "scanWebsite": "웹사이트 방문을 위해 스캔하세요",
        "footerDescription": "최고 품질의 재료와 정교한 프레젠테이션을 갖춘 현대적인 미식 레스토랑.",
        "quickLinks": "빠른 링크",
        "followUs": "팔로우하기",
        "allRightsReserved": "모든 권리 보유.",
        "languageSupport": "13개 언어로 이용 가능",
        "reservationSuccess": "예약 확인됨!",
        "reservationText": "귀하의 예약이 접수되었습니다. 확인을 위해 곧 연락드리겠습니다.",
        "okButton": "확인",
        "shareMenu": "메뉴 공유",
        "printMenu": "메뉴 인쇄",
        "date": "날짜",
        "time": "시간",
        "message": "메시지",
        "specialRequests": "특별 요청",
        "name": "이름",
        "required": "필수",
        "reservationFor": "예약 인원",
        "persons": "명",
        "selectDate": "날짜 선택",
        "selectTime": "시간 선택",
        "bookTable": "테이블 예약",
        "viewDailyMenu": "일일 메뉴 보기",
        "discoverMenu": "메뉴 발견하기",
        "followInstagram": "인스타그램에서 팔로우",
        "followFacebook": "페이스북에서 팔로우",
        "madeWithLove": "바르셀로나에서 ❤️ 만든",
        "openingHours": "영업 시간",
        "closed": "휴무",
        "mondayToFriday": "월요일부터 금요일",
        "saturday": "토요일",
        "sunday": "일요일",
        "reservations": "예약",
        "walkIn": "예약 없이도 환영합니다",
        "privateEvents": "프라이빗 이벤트",
        "cateringService": "케이터링 서비스",
        "winePairing": "와인 페어링",
        "chefRecommendation": "셰프 추천",
        "seasonalProducts": "계절 식재료",
        "organicIngredients": "유기농 재료",
        "glutenFreeOptions": "글루텐 프리 옵션",
        "veganOptions": "비건 옵션",
        "suggestions": "추천",
        "menus": "메뉴",
        "salads": "샐러드",
        "seafood": "해산물",
        "riceDishes": "쌀 요리",
        "beef": "소고기",
        "tortillas": "토르티야",
        "ham": "햄",
        "torradas": "토라다스",
        "wines": "와인",
        "reserveByPhone": "전화로 예약",
        "reservationNote": "온라인 예약은 이용할 수 없습니다. 전화로 문의하세요：<a href=\"tel:+34622249736\">+34 622249736</a>",
        "languageSupport": "13개 언어로 이용 가능"
    }
};



// Mapeo de banderas para cada idioma - CON FLAG-ICONS
const flagMap = {
    'es': 'fi fi-es',
    'en': 'fi fi-gb',
    'zh': 'fi fi-cn',
    'hi': 'fi fi-in',
    'fr': 'fi fi-fr',
    'de': 'fi fi-de',
    'ar': 'fi fi-sa',
    'ru': 'fi fi-ru',
    'ja': 'fi fi-jp',
    'pt': 'fi fi-pt',
    'it': 'fi fi-it',
    'ko': 'fi fi-kr',
    'ca': 'fi fi-es-ct'
};

const menuItems = [
    /* Menús / Especiales */
    { id: 1, name: 'Menu chuletón (2 personas)', description: 'Chuleta para compartir (2 pax).', price: 60, category: 'menus', image: '🥩' },
    { id: 2, name: 'Menu paella (2 personas)', description: 'Paella tradicional para dos.', price: 45, category: 'menus', image: '🍚' },

    /* Sugerencias */
    { id: 3, name: 'Plato de Rovellons', description: '', price: 15, category: 'sugerencias', image: '🍄' },
    { id: 4, name: '10 calçots de vall con romesco', description: '', price: 10, category: 'sugerencias', image: '🧅' },
    { id: 5, name: 'Albóndigas caseras en salsa', description: '', price: 10, category: 'sugerencias', image: '🍝' },
    { id: 6, name: 'Tortilla casera de patatas', description: '', price: 7.5, category: 'sugerencias', image: '🥚' },
    { id: 7, name: 'Empanadillas caseras de carne', description: '', price: 3.5, category: 'sugerencias', image: '🥟' },
    { id: 8, name: 'Ostras francesas Jolies Mauger (unidad)', description: '', price: 4, category: 'sugerencias', image: '🦪' },

    /* Sugerencias (detalle) */
    { id: 9, name: 'Pan de cristal con tomate', description: '', price: 3.9, category: 'sugerencias', image: '🍞' },
    { id: 10, name: 'Ensaladilla rusa casera', description: '', price: 6, category: 'sugerencias', image: '🥗' },
    { id: 11, name: 'Buñuelos de bacalao (unidad)', description: '', price: 1.8, category: 'sugerencias', image: '🐟' },
    { id: 12, name: 'Croquetas de jamón ibérico (unidad)', description: '', price: 2.7, category: 'sugerencias', image: '🥓' },
    { id: 13, name: 'Croquetas de pollo (unidad)', description: '', price: 2.6, category: 'sugerencias', image: '🐔' },
    { id: 14, name: 'Empanadillas caseras de atún (unidad)', description: '', price: 2.7, category: 'sugerencias', image: '🐟' },
    { id: 15, name: 'Anchoas del Cantábrico (10 filetes)', description: '', price: 9, category: 'sugerencias', image: '🐟' },
    { id: 16, name: 'Morcilla de Burgos, cebolla caramelizada', description: '', price: 8, category: 'sugerencias', image: '🌭' },
    { id: 17, name: 'Lacón con cachelos', description: '', price: 8.5, category: 'sugerencias', image: '🍖' },
    { id: 18, name: 'Chistorra a la sidra', description: '', price: 5.5, category: 'sugerencias', image: '🌭' },
    { id: 19, name: 'Oreja de cerdo a la gallega', description: '', price: 7.5, category: 'sugerencias', image: '🐷' },
    { id: 20, name: 'Callos a la madrileña con jamón ibérico', description: '', price: 12, category: 'sugerencias', image: '🍲' },
    { id: 21, name: 'Pulpo a la gallega 250gr', description: '', price: 22, category: 'sugerencias', image: '🐙' },
    { id: 22, name: 'Queso manchego curado', description: '', price: 10, category: 'sugerencias', image: '🧀' },
    { id: 23, name: 'Calamarcitos a la andaluza (rebozados)', description: '', price: 14, category: 'sugerencias', image: '🦑' },
    { id: 24, name: 'Tortilla de patatas casera con pan de tomate', description: '', price: 7.5, category: 'sugerencias', image: '🥔' },
    { id: 25, name: 'Patatas bravas caseras', description: '', price: 5.5, category: 'sugerencias', image: '🥔' },
    { id: 26, name: 'Pimientos del Padrón', description: '', price: 4.8, category: 'sugerencias', image: '🌶️' },
    { id: 27, name: 'Costillas de cordero a la plancha', description: '', price: 18, category: 'sugerencias', image: '🍖' },
    { id: 28, name: 'Rabo de toro al vino tinto', description: '', price: 14, category: 'sugerencias', image: '🍖' },
    { id: 29, name: 'Tortilla de bacalao con ajo y perejil', description: '', price: 12, category: 'sugerencias', image: '🥚' },

    /* Jamón */
    { id: 30, name: '100gr de jamón ibérico cortado a mano', description: '', price: 19, category: 'jamon', image: '🍖' },
    { id: 31, name: '50gr de jamón ibérico', description: '', price: 12, category: 'jamon', image: '🍖' },
    { id: 32, name: 'Plato combinado ibérico', description: '', price: 25, category: 'jamon', image: '🍽️' },

    /* Torradas */
    { id: 33, name: 'Torrada de jamón ibérico', description: '', price: 11, category: 'torradas', image: '🥖' },
    { id: 34, name: 'Torrada de queso manchego', description: '', price: 8, category: 'torradas', image: '🧀' },
    { id: 35, name: 'Torrada de anchoas del Cantábrico', description: '', price: 10, category: 'torradas', image: '🐟' },

    /* Ensaladas */
    { id: 36, name: 'Ensalada de queso de cabra', description: '', price: 12, category: 'ensaladas', image: '🥗' },
    { id: 37, name: 'Ensalada de ventresca de atún con cebolla y tomate', description: '', price: 12, category: 'ensaladas', image: '🐟' },
    { id: 38, name: 'Ensaladilla rusa casera con espárragos blancos y jamón dulce', description: '', price: 12, category: 'ensaladas', image: '🥗' },
    { id: 39, name: 'Espárragos trigueros con salsa de romesco y tomate a la plancha', description: '', price: 8, category: 'ensaladas', image: '🥦' },
    { id: 40, name: 'Parrillada de verduras con salsa romesco', description: '', price: 12, category: 'ensaladas', image: '🥦' },

    /* Mariscos */
    { id: 41, name: 'Tallarinas a la plancha', description: '', price: 10, category: 'mariscos', image: '🦐' },
    { id: 42, name: 'Gamba langostinera a la plancha (6 unidades)', description: '', price: 18, category: 'mariscos', image: '🦐' },
    { id: 43, name: 'Mejillones a la plancha', description: '', price: 10, category: 'mariscos', image: '🦪' },
    { id: 44, name: 'Ostras (unidad)', description: '', price: 4, category: 'mariscos', image: '🦪' },
    { id: 45, name: 'Sepia a la plancha', description: '', price: 14, category: 'mariscos', image: '🦑' },

    /* Arroces */
    { id: 46, name: 'Paella de mariscos (2 personas)', description: '', price: 16, category: 'arroces', image: '🍚' },
    { id: 47, name: 'Paella de bogavantes (2 personas)', description: '', price: 25, category: 'arroces', image: '🦞' },
    { id: 48, name: 'Arroz caldoso de bogavantes (2 personas)', description: '', price: 22, category: 'arroces', image: '🦞' },
    { id: 49, name: 'Arroz negro con sepia (2 personas)', description: '', price: 18, category: 'arroces', image: '🦑' },
    { id: 50, name: 'Fideuà de gambas y calamares', description: '', price: 16, category: 'arroces', image: '🍜' },
    { id: 51, name: 'Arroz del señorito de marisco', description: '', price: 17, category: 'arroces', image: '🍚' },

    /* Ternera Gallega */
    { id: 52, name: 'Chuletón de ternera gallega 700gr', description: '', price: 45, category: 'ternera', image: '🥩' },
    { id: 53, name: 'Entrecot de ternera gallega 350gr', description: '', price: 23, category: 'ternera', image: '🥩' },
    { id: 54, name: 'Solomillo de ternera gallega 250gr', description: '', price: 26, category: 'ternera', image: '🥩' },
    { id: 55, name: 'Butifarra de Calaf con mongetas', description: '', price: 10, category: 'ternera', image: '🌭' },
    { id: 56, name: 'Costillitas de cordero a la plancha', description: '', price: 19, category: 'ternera', image: '🍖' },

    /* Tortillas */
    { id: 57, name: 'Tortilla de bacalao con ajo y perejil', description: '', price: 12, category: 'tortillas', image: '🥚' },
    { id: 58, name: 'Tortilla de queso con pan de cristal', description: '', price: 7.5, category: 'tortillas', image: '🧀' },
    { id: 59, name: 'Tortilla de atún con pan de cristal', description: '', price: 9, category: 'tortillas', image: '🐟' },
    { id: 60, name: 'Tortilla de patatas casera', description: '', price: 7.5, category: 'tortillas', image: '🥔' },

    /* Vinos (selección) */
    { id: 61, name: "Macán Rioja (Bodega Vega Sicilia)", description: '', price: 100, category: 'vinos', image: '🍷' },
    { id: 62, name: 'Clos de Galena Priorat 2019', description: '', price: 55, category: 'vinos', image: '🍷' },
    { id: 63, name: 'Pago de Carraovejas', description: '', price: 55, category: 'vinos', image: '🍷' },
    { id: 64, name: 'Raza Carmelo Rodero (reserva)', description: '', price: 50, category: 'vinos', image: '🍷' },
    { id: 65, name: 'Mauro de Castilla y León', description: '', price: 52, category: 'vinos', image: '🍷' },
    { id: 66, name: 'Contino Rioja reserva 2020', description: '', price: 42, category: 'vinos', image: '🍷' },
    { id: 67, name: 'Protos crianza', description: '', price: 32, category: 'vinos', image: '🍷' },
    { id: 68, name: 'Ramón Bilbao Rioja crianza', description: '', price: 22, category: 'vinos', image: '🍷' },
    { id: 69, name: 'Delecto Ribera del Duero', description: '', price: 19, category: 'vinos', image: '🍷' },
    { id: 70, name: 'Viña Pomal Rioja 2019', description: '', price: 19, category: 'vinos', image: '🍷' },
    { id: 71, name: 'Coto crianza Rioja', description: '', price: 18, category: 'vinos', image: '🍷' },
    { id: 72, name: 'Lopez de Haro Rioja 2020', description: '', price: 17, category: 'vinos', image: '🍷' },
    { id: 73, name: 'Pozo Baion Albariño', description: '', price: 32, category: 'vinos', image: '🍷' },
    { id: 74, name: 'Mar de Frades Rías Baixas', description: '', price: 30, category: 'vinos', image: '🍷' },
    { id: 75, name: 'Oluar DoSil Godello', description: '', price: 23, category: 'vinos', image: '🍷' },
    { id: 76, name: 'Perro Verde Verdejo', description: '', price: 22, category: 'vinos', image: '🍷' },
    { id: 77, name: 'Martín Códax Albariño', description: '', price: 22, category: 'vinos', image: '🍷' },
    { id: 78, name: 'Protos Verdejo Rueda 2022', description: '', price: 18, category: 'vinos', image: '🍷' },
    { id: 79, name: 'Goleta Azul Verdejo Rueda', description: '', price: 17, category: 'vinos', image: '🍷' },
    { id: 80, name: 'Miereia Penedès Afrutado', description: '', price: 16, category: 'vinos', image: '🍷' },
    { id: 81, name: 'Marqués de Riscal', description: '', price: 22, category: 'vinos', image: '🍷' },
    { id: 82, name: 'Protos rosado (copa)', description: '', price: 5, category: 'vinos', image: '🥂' },
    { id: 83, name: 'Lopez de Haro Rioja (copa)', description: '', price: 4.1, category: 'vinos', image: '🥂' },
    { id: 84, name: 'Delecto Ribera del Duero (copa)', description: '', price: 4.4, category: 'vinos', image: '🥂' },
    { id: 85, name: 'Habla del Silencio (copa)', description: '', price: 5, category: 'vinos', image: '🥂' },
    { id: 86, name: 'Condado de Haza (copa)', description: '', price: 8, category: 'vinos', image: '🥂' },
    { id: 87, name: 'Pruno Crianza (copa)', description: '', price: 5, category: 'vinos', image: '🥂' },
    { id: 88, name: 'Goleta Verde Rueda (copa)', description: '', price: 4, category: 'vinos', image: '🥂' },
    { id: 89, name: 'Gran Feudo (copa)', description: '', price: 4, category: 'vinos', image: '🥂' }
];

// Traducciones por ID de plato (nombres y descripciones)

const itemTranslations = {
    1: {
        en: { name: 'Ribeye Menu (for 2)', description: 'Ribeye to share (2 people).' },
        ca: { name: "Menú chuletó (2 persones)", description: 'Chuletó per compartir (2 pax).' },
        zh: { name: '肋眼牛排套餐（2人份）', description: '分享用的肋眼牛排（2人）' },
        hi: { name: 'रिबआई मेनू (2 व्यक्तियों के लिए)', description: 'साझा करने के लिए रिबआई (2 लोग)।' },
        fr: { name: 'Menu côte de bœuf (2 personnes)', description: 'Côte de bœuf à partager (2 personnes).' },
        de: { name: 'Ribeye-Menü (für 2)', description: 'Ribeye zum Teilen (2 Personen).' },
        ar: { name: 'قائمة ريب آي (لشخصين)', description: 'ريب آي للمشاركة (شخصان).' },
        ru: { name: 'Меню рибай (на 2 персоны)', description: 'Рибай для двоих.' },
        ja: { name: 'リブアイメニュー（2名様）', description: 'シェア用リブアイ（2名）。' },
        pt: { name: 'Menu costeleta (2 pessoas)', description: 'Costeleta para partilhar (2 pessoas).' },
        it: { name: 'Menu costata (2 persone)', description: 'Costata da condividere (2 persone).' },
        ko: { name: '립아이 메뉴 (2인)', description: '공유용 립아이 (2인).' }
    },
    2: {
        en: { name: 'Paella Menu (for 2)', description: 'Traditional paella for two.' },
        ca: { name: 'Menú paella (2 persones)', description: 'Paella tradicional per a dues persones.' },
        zh: { name: '西班牙海鲜饭套餐（2人份）', description: '传统双人海鲜饭。' },
        hi: { name: 'पेला मेनू (2 व्यक्तियों के लिए)', description: 'दो लोगों के लिए पारंपरिक पेला।' },
        fr: { name: 'Menu paella (2 personnes)', description: 'Paëlla traditionnelle pour deux.' },
        de: { name: 'Paella-Menü (für 2)', description: 'Traditionelle Paella für zwei Personen.' },
        ar: { name: 'قائمة الباييلا (لشخصين)', description: 'باييلا تقليدية لشخصين.' },
        ru: { name: 'Меню паэлья (на 2 персоны)', description: 'Традиционная паэлья на двоих.' },
        ja: { name: 'パエリアメニュー（2名様）', description: '伝統的な2人用パエリア。' },
        pt: { name: 'Menu paella (2 pessoas)', description: 'Paella tradicional para duas pessoas.' },
        it: { name: 'Menu paella (2 persone)', description: 'Paella tradizionale per due persone.' },
        ko: { name: '파에야 메뉴 (2인)', description: '전통적인 2인용 파에야.' }
    },
    3: {
        en: { name: 'Rovellons Plate', description: 'Seasonal rovellons mushrooms.' },
        ca: { name: 'Plat de Rovellons', description: 'Rovellons (bolets de temporada).' },
        zh: { name: '牛肝菌拼盘', description: '时令牛肝菌蘑菇。' },
        hi: { name: 'रोवेलोन्स प्लेट', description: 'मौसमी रोवेलोन्स मशरूम।' },
        fr: { name: 'Assiette de rovellons', description: 'Rovellons (champignons de saison).' },
        de: { name: 'Rovellons-Teller', description: 'Saisonale Rovellons-Pilze.' },
        ar: { name: 'طبق الروفيلون', description: 'فطر الروفيلون الموسمي.' },
        ru: { name: 'Блюдо Rovellons', description: 'Сезонные грибы Rovellons.' },
        ja: { name: 'ロベジョンの一皿', description: '季節のロベジョンきのこ。' },
        pt: { name: 'Prato de Rovellons', description: 'Rovellons (cogumelos da época).' },
        it: { name: 'Piatto di Rovellons', description: 'Rovellons (funghi di stagione).' },
        ko: { name: '로벨론 요리', description: '제철 로벨론 버섯.' }
    },
    4: {
        en: { name: '10 Calçots from Vallès with Romesco', description: '' },
        ca: { name: '10 calçots de vall amb romesco', description: '' },
        zh: { name: '10个瓦莱斯葱配罗梅斯科酱', description: '' },
        hi: { name: '10 वैलेस कैल्कोट्स रोम्स्को सॉस के साथ', description: '' },
        fr: { name: '10 calçots de Vallès avec romesco', description: '' },
        de: { name: '10 Calçots aus Vallès mit Romesco', description: '' },
        ar: { name: '10 كالسيوتس من فاليز مع صلصة الرومسكو', description: '' },
        ru: { name: '10 луковиц калсот из Вальеса с соусом ромеско', description: '' },
        ja: { name: 'バレス産カルソット10本とロメスコソース', description: '' },
        pt: { name: '10 calçots de Vallès com romesco', description: '' },
        it: { name: '10 calçots di Vallès con romesco', description: '' },
        ko: { name: '발레스 산 칼소트 10개와 로메스코 소스', description: '' }
    },
    5: {
        en: { name: 'Homemade Meatballs in Sauce', description: '' },
        ca: { name: 'Pilotes casolanes en salsa', description: '' },
        zh: { name: '自制酱汁肉丸', description: '' },
        hi: { name: 'सॉस में घर का बना मीटबॉल', description: '' },
        fr: { name: 'Boulettes de viande maison en sauce', description: '' },
        de: { name: 'Hausgemachte Fleischbällchen in Soße', description: '' },
        ar: { name: 'كرات اللحم المصنوعة منزلياً في صلصة', description: '' },
        ru: { name: 'Домашние тефтели в соусе', description: '' },
        ja: { name: '手作りミートボールのソース煮込み', description: '' },
        pt: { name: 'Almôndegas caseiras em molho', description: '' },
        it: { name: 'Polpette casalinghe in salsa', description: '' },
        ko: { name: '수제 미트볼 소스 요리', description: '' }
    },
    6: {
        en: { name: 'Homemade Potato Omelette', description: '' },
        ca: { name: 'Truita de patates casolana', description: '' },
        zh: { name: '自制土豆蛋饼', description: '' },
        hi: { name: 'घर का बना आलू ऑमलेट', description: '' },
        fr: { name: 'Omelette aux pommes de terre maison', description: '' },
        de: { name: 'Hausgemachtes Kartoffelomelett', description: '' },
        ar: { name: 'أومليت البطاطس المصنوعة منزلياً', description: '' },
        ru: { name: 'Домашний картофельный омлет', description: '' },
        ja: { name: '手作りポテトオムレツ', description: '' },
        pt: { name: 'Tortilha de batata caseira', description: '' },
        it: { name: 'Frittata di patate casalinga', description: '' },
        ko: { name: '수제 감자 오믈렛', description: '' }
    },
    7: {
        en: { name: 'Homemade Meat Empanadillas', description: '' },
        ca: { name: 'Empanades casolanes de carn', description: '' },
        zh: { name: '自制肉馅饼', description: '' },
        hi: { name: 'घर का बना मीट एम्पानाडिलास', description: '' },
        fr: { name: 'Empanadillas de viande maison', description: '' },
        de: { name: 'Hausgemachte Fleisch-Empanadillas', description: '' },
        ar: { name: 'إمباناديلاس اللحم المصنوعة منزلياً', description: '' },
        ru: { name: 'Домашние эмпанадильяс с мясом', description: '' },
        ja: { name: '手作り肉のエンパナーダ', description: '' },
        pt: { name: 'Empanadas de carne caseiras', description: '' },
        it: { name: 'Empanadillas di carne casalinghe', description: '' },
        ko: { name: '수제 고기 엠파나다', description: '' }
    },
    8: {
        en: { name: 'French Oysters Jolies Mauger (each)', description: '' },
        ca: { name: "Ostres franceses Jolies Mauger (unitat)", description: '' },
        zh: { name: '法国Jolies Mauger生蚝（每只）', description: '' },
        hi: { name: 'फ्रेंच ऑयस्टर्स जोलीज मोगर (प्रत्येक)', description: '' },
        fr: { name: 'Huîtres françaises Jolies Mauger (unité)', description: '' },
        de: { name: 'Französische Austern Jolies Mauger (Stück)', description: '' },
        ar: { name: 'محار فرنسي جولي موجر (القطعة)', description: '' },
        ru: { name: 'Французские устрицы Jolies Mauger (штука)', description: '' },
        ja: { name: 'フランス産ジョリー・モージェ牡蠣（1個）', description: '' },
        pt: { name: 'Ostras francesas Jolies Mauger (unidade)', description: '' },
        it: { name: 'Ostriche francesi Jolies Mauger (unità)', description: '' },
        ko: { name: '프랑스산 졸리 모제 굴 (1개)', description: '' }
    },
    9: {
        en: { name: 'Glass Bread with Tomato', description: '' },
        ca: { name: 'Pa de vidre amb tomàquet', description: '' },
        zh: { name: '玻璃面包配番茄', description: '' },
        hi: { name: 'टमाटर के साथ ग्लास ब्रेड', description: '' },
        fr: { name: 'Pain de verre à la tomate', description: '' },
        de: { name: 'Glasbrot mit Tomate', description: '' },
        ar: { name: 'خبز الزجاج مع الطماطم', description: '' },
        ru: { name: 'Хрустящий хлеб с помидорами', description: '' },
        ja: { name: 'トマトのグラスペン', description: '' },
        pt: { name: 'Pão de vidro com tomate', description: '' },
        it: { name: 'Pane di vetro con pomodoro', description: '' },
        ko: { name: '토마토를 곁들인 글래스 브레드', description: '' }
    },
    10: {
        en: { name: 'Homemade Russian Salad', description: '' },
        ca: { name: 'Amanida russa casolana', description: '' },
        zh: { name: '自制俄式沙拉', description: '' },
        hi: { name: 'घर का बना रूसी सलाद', description: '' },
        fr: { name: 'Salade russe maison', description: '' },
        de: { name: 'Hausgemachter russischer Salat', description: '' },
        ar: { name: 'سلطة روسية منزلية الصنع', description: '' },
        ru: { name: 'Домашний салат оливье', description: '' },
        ja: { name: '手作りロシアサラダ', description: '' },
        pt: { name: 'Salada russa caseira', description: '' },
        it: { name: 'Insalata russa casalinga', description: '' },
        ko: { name: '수제 러시안 샐러드', description: '' }
    },
    11: {
        en: { name: 'Cod Fritters (each)', description: '' },
        ca: { name: 'Buñols de bacallà (unitat)', description: '' },
        zh: { name: '鳕鱼炸丸子（每个）', description: '' },
        hi: { name: 'कॉड फ्रिटर्स (प्रत्येक)', description: '' },
        fr: { name: 'Beignets de morue (unité)', description: '' },
        de: { name: 'Kabeljau-Bällchen (Stück)', description: '' },
        ar: { name: 'فطائر القد (القطعة)', description: '' },
        ru: { name: 'Тресковые оладьи (штука)', description: '' },
        ja: { name: 'タラのフリッター（1個）', description: '' },
        pt: { name: 'Bolinho de bacalhau (unidade)', description: '' },
        it: { name: 'Frittelle di baccalà (unità)', description: '' },
        ko: { name: '대구 튀김 (1개)', description: '' }
    },
    12: {
        en: { name: 'Iberian Ham Croquettes (each)', description: '' },
        ca: { name: 'Croquetes de pernil ibèric (unitat)', description: '' },
        zh: { name: '伊比利亚火腿炸丸子（每个）', description: '' },
        hi: { name: 'इबेरियन हैम क्रोकेट्स (प्रत्येक)', description: '' },
        fr: { name: 'Croquettes de jambon ibérique (unité)', description: '' },
        de: { name: 'Iberischer Schinken-Kroketten (Stück)', description: '' },
        ar: { name: 'كروكيت لحم الخنزير الإيبيري (القطعة)', description: '' },
        ru: { name: 'Крокеты с иберийской ветчиной (штука)', description: '' },
        ja: { name: 'イベリコハムのクロケット（1個）', description: '' },
        pt: { name: 'Croquetes de presunto ibérico (unidade)', description: '' },
        it: { name: 'Crocchette di prosciutto iberico (unità)', description: '' },
        ko: { name: '이베리아 햄 크로켓 (1개)', description: '' }
    },
    13: {
        en: { name: 'Chicken Croquettes (each)', description: '' },
        ca: { name: 'Croquetes de pollastre (unitat)', description: '' },
        zh: { name: '鸡肉炸丸子（每个）', description: '' },
        hi: { name: 'चिकन क्रोकेट्स (प्रत्येक)', description: '' },
        fr: { name: 'Croquettes de poulet (unité)', description: '' },
        de: { name: 'Hühner-Kroketten (Stück)', description: '' },
        ar: { name: 'كروكيت الدجاج (القطعة)', description: '' },
        ru: { name: 'Куриные крокеты (штука)', description: '' },
        ja: { name: 'チキンのクロケット（1個）', description: '' },
        pt: { name: 'Croquetes de frango (unidade)', description: '' },
        it: { name: 'Crocchette di pollo (unità)', description: '' },
        ko: { name: '치킨 크로켓 (1개)', description: '' }
    },
    14: {
        en: { name: 'Homemade Tuna Empanadillas (each)', description: '' },
        ca: { name: 'Empanades casolanes de tonyina (unitat)', description: '' },
        zh: { name: '自制金枪鱼馅饼（每个）', description: '' },
        hi: { name: 'घर का बना टूना एम्पानाडिलास (प्रत्येक)', description: '' },
        fr: { name: 'Empanadillas de thon maison (unité)', description: '' },
        de: { name: 'Hausgemachte Thunfisch-Empanadillas (Stück)', description: '' },
        ar: { name: 'إمباناديلاس التونة المصنوعة منزلياً (القطعة)', description: '' },
        ru: { name: 'Домашние эмпанадильяс с тунцом (штука)', description: '' },
        ja: { name: '手作りマグロのエンパナーダ（1個）', description: '' },
        pt: { name: 'Empanadas de atum caseiras (unidade)', description: '' },
        it: { name: 'Empanadillas di tonno casalinghe (unità)', description: '' },
        ko: { name: '수제 참치 엠파나다 (1개)', description: '' }
    },
    15: {
        en: { name: 'Anchovies from Cantabrian Sea (10 fillets)', description: '' },
        ca: { name: 'Seitons del Cantàbric (10 filets)', description: '' },
        zh: { name: '坎塔布连海凤尾鱼（10片）', description: '' },
        hi: { name: 'कैंटाब्रियन सागर से एंकोवी (10 फिललेट्स)', description: '' },
        fr: { name: 'Anchois de la mer Cantabrique (10 filets)', description: '' },
        de: { name: 'Sardellen aus dem Kantabrischen Meer (10 Filets)', description: '' },
        ar: { name: 'أنشوجة من بحر كانتابريا (10 شرائح)', description: '' },
        ru: { name: 'Анчоусы из Кантабрийского моря (10 филе)', description: '' },
        ja: { name: 'カンタブリア海産アンチョビ（10切れ）', description: '' },
        pt: { name: 'Anchovas do Mar Cantábrico (10 filés)', description: '' },
        it: { name: 'Acciughe del Mar Cantabrico (10 filetti)', description: '' },
        ko: { name: '칸타브리아해 멸치 (10필레)', description: '' }
    },
    16: {
        en: { name: 'Burgos Blood Sausage with Caramelized Onions', description: '' },
        ca: { name: 'Botifarra negra de Burgos, ceba caramel·litzada', description: '' },
        zh: { name: '布尔戈斯血肠配焦糖洋葱', description: '' },
        hi: { name: 'कारमेलाइज्ड प्याज के साथ बर्गोस ब्लड सॉसेज', description: '' },
        fr: { name: 'Boudin de Burgos, oignons caramélisés', description: '' },
        de: { name: 'Burgos Blutwurst mit karamellisierten Zwiebeln', description: '' },
        ar: { name: 'سجق الدم من بورغوس مع البصل المكرمل', description: '' },
        ru: { name: 'Кровяная колбаса из Бургоса с карамелизированным луком', description: '' },
        ja: { name: 'ブルゴス産ブラッドソーセージとキャラメリゼオニオン', description: '' },
        pt: { name: 'Morcela de Burgos, cebola caramelizada', description: '' },
        it: { name: 'Sanguinaccio di Burgos, cipolle caramellate', description: '' },
        ko: { name: '부르고스 블러드 소시지와 카라멜라이즈드 양파', description: '' }
    },
    17: {
        en: { name: 'Lacón with Cachelos', description: '' },
        ca: { name: 'Lacón amb cachelos', description: '' },
        zh: { name: '拉克翁猪肉配土豆', description: '' },
        hi: { name: 'कैचेलोस के साथ लाकॉन', description: '' },
        fr: { name: 'Lacón avec cachelos', description: '' },
        de: { name: 'Lacón mit Cachelos', description: '' },
        ar: { name: 'لازون مع كاتشيلوس', description: '' },
        ru: { name: 'Лакон с качелос (картофелем)', description: '' },
        ja: { name: 'ラコンとカチェロス', description: '' },
        pt: { name: 'Lacón com cachelos', description: '' },
        it: { name: 'Lacón con cachelos', description: '' },
        ko: { name: '라콘과 카첼로스', description: '' }
    },
    18: {
        en: { name: 'Chistorra in Cider', description: '' },
        ca: { name: 'Xistorra a la sidra', description: '' },
        zh: { name: '苹果酒炖香肠', description: '' },
        hi: { name: 'साइडर में चिस्टोरा', description: '' },
        fr: { name: 'Chistorra au cidre', description: '' },
        de: { name: 'Chistorra in Apfelwein', description: '' },
        ar: { name: 'شستورا في عصير التفاح', description: '' },
        ru: { name: 'Чистора в сидре', description: '' },
        ja: { name: 'シドーラ煮のチストーラ', description: '' },
        pt: { name: 'Chistorra ao sidra', description: '' },
        it: { name: 'Chistorra al sidro', description: '' },
        ko: { name: '사이다에 끓인 치스토라', description: '' }
    },
    19: {
        en: { name: "Pig's Ear Galician Style", description: '' },
        ca: { name: "Orella de porc a la gallega", description: '' },
        zh: { name: '加利西亚风味猪耳朵', description: '' },
        hi: { name: 'गैलिशियन शैली में सूअर का कान', description: '' },
        fr: { name: "Oreille de porc à la galicienne", description: '' },
        de: { name: "Schweineohr galizischer Art", description: '' },
        ar: { name: 'أذن الخنزير على الطريقة الجليقية', description: '' },
        ru: { name: 'Свиное ухо по-галисийски', description: '' },
        ja: { name: 'ガリシア風豚耳', description: '' },
        pt: { name: 'Orelha de porco à galega', description: '' },
        it: { name: "Orecchio di maiale alla galiziana", description: '' },
        ko: { name: '갈리시아식 돼지 귀 요리', description: '' }
    },
    20: {
        en: { name: 'Madrid-Style Tripe with Iberian Ham', description: '' },
        ca: { name: 'Tripa a la madrileña amb pernil ibèric', description: '' },
        zh: { name: '马德里风味牛肚配伊比利亚火腿', description: '' },
        hi: { name: 'इबेरियन हैम के साथ मैड्रिड-स्टाइल ट्राइप', description: '' },
        fr: { name: 'Tripes à la madrilène avec jambon ibérique', description: '' },
        de: { name: 'Madrider Kutteln mit Iberischem Schinken', description: '' },
        ar: { name: 'كرشة على الطريقة المدرية مع لحم الخنزير الإيبيري', description: '' },
        ru: { name: 'Рубцы по-мадридски с иберийской ветчиной', description: '' },
        ja: { name: 'イベリコハムのマドリッド風トリップ', description: '' },
        pt: { name: 'Tripas à madrilena com presunto ibérico', description: '' },
        it: { name: 'Trippa alla madrilena con prosciutto iberico', description: '' },
        ko: { name: '이베리아 햄을 곁들인 마드리드식 트리페', description: '' }
    },
    21: {
        en: { name: 'Galician-Style Octopus 250gr', description: '' },
        ca: { name: 'Pop a la gallega 250gr', description: '' },
        zh: { name: '加利西亚风味章鱼 250克', description: '' },
        hi: { name: 'गैलिशियन-स्टाइल ऑक्टोपस 250gr', description: '' },
        fr: { name: 'Poulpe à la galicienne 250gr', description: '' },
        de: { name: 'Galizischer Tintenfisch 250gr', description: '' },
        ar: { name: 'أخطبوط على الطريقة الجليقية 250 غرام', description: '' },
        ru: { name: 'Осьминог по-галисийски 250гр', description: '' },
        ja: { name: 'ガリシア風タコ 250グラム', description: '' },
        pt: { name: 'Polvo à galega 250gr', description: '' },
        it: { name: 'Polpo alla galiziana 250gr', description: '' },
        ko: { name: '갈리시아식 문어 250g', description: '' }
    },
    22: {
        en: { name: 'Cured Manchego Cheese', description: '' },
        ca: { name: 'Formatge manxec curat', description: '' },
        zh: { name: '熟成曼切戈奶酪', description: '' },
        hi: { name: 'क्योर्ड मैनचेगो चीज़', description: '' },
        fr: { name: 'Fromage manchego affiné', description: '' },
        de: { name: 'Gereifter Manchego-Käse', description: '' },
        ar: { name: 'جبن مانتشغو المعتق', description: '' },
        ru: { name: 'Выдержанный сыр манчего', description: '' },
        ja: { name: '熟成マンチェゴチーズ', description: '' },
        pt: { name: 'Queijo manchego curado', description: '' },
        it: { name: 'Formaggio manchego stagionato', description: '' },
        ko: { name: '숙성 만체고 치즈', description: '' }
    },
    23: {
        en: { name: 'Andalusian-Style Small Squid (Battered)', description: '' },
        ca: { name: 'Calamarsets a l\'andaluza (reboçats)', description: '' },
        zh: { name: '安达卢西亚风味小鱿鱼（裹粉炸）', description: '' },
        hi: { name: 'अंडालूसी-स्टाइल छोटे स्क्विड (बैटर्ड)', description: '' },
        fr: { name: 'Petits calmars à l\'andalouse (panés)', description: '' },
        de: { name: 'Andalusische Tintenfischringe (paniert)', description: '' },
        ar: { name: 'حبار صغير على الطريقة الأندلسية (مقلي)', description: '' },
        ru: { name: 'Кальмары по-андалузски (в кляре)', description: '' },
        ja: { name: 'アンダルシア風子イカ（衣付き）', description: '' },
        pt: { name: 'Lulinhas à andaluza (empanadas)', description: '' },
        it: { name: 'Calamaretti all\'andalusa (impanati)', description: '' },
        ko: { name: '안달루시아식 작은 오징어 (튀김)', description: '' }
    },
    24: {
        en: { name: 'Homemade Potato Omelette with Tomato Bread', description: '' },
        ca: { name: 'Truita de patates casolana amb pa de tomàquet', description: '' },
        zh: { name: '自制土豆蛋饼配番茄面包', description: '' },
        hi: { name: 'टमाटर ब्रेड के साथ घर का बना आलू ऑमलेट', description: '' },
        fr: { name: 'Omelette aux pommes de terre maison avec pain à la tomate', description: '' },
        de: { name: 'Hausgemachtes Kartoffelomelett mit Tomatenbrot', description: '' },
        ar: { name: 'أومليت البطاطس المصنوعة منزلياً مع خبز الطماطم', description: '' },
        ru: { name: 'Домашний картофельный омлет с томатным хлебом', description: '' },
        ja: { name: 'トマトパン付き手作りポテトオムレツ', description: '' },
        pt: { name: 'Tortilha de batata caseira com pão de tomate', description: '' },
        it: { name: 'Frittata di patate casalinga con pane al pomodoro', description: '' },
        ko: { name: '토마토 빵을 곁들인 수제 감자 오믈렛', description: '' }
    },
    25: {
        en: { name: 'Homemade Patatas Bravas', description: '' },
        ca: { name: 'Patates braves casolanes', description: '' },
        zh: { name: '自制辣味土豆块', description: '' },
        hi: { name: 'घर का बना पटाटास ब्रावस', description: '' },
        fr: { name: 'Patatas bravas maison', description: '' },
        de: { name: 'Hausgemachte Patatas Bravas', description: '' },
        ar: { name: 'بطاطا برافاس منزلية الصنع', description: '' },
        ru: { name: 'Домашние патас бравас', description: '' },
        ja: { name: '手作りパタタス・ブラバス', description: '' },
        pt: { name: 'Patatas bravas caseiras', description: '' },
        it: { name: 'Patatas bravas casalinghe', description: '' },
        ko: { name: '수제 파타타스 브라바스', description: '' }
    },
    26: {
        en: { name: 'Padrón Peppers', description: '' },
        ca: { name: 'Pebrots del Padrón', description: '' },
        zh: { name: '帕德龙辣椒', description: '' },
        hi: { name: 'पैड्रॉन पेपर्स', description: '' },
        fr: { name: 'Piments du Padrón', description: '' },
        de: { name: 'Padrón-Paprika', description: '' },
        ar: { name: 'فلفل بادرون', description: '' },
        ru: { name: 'Перец Падрон', description: '' },
        ja: { name: 'パドロンペッパー', description: '' },
        pt: { name: 'Pimentos de Padrón', description: '' },
        it: { name: 'Peperoni di Padrón', description: '' },
        ko: { name: '파드론 피망', description: '' }
    },
    27: {
        en: { name: 'Grilled Lamb Ribs', description: '' },
        ca: { name: 'Costelles de xai a la planxa', description: '' },
        zh: { name: '烤羊肋排', description: '' },
        hi: { name: 'ग्रिल्ड लैंब रिब्स', description: '' },
        fr: { name: 'Côtes d\'agneau grillées', description: '' },
        de: { name: 'Gegrillte Lammrippchen', description: '' },
        ar: { name: 'أضلاع خروف مشوية', description: '' },
        ru: { name: 'Жареные бараньи ребрышки', description: '' },
        ja: { name: 'グリルラムリブ', description: '' },
        pt: { name: 'Costeletas de cordeiro grelhadas', description: '' },
        it: { name: 'Costolette d\'agnello alla griglia', description: '' },
        ko: { name: '그릴에 구운 양 갈비', description: '' }
    },
    28: {
        en: { name: 'Oxtail in Red Wine', description: '' },
        ca: { name: 'Cua de bou al vi negre', description: '' },
        zh: { name: '红酒炖牛尾', description: '' },
        hi: { name: 'रेड वाइन में ऑक्सटेल', description: '' },
        fr: { name: 'Queue de bœuf au vin rouge', description: '' },
        de: { name: 'Ochsenschwanz in Rotwein', description: '' },
        ar: { name: 'ذيل الثور بالنبيذ الأحمر', description: '' },
        ru: { name: 'Бычий хвост в красном вине', description: '' },
        ja: { name: '赤ワイン煮込みオックステール', description: '' },
        pt: { name: 'Rabo de boi ao vinho tinto', description: '' },
        it: { name: 'Coda di bue al vino rosso', description: '' },
        ko: { name: '레드 와인 소테일 스튜', description: '' }
    },
    29: {
        en: { name: 'Cod Omelette with Garlic and Parsley', description: '' },
        ca: { name: 'Truita de bacallà amb all i julivert', description: '' },
        zh: { name: '鳕鱼蛋饼配大蒜和欧芹', description: '' },
        hi: { name: 'लहसुन और अजमोद के साथ कॉड ऑमलेट', description: '' },
        fr: { name: 'Omelette de morue à l\'ail et persil', description: '' },
        de: { name: 'Kabeljau-Omelett mit Knoblauch und Petersilie', description: '' },
        ar: { name: 'أومليت القد مع الثوم والبقدونس', description: '' },
        ru: { name: 'Омлет с треской, чесноком и петрушкой', description: '' },
        ja: { name: 'ニンニクとパセリのタラオムレツ', description: '' },
        pt: { name: 'Tortilha de bacalhau com alho e salsa', description: '' },
        it: { name: 'Frittata di baccalà con aglio e prezzemolo', description: '' },
        ko: { name: '마늘과 파슬리를 곁들인 대구 오믈렛', description: '' }
    },
    30: {
        en: { name: '100gr of Hand-Cut Iberian Ham', description: '' },
        ca: { name: '100gr de pernil ibèric tallat a mà', description: '' },
        zh: { name: '100克手切伊比利亚火腿', description: '' },
        hi: { name: '100gr हाथ से कटा इबेरियन हैम', description: '' },
        fr: { name: '100gr de jambon ibérique coupé à la main', description: '' },
        de: { name: '100gr von Hand geschnittener Iberischer Schinken', description: '' },
        ar: { name: '100 غرام من لحم الخنزير الإيبيري المقطع يدوياً', description: '' },
        ru: { name: '100гр иберийской ветчины, нарезанной вручную', description: '' },
        ja: { name: '手切りイベリコハム100グラム', description: '' },
        pt: { name: '100gr de presunto ibérico cortado à mão', description: '' },
        it: { name: '100gr di prosciutto iberico tagliato a mano', description: '' },
        ko: { name: '손으로 썬 이베리아 햄 100g', description: '' }
    },
    31: {
        en: { name: '50gr of Iberian Ham', description: '' },
        ca: { name: '50gr de pernil ibèric', description: '' },
        zh: { name: '50克伊比利亚火腿', description: '' },
        hi: { name: '50gr इबेरियन हैम', description: '' },
        fr: { name: '50gr de jambon ibérique', description: '' },
        de: { name: '50gr Iberischer Schinken', description: '' },
        ar: { name: '50 غرام من لحم الخنزير الإيبيري', description: '' },
        ru: { name: '50гр иберийской ветчины', description: '' },
        ja: { name: 'イベリコハム50グラム', description: '' },
        pt: { name: '50gr de presunto ibérico', description: '' },
        it: { name: '50gr di prosciutto iberico', description: '' },
        ko: { name: '이베리아 햄 50g', description: '' }
    },
    32: {
        en: { name: 'Iberian Mixed Plate', description: '' },
        ca: { name: 'Plat combinat ibèric', description: '' },
        zh: { name: '伊比利亚拼盘', description: '' },
        hi: { name: 'इबेरियन मिक्स्ड प्लेट', description: '' },
        fr: { name: 'Assiette ibérique mixte', description: '' },
        de: { name: 'Iberische gemischte Platte', description: '' },
        ar: { name: 'طبق إيبيري مشكل', description: '' },
        ru: { name: 'Иберийское ассорти', description: '' },
        ja: { name: 'イベリアン盛り合わせ', description: '' },
        pt: { name: 'Prato combinado ibérico', description: '' },
        it: { name: 'Piatto misto iberico', description: '' },
        ko: { name: '이베리아 혼합 플레이트', description: '' }
    },
    33: {
        en: { name: 'Toast with Iberian Ham', description: '' },
        ca: { name: 'Torrada de pernil ibèric', description: '' },
        zh: { name: '伊比利亚火腿吐司', description: '' },
        hi: { name: 'इबेरियन हैम टोस्ट', description: '' },
        fr: { name: 'Toast au jambon ibérique', description: '' },
        de: { name: 'Toast mit Iberischem Schinken', description: '' },
        ar: { name: 'توست مع لحم الخنزير الإيبيري', description: '' },
        ru: { name: 'Тост с иберийской ветчиной', description: '' },
        ja: { name: 'イベリコハムのトースト', description: '' },
        pt: { name: 'Torrada de presunto ibérico', description: '' },
        it: { name: 'Toast con prosciutto iberico', description: '' },
        ko: { name: '이베리아 햄 토스트', description: '' }
    },
    34: {
        en: { name: 'Toast with Manchego Cheese', description: '' },
        ca: { name: 'Torrada de formatge manxec', description: '' },
        zh: { name: '曼切戈奶酪吐司', description: '' },
        hi: { name: 'मैनचेगो चीज़ टोस्ट', description: '' },
        fr: { name: 'Toast au fromage manchego', description: '' },
        de: { name: 'Toast mit Manchego-Käse', description: '' },
        ar: { name: 'توست مع جبن مانتشغو', description: '' },
        ru: { name: 'Тост с сыром манчего', description: '' },
        ja: { name: 'マンチェゴチーズのトースト', description: '' },
        pt: { name: 'Torrada de queijo manchego', description: '' },
        it: { name: 'Toast con formaggio manchego', description: '' },
        ko: { name: '만체고 치즈 토스트', description: '' }
    },
    35: {
        en: { name: 'Toast with Cantabrian Anchovies', description: '' },
        ca: { name: 'Torrada de seitons del Cantàbric', description: '' },
        zh: { name: '坎塔布连凤尾鱼吐司', description: '' },
        hi: { name: 'कैंटाब्रियन एंकोवी टोस्ट', description: '' },
        fr: { name: 'Toast aux anchois de la Cantabrique', description: '' },
        de: { name: 'Toast mit Kantabrischen Sardellen', description: '' },
        ar: { name: 'توست مع أنشوجة كانتابريا', description: '' },
        ru: { name: 'Тост с кантабрийскими анчоусами', description: '' },
        ja: { name: 'カンタブリア海産アンチョビのトースト', description: '' },
        pt: { name: 'Torrada de anchovas do Cantábrico', description: '' },
        it: { name: 'Toast con acciughe del Cantabrico', description: '' },
        ko: { name: '칸타브리아해 멸치 토스트', description: '' }
    },
    36: {
        en: { name: 'Goat Cheese Salad', description: '' },
        ca: { name: 'Amanida de formatge de cabra', description: '' },
        zh: { name: '山羊奶酪沙拉', description: '' },
        hi: { name: 'गोट चीज़ सलाद', description: '' },
        fr: { name: 'Salade de chèvre', description: '' },
        de: { name: 'Ziegenkäsesalat', description: '' },
        ar: { name: 'سلطة جبن الماعز', description: '' },
        ru: { name: 'Салат с козьим сыром', description: '' },
        ja: { name: 'ヤギチーズサラダ', description: '' },
        pt: { name: 'Salada de queijo de cabra', description: '' },
        it: { name: 'Insalata di formaggio di capra', description: '' },
        ko: { name: '염소 치즈 샐러드', description: '' }
    },
    37: {
        en: { name: 'Ventrecha Tuna Salad with Onion and Tomato', description: '' },
        ca: { name: 'Amanida de ventresca de tonyina amb ceba i tomàquet', description: '' },
        zh: { name: '金枪鱼腹肉沙拉配洋葱番茄', description: '' },
        hi: { name: 'प्याज और टमाटर के साथ वेंट्रेचा टूना सलाद', description: '' },
        fr: { name: 'Salade de ventrèche de thon avec oignon et tomate', description: '' },
        de: { name: 'Ventrecha-Thunfischsalat mit Zwiebeln und Tomaten', description: '' },
        ar: { name: 'سلطة التونة فينتريشا مع البصل والطماطم', description: '' },
        ru: { name: 'Салат с тунцом вентреча с луком и помидорами', description: '' },
        ja: { name: '玉ねぎとトマトのベントレッチャツナサラダ', description: '' },
        pt: { name: 'Salada de ventresca de atum com cebola e tomate', description: '' },
        it: { name: 'Insalata di ventresca di tonno con cipolla e pomodoro', description: '' },
        ko: { name: '양파와 토마토를 곁들인 벤트레차 참치 샐러드', description: '' }
    },
    38: {
        en: { name: 'Homemade Russian Salad with White Asparagus and Sweet Ham', description: '' },
        ca: { name: 'Amanida russa casolana amb espàrrecs blancs i pernil dolç', description: '' },
        zh: { name: '自制俄式沙拉配白芦笋和甜火腿', description: '' },
        hi: { name: 'व्हाइट एस्परैगस और स्वीट हैम के साथ घर का बना रूसी सलाद', description: '' },
        fr: { name: 'Salade russe maison avec asperges blanches et jambon doux', description: '' },
        de: { name: 'Hausgemachter russischer Salat mit weißen Spargeln und süßem Schinken', description: '' },
        ar: { name: 'سلطة روسية منزلية مع هليون أبيض ولحم خنزير حلو', description: '' },
        ru: { name: 'Домашний салат оливье с белой спаржей и сладкой ветчиной', description: '' },
        ja: { name: 'ホワイトアスパラガスと甘いハムの手作りロシアサラダ', description: '' },
        pt: { name: 'Salada russa caseira com espargos brancos e presunto doce', description: '' },
        it: { name: 'Insalata russa casalinga con asparagi bianchi e prosciutto dolce', description: '' },
        ko: { name: '흰색 아스파라거스와 달콤한 햄을 곁들인 수제 러시안 샐러드', description: '' }
    },
    39: {
        en: { name: 'Wild Asparagus with Romesco Sauce and Grilled Tomato', description: '' },
        ca: { name: 'Espàrrecs triguers amb salsa romesco i tomàquet a la planxa', description: '' },
        zh: { name: '野生芦笋配罗梅斯科酱和烤番茄', description: '' },
        hi: { name: 'रोम्स्को सॉस और ग्रिल्ड टमाटर के साथ वाइल्ड एस्परैगस', description: '' },
        fr: { name: 'Asperges sauvages avec sauce romesco et tomate grillée', description: '' },
        de: { name: 'Wilder Spargel mit Romesco-Sauce und gegrillter Tomate', description: '' },
        ar: { name: 'هليون بري مع صلصة الرومسكو وطماطم مشوية', description: '' },
        ru: { name: 'Дикая спаржа с соусом ромеско и жареными помидорами', description: '' },
        ja: { name: 'ロメスコソースとグリルトマトのワイルドアスパラガス', description: '' },
        pt: { name: 'Espargos silvestres com molho romesco e tomate grelhado', description: '' },
        it: { name: 'Asparagi selvatici con salsa romesco e pomodoro alla griglia', description: '' },
        ko: { name: '로메스코 소스와 그릴 토마토를 곁들인 야생 아스파라거스', description: '' }
    },
    40: {
        en: { name: 'Grilled Vegetable Platter with Romesco Sauce', description: '' },
        ca: { name: 'Parrillada de verdures amb salsa romesco', description: '' },
        zh: { name: '烤蔬菜拼盘配罗梅斯科酱', description: '' },
        hi: { name: 'रोम्स्को सॉस के साथ ग्रिल्ड वेजिटेबल प्लाटर', description: '' },
        fr: { name: 'Assiette de légumes grillés avec sauce romesco', description: '' },
        de: { name: 'Gegrillter Gemüseteller mit Romesco-Sauce', description: '' },
        ar: { name: 'طبق خضار مشوي مع صلصة الرومسكو', description: '' },
        ru: { name: 'Жареные овощи с соусом ромеско', description: '' },
        ja: { name: 'ロメスコソースのグリル野菜盛り合わせ', description: '' },
        pt: { name: 'Parrillada de legumes com molho romesco', description: '' },
        it: { name: 'Grigliata di verdure con salsa romesco', description: '' },
        ko: { name: '로메스코 소스를 곁들인 그릴 야채 플래터', description: '' }
    },
    41: {
        en: { name: 'Grilled Langoustines', description: '' },
        ca: { name: 'Tallarines a la planxa', description: '' },
        zh: { name: '烤挪威海螯虾', description: '' },
        hi: { name: 'ग्रिल्ड लैंगस्टाइन', description: '' },
        fr: { name: 'Langoustines grillées', description: '' },
        de: { name: 'Gegrillte Langostinos', description: '' },
        ar: { name: 'لانغوستين مشوي', description: '' },
        ru: { name: 'Жареные лангустины', description: '' },
        ja: { name: 'グリルラングスティーヌ', description: '' },
        pt: { name: 'Lagostins grelhados', description: '' },
        it: { name: 'Aragoste alla griglia', description: '' },
        ko: { name: '그릴에 구운 랑구스틴', description: '' }
    },
    42: {
        en: { name: 'Grilled King Prawns (6 units)', description: '' },
        ca: { name: 'Gambes langostineres a la planxa (6 unitats)', description: '' },
        zh: { name: '烤大虾（6只）', description: '' },
        hi: { name: 'ग्रिल्ड किंग प्रॉन्स (6 यूनिट्स)', description: '' },
        fr: { name: 'Gambas grillées (6 unités)', description: '' },
        de: { name: 'Gegrillte Riesengarnelen (6 Stück)', description: '' },
        ar: { name: 'قريدس كبير مشوي (6 قطع)', description: '' },
        ru: { name: 'Жареные королевские креветки (6 штук)', description: '' },
        ja: { name: 'グリルキングシュリンプ（6尾）', description: '' },
        pt: { name: 'Gambas grelhadas (6 unidades)', description: '' },
        it: { name: 'Gamberoni alla griglia (6 unità)', description: '' },
        ko: { name: '그릴에 구운 킹 새우 (6마리)', description: '' }
    },
    43: {
        en: { name: 'Grilled Mussels', description: '' },
        ca: { name: 'Musclos a la planxa', description: '' },
        zh: { name: '烤贻贝', description: '' },
        hi: { name: 'ग्रिल्ड मसल्स', description: '' },
        fr: { name: 'Moules grillées', description: '' },
        de: { name: 'Gegrillte Miesmuscheln', description: '' },
        ar: { name: 'بلح البحر المشوي', description: '' },
        ru: { name: 'Жареные мидии', description: '' },
        ja: { name: 'グリルムール貝', description: '' },
        pt: { name: 'Mexilhões grelhados', description: '' },
        it: { name: 'Cozze alla griglia', description: '' },
        ko: { name: '그릴에 구운 홍합', description: '' }
    },
    44: {
        en: { name: 'Oysters (each)', description: '' },
        ca: { name: 'Ostres (unitat)', description: '' },
        zh: { name: '生蚝（每只）', description: '' },
        hi: { name: 'ऑयस्टर्स (प्रत्येक)', description: '' },
        fr: { name: 'Huîtres (unité)', description: '' },
        de: { name: 'Austern (Stück)', description: '' },
        ar: { name: 'محار (القطعة)', description: '' },
        ru: { name: 'Устрицы (штука)', description: '' },
        ja: { name: '牡蠣（1個）', description: '' },
        pt: { name: 'Ostras (unidade)', description: '' },
        it: { name: 'Ostriche (unità)', description: '' },
        ko: { name: '굴 (1개)', description: '' }
    },
    45: {
        en: { name: 'Grilled Cuttlefish', description: '' },
        ca: { name: 'Sípia a la planxa', description: '' },
        zh: { name: '烤墨鱼', description: '' },
        hi: { name: 'ग्रिल्ड कटलफिश', description: '' },
        fr: { name: 'Sèche grillée', description: '' },
        de: { name: 'Gegrillte Sepia', description: '' },
        ar: { name: 'حبار مشوي', description: '' },
        ru: { name: 'Жареная каракатица', description: '' },
        ja: { name: 'グリルカトルフィッシュ', description: '' },
        pt: { name: 'Choco grelhado', description: '' },
        it: { name: 'Seppia alla griglia', description: '' },
        ko: { name: '그릴에 구운 오징어', description: '' }
    },
    46: {
        en: { name: 'Seafood Paella (for 2)', description: '' },
        ca: { name: 'Paella de marisc (2 persones)', description: '' },
        zh: { name: '海鲜饭（2人份）', description: '' },
        hi: { name: 'सीफूड पेला (2 लोगों के लिए)', description: '' },
        fr: { name: 'Paella de fruits de mer (2 personnes)', description: '' },
        de: { name: 'Meeresfrüchte-Paella (für 2)', description: '' },
        ar: { name: 'باييلا المأكولات البحرية (لشخصين)', description: '' },
        ru: { name: 'Паэлья с морепродуктами (на 2 персоны)', description: '' },
        ja: { name: 'シーフードパエリア（2名様）', description: '' },
        pt: { name: 'Paella de marisco (2 pessoas)', description: '' },
        it: { name: 'Paella di frutti di mare (2 persone)', description: '' },
        ko: { name: '해산물 파에야 (2인)', description: '' }
    },
    47: {
        en: { name: 'Lobster Paella (for 2)', description: '' },
        ca: { name: 'Paella de bogavants (2 persones)', description: '' },
        zh: { name: '龙虾饭（2人份）', description: '' },
        hi: { name: 'लॉबस्टर पेला (2 लोगों के लिए)', description: '' },
        fr: { name: 'Paella au homard (2 personnes)', description: '' },
        de: { name: 'Hummer-Paella (für 2)', description: '' },
        ar: { name: 'باييلا جراد البحر (لشخصين)', description: '' },
        ru: { name: 'Паэлья с омаром (на 2 персоны)', description: '' },
        ja: { name: 'ロブスターパエリア（2名様）', description: '' },
        pt: { name: 'Paella de lagosta (2 pessoas)', description: '' },
        it: { name: 'Paella di aragosta (2 persone)', description: '' },
        ko: { name: '랍스터 파에야 (2인)', description: '' }
    },
    48: {
        en: { name: 'Brothy Rice with Lobster (for 2)', description: '' },
        ca: { name: 'Arròs caldós de bogavants (2 persones)', description: '' },
        zh: { name: '龙虾汤饭（2人份）', description: '' },
        hi: { name: 'लॉबस्टर के साथ ब्रॉथी राइस (2 लोगों के लिए)', description: '' },
        fr: { name: 'Riz en bouillon avec homard (2 personnes)', description: '' },
        de: { name: 'Suppiger Reis mit Hummer (für 2)', description: '' },
        ar: { name: 'أرز بمرق جراد البحر (لشخصين)', description: '' },
        ru: { name: 'Рисовый суп с омаром (на 2 персоны)', description: '' },
        ja: { name: 'ロブスターのスープリゾット（2名様）', description: '' },
        pt: { name: 'Arroz caldoso com lagosta (2 pessoas)', description: '' },
        it: { name: 'Riso in brodo con aragosta (2 persone)', description: '' },
        ko: { name: '랍스터 죽 (2인)', description: '' }
    },
    49: {
        en: { name: 'Black Rice with Cuttlefish (for 2)', description: '' },
        ca: { name: 'Arròs negre amb sípia (2 persones)', description: '' },
        zh: { name: '墨鱼汁饭（2人份）', description: '' },
        hi: { name: 'कटलफिश के साथ ब्लैक राइस (2 लोगों के लिए)', description: '' },
        fr: { name: 'Riz noir avec seiche (2 personnes)', description: '' },
        de: { name: 'Schwarzer Reis mit Sepia (für 2)', description: '' },
        ar: { name: 'أرز أسود مع حبار (لشخصين)', description: '' },
        ru: { name: 'Черный рис с каракатицей (на 2 персоны)', description: '' },
        ja: { name: 'イカスミリゾット（2名様）', description: '' },
        pt: { name: 'Arroz negro com choco (2 pessoas)', description: '' },
        it: { name: 'Riso nero con seppia (2 persone)', description: '' },
        ko: { name: '오징어 먹물리소토 (2인)', description: '' }
    },
    50: {
        en: { name: 'Noodles with Prawns and Squid', description: '' },
        ca: { name: 'Fideuà de gambes i calamares', description: '' },
        zh: { name: '虾和鱿鱼炒面', description: '' },
        hi: { name: 'प्रॉन्स और स्क्विड के साथ नूडल्स', description: '' },
        fr: { name: 'Fidée aux crevettes et calmars', description: '' },
        de: { name: 'Fideuá mit Garnelen und Tintenfisch', description: '' },
        ar: { name: 'فيديو مع جمبري وحبار', description: '' },
        ru: { name: 'Фидеуа с креветками и кальмарами', description: '' },
        ja: { name: 'エビとイカのフィデウア', description: '' },
        pt: { name: 'Fideuà de gambas e lulas', description: '' },
        it: { name: 'Fideuà con gamberi e calamari', description: '' },
        ko: { name: '새우와 오징어 피데아', description: '' }
    },
    51: {
        en: { name: 'Seafood Rice with Monkfish', description: '' },
        ca: { name: 'Arròs del senyorito de marisc', description: '' },
        zh: { name: '海鲜和尚鱼饭', description: '' },
        hi: { name: 'सीफूड और मोंकफिश के साथ राइस', description: '' },
        fr: { name: 'Riz du señorito aux fruits de mer', description: '' },
        de: { name: 'Meeresfrüchte-Reis mit Seeteufel', description: '' },
        ar: { name: 'أرز السينيوريتو بالمأكولات البحرية', description: '' },
        ru: { name: 'Рис сенёрито с морепродуктами', description: '' },
        ja: { name: 'シーフードのセニョリートライス', description: '' },
        pt: { name: 'Arroz do senhorito de marisco', description: '' },
        it: { name: 'Risotto del signorino con frutti di mare', description: '' },
        ko: { name: '해산물 세뇨리토 라이스', description: '' }
    },
    52: {
        en: { name: 'Galician Veal Ribeye 700gr', description: '' },
        ca: { name: 'Chuletó de vedella gallega 700gr', description: '' },
        zh: { name: '加利西亚小牛肉肋眼 700克', description: '' },
        hi: { name: 'गैलिशियन वील रिबआई 700gr', description: '' },
        fr: { name: 'Côte de veau galicienne 700gr', description: '' },
        de: { name: 'Galizisches Kalbs-Ribeye 700gr', description: '' },
        ar: { name: 'ريب آي عجل جاليسي 700 غرام', description: '' },
        ru: { name: 'Галисийская телячья корейка 700гр', description: '' },
        ja: { name: 'ガリシア産仔牛リブアイ700グラム', description: '' },
        pt: { name: 'Chuletão de vitela galega 700gr', description: '' },
        it: { name: 'Costata di vitello galiziana 700gr', description: '' },
        ko: { name: '갈리시아산 송아지 립아이 700g', description: '' }
    },
    53: {
        en: { name: 'Galician Veal Entrecôte 350gr', description: '' },
        ca: { name: 'Entrecot de vedella gallega 350gr', description: '' },
        zh: { name: '加利西亚小牛肉肋排 350克', description: '' },
        hi: { name: 'गैलिशियन वील एंट्रेकोट 350gr', description: '' },
        fr: { name: 'Entrecôte de veau galicienne 350gr', description: '' },
        de: { name: 'Galizisches Kalbs-Entrecôte 350gr', description: '' },
        ar: { name: 'أنتركوت عجل جاليسي 350 غرام', description: '' },
        ru: { name: 'Галисийская телячья антрекот 350гр', description: '' },
        ja: { name: 'ガリシア産仔牛アントルコート350グラム', description: '' },
        pt: { name: 'Entrecosto de vitela galega 350gr', description: '' },
        it: { name: 'Entrecôte di vitello galiziana 350gr', description: '' },
        ko: { name: '갈리시아산 송아지 앙트레코트 350g', description: '' }
    },
    54: {
        en: { name: 'Galician Veal Sirloin 250gr', description: '' },
        ca: { name: 'Filet de vedella gallega 250gr', description: '' },
        zh: { name: '加利西亚小牛里脊肉 250克', description: '' },
        hi: { name: 'गैलिशियन वील सिरलॉइन 250gr', description: '' },
        fr: { name: 'Filet de veau galicien 250gr', description: '' },
        de: { name: 'Galizisches Kalbsfilet 250gr', description: '' },
        ar: { name: 'فيليه عجل جاليسي 250 غرام', description: '' },
        ru: { name: 'Галисийская телячья вырезка 250гр', description: '' },
        ja: { name: 'ガリシア産仔牛サーロイン250グラム', description: '' },
        pt: { name: 'Filé de vitela galega 250gr', description: '' },
        it: { name: 'Filetto di vitello galiziano 250gr', description: '' },
        ko: { name: '갈리시아산 송아지 안심 250g', description: '' }
    },
    55: {
        en: { name: 'Calaf Butifarra with White Beans', description: '' },
        ca: { name: 'Botifarra de Calaf amb mongetes', description: '' },
        zh: { name: '卡拉夫香肠配白豆', description: '' },
        hi: { name: 'व्हाइट बीन्स के साथ कलाफ ब्यूटीफारा', description: '' },
        fr: { name: 'Butifarra de Calaf avec haricots blancs', description: '' },
        de: { name: 'Calaf-Butifarra mit weißen Bohnen', description: '' },
        ar: { name: 'بوتيفارا كالاف مع فاصوليا بيضاء', description: '' },
        ru: { name: 'Калафская бутифарра с белой фасолью', description: '' },
        ja: { name: 'カラフ産ブティファラと白いんげん豆', description: '' },
        pt: { name: 'Butifarra de Calaf com feijão branco', description: '' },
        it: { name: 'Butifarra di Calaf con fagioli bianchi', description: '' },
        ko: { name: '칼라프 부티파라와 흰콩', description: '' }
    },
    56: {
        en: { name: 'Grilled Lamb Ribs', description: '' },
        ca: { name: 'Costelles de xai a la planxa', description: '' },
        zh: { name: '烤羊肋排', description: '' },
        hi: { name: 'ग्रिल्ड लैंब रिब्स', description: '' },
        fr: { name: 'Côtes d\'agneau grillées', description: '' },
        de: { name: 'Gegrillte Lammrippchen', description: '' },
        ar: { name: 'أضلاع خروف مشوية', description: '' },
        ru: { name: 'Жареные бараньи ребрышки', description: '' },
        ja: { name: 'グリルラムリブ', description: '' },
        pt: { name: 'Costeletas de cordeiro grelhadas', description: '' },
        it: { name: 'Costolette d\'agnello alla griglia', description: '' },
        ko: { name: '그릴에 구운 양 갈비', description: '' }
    },
    57: {
        en: { name: 'Cod Omelette with Garlic and Parsley', description: '' },
        ca: { name: 'Truita de bacallà amb all i julivert', description: '' },
        zh: { name: '鳕鱼蛋饼配大蒜和欧芹', description: '' },
        hi: { name: 'लहसुन और अजमोद के साथ कॉड ऑमलेट', description: '' },
        fr: { name: 'Omelette de morue à l\'ail et persil', description: '' },
        de: { name: 'Kabeljau-Omelett mit Knoblauch und Petersilie', description: '' },
        ar: { name: 'أومليت القد مع الثوم والبقدونس', description: '' },
        ru: { name: 'Омлет с треской, чесноком и петрушкой', description: '' },
        ja: { name: 'ニンニクとパセリのタラオムレツ', description: '' },
        pt: { name: 'Tortilha de bacalhau com alho e salsa', description: '' },
        it: { name: 'Frittata di baccalà con aglio e prezzemolo', description: '' },
        ko: { name: '마늘과 파슬리를 곁들인 대구 오믈렛', description: '' }
    },
    58: {
        en: { name: 'Cheese Omelette with Glass Bread', description: '' },
        ca: { name: 'Truita de formatge amb pa de vidre', description: '' },
        zh: { name: '奶酪蛋饼配玻璃面包', description: '' },
        hi: { name: 'ग्लास ब्रेड के साथ चीज़ ऑमलेट', description: '' },
        fr: { name: 'Omelette au fromage avec pain de verre', description: '' },
        de: { name: 'Käseomelett mit Glasbrot', description: '' },
        ar: { name: 'أومليت الجبن مع خبز الزجاج', description: '' },
        ru: { name: 'Сырный омлет с хрустящим хлебом', description: '' },
        ja: { name: 'グラスペン付きチーズオムレツ', description: '' },
        pt: { name: 'Tortilha de queijo com pão de vidro', description: '' },
        it: { name: 'Frittata di formaggio con pane di vetro', description: '' },
        ko: { name: '글래스 브레드를 곁들인 치즈 오믈렛', description: '' }
    },
    59: {
        en: { name: 'Tuna Omelette with Glass Bread', description: '' },
        ca: { name: 'Truita de tonyina amb pa de vidre', description: '' },
        zh: { name: '金枪鱼蛋饼配玻璃面包', description: '' },
        hi: { name: 'ग्लास ब्रेड के साथ टूना ऑमलेट', description: '' },
        fr: { name: 'Omelette au thon avec pain de verre', description: '' },
        de: { name: 'Thunfischomelett mit Glasbrot', description: '' },
        ar: { name: 'أومليت التونة مع خبز الزجاج', description: '' },
        ru: { name: 'Омлет с тунцом и хрустящим хлебом', description: '' },
        ja: { name: 'グラスペン付きツナオムレツ', description: '' },
        pt: { name: 'Tortilha de atum com pão de vidro', description: '' },
        it: { name: 'Frittata di tonno con pane di vetro', description: '' },
        ko: { name: '글래스 브레드를 곁들인 참치 오믈렛', description: '' }
    },
    60: {
        en: { name: 'Homemade Potato Omelette', description: '' },
        ca: { name: 'Truita de patates casolana', description: '' },
        zh: { name: '自制土豆蛋饼', description: '' },
        hi: { name: 'घर का बना आलू ऑमलेट', description: '' },
        fr: { name: 'Omelette aux pommes de terre maison', description: '' },
        de: { name: 'Hausgemachtes Kartoffelomelett', description: '' },
        ar: { name: 'أومليت البطاطس المصنوعة منزلياً', description: '' },
        ru: { name: 'Домашний картофельный омлет', description: '' },
        ja: { name: '手作りポテトオムレツ', description: '' },
        pt: { name: 'Tortilha de batata caseira', description: '' },
        it: { name: 'Frittata di patate casalinga', description: '' },
        ko: { name: '수제 감자 오믈렛', description: '' }
    },
    61: {
        en: { name: 'Macán Rioja (Vega Sicilia Winery)', description: '' },
        ca: { name: 'Macán Rioja (Bodega Vega Sicilia)', description: '' },
        zh: { name: '玛坎里奥哈（维加西西里亚酒庄）', description: '' },
        hi: { name: 'मैकन रिओजा (वेगा सिसिलिया वाइनरी)', description: '' },
        fr: { name: 'Macán Rioja (Vignoble Vega Sicilia)', description: '' },
        de: { name: 'Macán Rioja (Weingut Vega Sicilia)', description: '' },
        ar: { name: 'مَكان ريوخا (مزرعة فيغا سيسيليا)', description: '' },
        ru: { name: 'Макан Риоха (Винодельня Вега Сисилия)', description: '' },
        ja: { name: 'マカン・リオハ（ベガ・シシリアワイナリー）', description: '' },
        pt: { name: 'Macán Rioja (Vinicola Vega Sicilia)', description: '' },
        it: { name: 'Macán Rioja (Cantina Vega Sicilia)', description: '' },
        ko: { name: '마칸 리오하 (베가 시실리아 와이너리)', description: '' }
    },
    62: {
        en: { name: 'Clos de Galena Priorat 2019', description: '' },
        ca: { name: 'Clos de Galena Priorat 2019', description: '' },
        zh: { name: '加莱纳园普里奥拉托 2019', description: '' },
        hi: { name: 'क्लोस डी गैलेना प्रियोरैट 2019', description: '' },
        fr: { name: 'Clos de Galena Priorat 2019', description: '' },
        de: { name: 'Clos de Galena Priorat 2019', description: '' },
        ar: { name: 'كلوس دي غالينا بريورات 2019', description: '' },
        ru: { name: 'Кло де Галена Приорат 2019', description: '' },
        ja: { name: 'クロ・ド・ガレナ・プリオラト2019', description: '' },
        pt: { name: 'Clos de Galena Priorat 2019', description: '' },
        it: { name: 'Clos de Galena Priorat 2019', description: '' },
        ko: { name: '클로 드 갈레나 프리오라트 2019', description: '' }
    },
    63: {
        en: { name: 'Pago de Carraovejas', description: '' },
        ca: { name: 'Pago de Carraovejas', description: '' },
        zh: { name: '卡拉奥韦哈斯庄园', description: '' },
        hi: { name: 'पागो डी कैरोवेजास', description: '' },
        fr: { name: 'Pago de Carraovejas', description: '' },
        de: { name: 'Pago de Carraovejas', description: '' },
        ar: { name: 'باغو دي كاراوفيخاس', description: '' },
        ru: { name: 'Паго де Карраовехас', description: '' },
        ja: { name: 'パゴ・デ・カラオベハス', description: '' },
        pt: { name: 'Pago de Carraovejas', description: '' },
        it: { name: 'Pago de Carraovejas', description: '' },
        ko: { name: '파고 데 카라오베하스', description: '' }
    },
    64: {
        en: { name: 'Raza Carmelo Rodero (Reserve)', description: '' },
        ca: { name: 'Raza Carmelo Rodero (reserva)', description: '' },
        zh: { name: '拉扎·卡梅洛·罗德罗（珍藏）', description: '' },
        hi: { name: 'राजा कार्मेलो रोडेरो (रिजर्व)', description: '' },
        fr: { name: 'Raza Carmelo Rodero (Réserve)', description: '' },
        de: { name: 'Raza Carmelo Rodero (Reserva)', description: '' },
        ar: { name: 'راثا كارميلو روديرو (احتياطي)', description: '' },
        ru: { name: 'Раза Кармело Родеро (Резерва)', description: '' },
        ja: { name: 'ラザ・カルメロ・ロデロ（レセルバ）', description: '' },
        pt: { name: 'Raza Carmelo Rodero (Reserva)', description: '' },
        it: { name: 'Raza Carmelo Rodero (Riserva)', description: '' },
        ko: { name: '라자 카르멜로 로데로 (레세르바)', description: '' }
    },
    65: {
        en: { name: 'Mauro from Castile and León', description: '' },
        ca: { name: 'Mauro de Castella i Lleó', description: '' },
        zh: { name: '卡斯蒂利亚莱昂产区毛罗', description: '' },
        hi: { name: 'कैस्टाइल और लियोन से माउरो', description: '' },
        fr: { name: 'Mauro de Castille-et-León', description: '' },
        de: { name: 'Mauro aus Kastilien und León', description: '' },
        ar: { name: 'ماورو من قشتالة وليون', description: '' },
        ru: { name: 'Мауро из Кастилии и Леона', description: '' },
        ja: { name: 'カスティーリャ・レオン産マウロ', description: '' },
        pt: { name: 'Mauro de Castela e Leão', description: '' },
        it: { name: 'Mauro di Castiglia e León', description: '' },
        ko: { name: '카스티야 레온 산 마우로', description: '' }
    },
    66: {
        en: { name: 'Contino Rioja Reserve 2020', description: '' },
        ca: { name: 'Contino Rioja reserva 2020', description: '' },
        zh: { name: '康蒂诺里奥哈珍藏 2020', description: '' },
        hi: { name: 'कॉन्टिनो रिओजा रिजर्व 2020', description: '' },
        fr: { name: 'Contino Rioja Réserve 2020', description: '' },
        de: { name: 'Contino Rioja Reserva 2020', description: '' },
        ar: { name: 'كونتينو ريوخا احتياطي 2020', description: '' },
        ru: { name: 'Контино Риоха Резерва 2020', description: '' },
        ja: { name: 'コンティノ・リオハ・レセルバ2020', description: '' },
        pt: { name: 'Contino Rioja Reserva 2020', description: '' },
        it: { name: 'Contino Rioja Riserva 2020', description: '' },
        ko: { name: '콘티노 리오하 레세르바 2020', description: '' }
    },
    67: {
        en: { name: 'Protos Crianza', description: '' },
        ca: { name: 'Protos crianza', description: '' },
        zh: { name: '普罗托斯特酿', description: '' },
        hi: { name: 'प्रोटोस क्रियांजा', description: '' },
        fr: { name: 'Protos Crianza', description: '' },
        de: { name: 'Protos Crianza', description: '' },
        ar: { name: 'بروتوس كريانثا', description: '' },
        ru: { name: 'Протос Крианса', description: '' },
        ja: { name: 'プロトス・クリアンサ', description: '' },
        pt: { name: 'Protos Crianza', description: '' },
        it: { name: 'Protos Crianza', description: '' },
        ko: { name: '프로토스 크리안사', description: '' }
    },
    68: {
        en: { name: 'Ramón Bilbao Rioja Crianza', description: '' },
        ca: { name: 'Ramón Bilbao Rioja crianza', description: '' },
        zh: { name: '拉蒙比尔巴奥里奥哈特酿', description: '' },
        hi: { name: 'रामोन बिलबाओ रिओजा क्रियांजा', description: '' },
        fr: { name: 'Ramón Bilbao Rioja Crianza', description: '' },
        de: { name: 'Ramón Bilbao Rioja Crianza', description: '' },
        ar: { name: 'رامون بيلباو ريوخا كريانثا', description: '' },
        ru: { name: 'Рамон Билбао Риоха Крианса', description: '' },
        ja: { name: 'ラモン・ビルバオ・リオハ・クリアンサ', description: '' },
        pt: { name: 'Ramón Bilbao Rioja Crianza', description: '' },
        it: { name: 'Ramón Bilbao Rioja Crianza', description: '' },
        ko: { name: '라몬 빌바오 리오하 크리안사', description: '' }
    },
    69: {
        en: { name: 'Delecto Ribera del Duero', description: '' },
        ca: { name: 'Delecto Ribera del Duero', description: '' },
        zh: { name: '德莱克托杜埃罗河岸', description: '' },
        hi: { name: 'डिलेक्टो रिबेरा डेल दुएरो', description: '' },
        fr: { name: 'Delecto Ribera del Duero', description: '' },
        de: { name: 'Delecto Ribera del Duero', description: '' },
        ar: { name: 'ديليكتو رييرا دل دويرو', description: '' },
        ru: { name: 'Делекто Ривера дель Дуэро', description: '' },
        ja: { name: 'デレクト・リベラ・デル・ドゥエロ', description: '' },
        pt: { name: 'Delecto Ribera del Duero', description: '' },
        it: { name: 'Delecto Ribera del Duero', description: '' },
        ko: { name: '델렉토 리베라 델 두에로', description: '' }
    },
    70: {
        en: { name: 'Viña Pomal Rioja 2019', description: '' },
        ca: { name: 'Viña Pomal Rioja 2019', description: '' },
        zh: { name: '波马尔酒庄里奥哈 2019', description: '' },
        hi: { name: 'विना पोमल रिओजा 2019', description: '' },
        fr: { name: 'Viña Pomal Rioja 2019', description: '' },
        de: { name: 'Viña Pomal Rioja 2019', description: '' },
        ar: { name: 'فينا بومال ريوخا 2019', description: '' },
        ru: { name: 'Винья Помаль Риоха 2019', description: '' },
        ja: { name: 'ビニャ・ポマル・リオハ2019', description: '' },
        pt: { name: 'Viña Pomal Rioja 2019', description: '' },
        it: { name: 'Viña Pomal Rioja 2019', description: '' },
        ko: { name: '비냐 포말 리오하 2019', description: '' }
    },
    71: {
        en: { name: 'Coto Crianza Rioja', description: '' },
        ca: { name: 'Coto crianza Rioja', description: '' },
        zh: { name: '科托里奥哈特酿', description: '' },
        hi: { name: 'कोटो क्रियांजा रिओजा', description: '' },
        fr: { name: 'Coto Crianza Rioja', description: '' },
        de: { name: 'Coto Crianza Rioja', description: '' },
        ar: { name: 'كوتو كريانثا ريوخا', description: '' },
        ru: { name: 'Кото Крианса Риоха', description: '' },
        ja: { name: 'コト・クリアンサ・リオハ', description: '' },
        pt: { name: 'Coto Crianza Rioja', description: '' },
        it: { name: 'Coto Crianza Rioja', description: '' },
        ko: { name: '코토 크리안사 리오하', description: '' }
    },
    72: {
        en: { name: 'Lopez de Haro Rioja 2020', description: '' },
        ca: { name: 'Lopez de Haro Rioja 2020', description: '' },
        zh: { name: '洛佩斯德阿罗里奥哈 2020', description: '' },
        hi: { name: 'लोपेज़ डी हारो रिओजा 2020', description: '' },
        fr: { name: 'Lopez de Haro Rioja 2020', description: '' },
        de: { name: 'Lopez de Haro Rioja 2020', description: '' },
        ar: { name: 'لوبيز دي هارو ريوخا 2020', description: '' },
        ru: { name: 'Лопес де Аро Риоха 2020', description: '' },
        ja: { name: 'ロペス・デ・アロ・リオハ2020', description: '' },
        pt: { name: 'Lopez de Haro Rioja 2020', description: '' },
        it: { name: 'Lopez de Haro Rioja 2020', description: '' },
        ko: { name: '로페스 데 아로 리오하 2020', description: '' }
    },
    73: {
        en: { name: 'Pozo Baion Albariño', description: '' },
        ca: { name: 'Pozo Baion Albariño', description: '' },
        zh: { name: '波索巴永阿尔巴利诺', description: '' },
        hi: { name: 'पोज़ो बायोन अल्बारिनो', description: '' },
        fr: { name: 'Pozo Baion Albariño', description: '' },
        de: { name: 'Pozo Baion Albariño', description: '' },
        ar: { name: 'بوزو بايون ألبارينيو', description: '' },
        ru: { name: 'Посо Байон Альбариньо', description: '' },
        ja: { name: 'ポソ・バイオン・アルバリーニョ', description: '' },
        pt: { name: 'Pozo Baion Albariño', description: '' },
        it: { name: 'Pozo Baion Albariño', description: '' },
        ko: { name: '포소 바이온 알바리뇨', description: '' }
    },
    74: {
        en: { name: 'Mar de Frades Rías Baixas', description: '' },
        ca: { name: 'Mar de Frades Rías Baixas', description: '' },
        zh: { name: '弗雷德斯下海湾海洋', description: '' },
        hi: { name: 'मार डी फ़्रेड्स रियास बैक्सास', description: '' },
        fr: { name: 'Mar de Frades Rías Baixas', description: '' },
        de: { name: 'Mar de Frades Rías Baixas', description: '' },
        ar: { name: 'مار دي فراديس رياز باخاس', description: '' },
        ru: { name: 'Мар де Фрадес Риас Байшас', description: '' },
        ja: { name: 'マル・デ・フラデス・リアス・バイシャス', description: '' },
        pt: { name: 'Mar de Frades Rías Baixas', description: '' },
        it: { name: 'Mar de Frades Rías Baixas', description: '' },
        ko: { name: '마르 데 프라데스 리아스 바이샤스', description: '' }
    },
    75: {
        en: { name: 'Oluar DoSil Godello', description: '' },
        ca: { name: 'Oluar DoSil Godello', description: '' },
        zh: { name: '奥卢阿尔多西尔戈德约', description: '' },
        hi: { name: 'ओलुआर डोसिल गोडेलो', description: '' },
        fr: { name: 'Oluar DoSil Godello', description: '' },
        de: { name: 'Oluar DoSil Godello', description: '' },
        ar: { name: 'أولوار دوسيل غوديلو', description: '' },
        ru: { name: 'Олуар ДоСил Годельо', description: '' },
        ja: { name: 'オルアル・ドシル・ゴデジョ', description: '' },
        pt: { name: 'Oluar DoSil Godello', description: '' },
        it: { name: 'Oluar DoSil Godello', description: '' },
        ko: { name: '올루아르 도실 고델로', description: '' }
    },
    76: {
        en: { name: 'Perro Verde Verdejo', description: '' },
        ca: { name: 'Perro Verde Verdejo', description: '' },
        zh: { name: '绿色狗维尔德霍', description: '' },
        hi: { name: 'पेरो वर्डे वर्डेजो', description: '' },
        fr: { name: 'Perro Verde Verdejo', description: '' },
        de: { name: 'Perro Verde Verdejo', description: '' },
        ar: { name: 'بيرو فيردي فيرديخو', description: '' },
        ru: { name: 'Перро Верде Вердехо', description: '' },
        ja: { name: 'ペロ・ベルデ・ベルデホ', description: '' },
        pt: { name: 'Perro Verde Verdejo', description: '' },
        it: { name: 'Perro Verde Verdejo', description: '' },
        ko: { name: '페로 베르데 베르데호', description: '' }
    },
    77: {
        en: { name: 'Martín Códax Albariño', description: '' },
        ca: { name: 'Martín Códax Albariño', description: '' },
        zh: { name: '马丁科达斯阿尔巴利诺', description: '' },
        hi: { name: 'मार्टिन कोडैक्स अल्बारिनो', description: '' },
        fr: { name: 'Martín Códax Albariño', description: '' },
        de: { name: 'Martín Códax Albariño', description: '' },
        ar: { name: 'مارتن كوداكس ألبارينيو', description: '' },
        ru: { name: 'Мартин Кодакс Альбариньо', description: '' },
        ja: { name: 'マルティン・コダックス・アルバリーニョ', description: '' },
        pt: { name: 'Martín Códax Albariño', description: '' },
        it: { name: 'Martín Códax Albariño', description: '' },
        ko: { name: '마르틴 코닥스 알바리뇨', description: '' }
    },
    78: {
        en: { name: 'Protos Verdejo Rueda 2022', description: '' },
        ca: { name: 'Protos Verdejo Rueda 2022', description: '' },
        zh: { name: '普罗托斯维尔德霍鲁埃达 2022', description: '' },
        hi: { name: 'प्रोटोस वर्डेजो रुएडा 2022', description: '' },
        fr: { name: 'Protos Verdejo Rueda 2022', description: '' },
        de: { name: 'Protos Verdejo Rueda 2022', description: '' },
        ar: { name: 'بروتوس فيرديخو رويدا 2022', description: '' },
        ru: { name: 'Протос Вердехо Руэда 2022', description: '' },
        ja: { name: 'プロトス・ベルデホ・ルエダ2022', description: '' },
        pt: { name: 'Protos Verdejo Rueda 2022', description: '' },
        it: { name: 'Protos Verdejo Rueda 2022', description: '' },
        ko: { name: '프로토스 베르데호 루에다 2022', description: '' }
    },
    79: {
        en: { name: 'Goleta Azul Verdejo Rueda', description: '' },
        ca: { name: 'Goleta Azul Verdejo Rueda', description: '' },
        zh: { name: '戈莱塔蓝色维尔德霍鲁埃达', description: '' },
        hi: { name: 'गोलेटा अज़ुल वर्डेजो रुएडा', description: '' },
        fr: { name: 'Goleta Azul Verdejo Rueda', description: '' },
        de: { name: 'Goleta Azul Verdejo Rueda', description: '' },
        ar: { name: 'غوليتا أزول فيرديخو رويدا', description: '' },
        ru: { name: 'Голета Асуль Вердехо Руэда', description: '' },
        ja: { name: 'ゴレタ・アスル・ベルデホ・ルエダ', description: '' },
        pt: { name: 'Goleta Azul Verdejo Rueda', description: '' },
        it: { name: 'Goleta Azul Verdejo Rueda', description: '' },
        ko: { name: '골레타 아줄 베르데호 루에다', description: '' }
    },
    80: {
        en: { name: 'Miereia Penedès Fruity', description: '' },
        ca: { name: 'Miereia Penedès Afrutat', description: '' },
        zh: { name: '米雷亚佩内德斯果味', description: '' },
        hi: { name: 'मिएरिया पेनेडेस फ्रूटी', description: '' },
        fr: { name: 'Miereia Penedès Fruité', description: '' },
        de: { name: 'Miereia Penedès Fruchtig', description: '' },
        ar: { name: 'ميريا بينيديس فواكهي', description: '' },
        ru: { name: 'Миерейя Пенедес Фруктовый', description: '' },
        ja: { name: 'ミエレイア・ペネデス・フルーティー', description: '' },
        pt: { name: 'Miereia Penedès Afrutado', description: '' },
        it: { name: 'Miereia Penedès Fruttato', description: '' },
        ko: { name: '미에레이아 페네데스 과일맛', description: '' }
    },
    81: {
        en: { name: 'Marqués de Riscal', description: '' },
        ca: { name: 'Marqués de Riscal', description: '' },
        zh: { name: '瑞格尔侯爵', description: '' },
        hi: { name: 'मार्केस डी रिस्कल', description: '' },
        fr: { name: 'Marqués de Riscal', description: '' },
        de: { name: 'Marqués de Riscal', description: '' },
        ar: { name: 'ماركيز دي ريسكال', description: '' },
        ru: { name: 'Маркиз де Рискаль', description: '' },
        ja: { name: 'マルケス・デ・リスカル', description: '' },
        pt: { name: 'Marqués de Riscal', description: '' },
        it: { name: 'Marqués de Riscal', description: '' },
        ko: { name: '마르케스 데 리스칼', description: '' }
    },
    82: {
        en: { name: 'Protos Rosé (Glass)', description: '' },
        ca: { name: 'Protos rosat (copa)', description: '' },
        zh: { name: '普罗托斯桃红（杯）', description: '' },
        hi: { name: 'प्रोटोस रोसे (ग्लास)', description: '' },
        fr: { name: 'Protos Rosé (Verre)', description: '' },
        de: { name: 'Protos Rosé (Glas)', description: '' },
        ar: { name: 'بروتوس وردي (كأس)', description: '' },
        ru: { name: 'Протос Розе (Бокал)', description: '' },
        ja: { name: 'プロトス・ロゼ（グラス）', description: '' },
        pt: { name: 'Protos Rosé (Copo)', description: '' },
        it: { name: 'Protos Rosato (Bicchiere)', description: '' },
        ko: { name: '프로토스 로제 (잔)', description: '' }
    },
    83: {
        en: { name: 'Lopez de Haro Rioja (Glass)', description: '' },
        ca: { name: 'Lopez de Haro Rioja (copa)', description: '' },
        zh: { name: '洛佩斯德阿罗里奥哈（杯）', description: '' },
        hi: { name: 'लोपेज़ डी हारो रिओजा (ग्लास)', description: '' },
        fr: { name: 'Lopez de Haro Rioja (Verre)', description: '' },
        de: { name: 'Lopez de Haro Rioja (Glas)', description: '' },
        ar: { name: 'لوبيز دي هارو ريوخا (كأس)', description: '' },
        ru: { name: 'Лопес де Аро Риоха (Бокал)', description: '' },
        ja: { name: 'ロペス・デ・アロ・リオハ（グラス）', description: '' },
        pt: { name: 'Lopez de Haro Rioja (Copo)', description: '' },
        it: { name: 'Lopez de Haro Rioja (Bicchiere)', description: '' },
        ko: { name: '로페스 데 아로 리오하 (잔)', description: '' }
    },
    84: {
        en: { name: 'Delecto Ribera del Duero (Glass)', description: '' },
        ca: { name: 'Delecto Ribera del Duero (copa)', description: '' },
        zh: { name: '德莱克托杜埃罗河岸（杯）', description: '' },
        hi: { name: 'डिलेक्टो रिबेरा डेल दुएरो (ग्लास)', description: '' },
        fr: { name: 'Delecto Ribera del Duero (Verre)', description: '' },
        de: { name: 'Delecto Ribera del Duero (Glas)', description: '' },
        ar: { name: 'ديليكتو رييرا دل دويرو (كأس)', description: '' },
        ru: { name: 'Делекто Ривера дель Дуэро (Бокал)', description: '' },
        ja: { name: 'デレクト・リベラ・デル・ドゥエロ（グラス）', description: '' },
        pt: { name: 'Delecto Ribera del Duero (Copo)', description: '' },
        it: { name: 'Delecto Ribera del Duero (Bicchiere)', description: '' },
        ko: { name: '델렉토 리베라 델 두에로 (잔)', description: '' }
    },
    85: {
        en: { name: 'Habla del Silencio (Glass)', description: '' },
        ca: { name: 'Habla del Silencio (copa)', description: '' },
        zh: { name: '沉默之语（杯）', description: '' },
        hi: { name: 'हबला डेल साइलेंसियो (ग्लास)', description: '' },
        fr: { name: 'Habla del Silencio (Verre)', description: '' },
        de: { name: 'Habla del Silencio (Glas)', description: '' },
        ar: { name: 'هبلا دل سيلينثيو (كأس)', description: '' },
        ru: { name: 'Хабла дель Силенсио (Бокал)', description: '' },
        ja: { name: 'アブラ・デル・シレンシオ（グラス）', description: '' },
        pt: { name: 'Habla del Silencio (Copo)', description: '' },
        it: { name: 'Habla del Silencio (Bicchiere)', description: '' },
        ko: { name: '아블라 델 실렌시오 (잔)', description: '' }
    },
    86: {
        en: { name: 'Condado de Haza (Glass)', description: '' },
        ca: { name: 'Condado de Haza (copa)', description: '' },
        zh: { name: '阿萨伯爵（杯）', description: '' },
        hi: { name: 'कॉन्डाडो डी हाज़ा (ग्लास)', description: '' },
        fr: { name: 'Condado de Haza (Verre)', description: '' },
        de: { name: 'Condado de Haza (Glas)', description: '' },
        ar: { name: 'كوندادو دي أثا (كأس)', description: '' },
        ru: { name: 'Кондадо де Аса (Бокал)', description: '' },
        ja: { name: 'コンダード・デ・アサ（グラス）', description: '' },
        pt: { name: 'Condado de Haza (Copo)', description: '' },
        it: { name: 'Condado de Haza (Bicchiere)', description: '' },
        ko: { name: '콘다도 데 아사 (잔)', description: '' }
    },
    87: {
        en: { name: 'Pruno Crianza (Glass)', description: '' },
        ca: { name: 'Pruno crianza (copa)', description: '' },
        zh: { name: '普鲁诺特酿（杯）', description: '' },
        hi: { name: 'प्रूनो क्रियांजा (ग्लास)', description: '' },
        fr: { name: 'Pruno Crianza (Verre)', description: '' },
        de: { name: 'Pruno Crianza (Glas)', description: '' },
        ar: { name: 'برونو كريانثا (كأس)', description: '' },
        ru: { name: 'Пруно Крианса (Бокал)', description: '' },
        ja: { name: 'プルノ・クリアンサ（グラス）', description: '' },
        pt: { name: 'Pruno Crianza (Copo)', description: '' },
        it: { name: 'Pruno Crianza (Bicchiere)', description: '' },
        ko: { name: '프루노 크리안사 (잔)', description: '' }
    },
    88: {
        en: { name: 'Goleta Verde Rueda (Glass)', description: '' },
        ca: { name: 'Goleta Verde Rueda (copa)', description: '' },
        zh: { name: '戈莱塔绿色鲁埃达（杯）', description: '' },
        hi: { name: 'गोलेटा वर्डे रुएडा (ग्लास)', description: '' },
        fr: { name: 'Goleta Verde Rueda (Verre)', description: '' },
        de: { name: 'Goleta Verde Rueda (Glas)', description: '' },
        ar: { name: 'غوليتا فيردي رويدا (كأس)', description: '' },
        ru: { name: 'Голета Верде Руэда (Бокал)', description: '' },
        ja: { name: 'ゴレタ・ベルデ・ルエダ（グラス）', description: '' },
        pt: { name: 'Goleta Verde Rueda (Copo)', description: '' },
        it: { name: 'Goleta Verde Rueda (Bicchiere)', description: '' },
        ko: { name: '골레타 베르데 루에다 (잔)', description: '' }
    },
    89: {
        en: { name: 'Gran Feudo (Glass)', description: '' },
        ca: { name: 'Gran Feudo (copa)', description: '' },
        zh: { name: '格兰费多（杯）', description: '' },
        hi: { name: 'ग्रान फेउडो (ग्लास)', description: '' },
        fr: { name: 'Gran Feudo (Verre)', description: '' },
        de: { name: 'Gran Feudo (Glas)', description: '' },
        ar: { name: 'غران فاودو (كأس)', description: '' },
        ru: { name: 'Гран Феудо (Бокал)', description: '' },
        ja: { name: 'グラン・フェウド（グラス）', description: '' },
        pt: { name: 'Gran Feudo (Copo)', description: '' },
        it: { name: 'Gran Feudo (Bicchiere)', description: '' },
        ko: { name: '그란 페우도 (잔)', description: '' }
    }
};
// Función para obtener traducciones de ítems
// Función para obtener traducciones de ítems - VERSIÓN CORREGIDA
function getItemTranslation(itemId, field) {
    // Verificar si existe traducción para este ítem
    if (!itemTranslations[itemId]) {
        console.warn(`⚠️ No hay traducciones para el ítem ID: ${itemId}`);
        return null;
    }
    
    // Obtener traducción para el idioma actual
    const langTranslation = itemTranslations[itemId][currentLanguage];
    
    // Si no hay traducción para este idioma, usar español como fallback
    if (!langTranslation || !langTranslation[field]) {
        // Intentar con español
        const esTranslation = itemTranslations[itemId]['es'];
        if (esTranslation && esTranslation[field]) {
            return esTranslation[field];
        }
        return null;
    }
    
    return langTranslation[field];
}

// Función para escapar HTML
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Rellenar automáticamente traducciones faltantes copiando el nombre en español como fallback
(function fillMissingTranslations(){
    const langs = ['es','en','ca','zh','hi','fr','de','ar','ru','ja','pt','it','ko'];
    menuItems.forEach(item => {
        const id = item.id;
        if (!itemTranslations[id]) itemTranslations[id] = {};
        langs.forEach(lang => {
            if (!itemTranslations[id][lang]) {
                itemTranslations[id][lang] = { name: item.name, description: item.description || '' };
            }
        });
    });
})();

// Utilidades para traducciones de items
function escapeHtml(str){
    return String(str || '').replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;" })[c]);
}

function getTranslatedItemField(itemId, field){
    if (!window.itemTranslations) return null;
    const block = window.itemTranslations[itemId];
    if (!block) return null;
    const langObj = block[currentLanguage] || block['es'] || {};
    return langObj[field] || null;
}

// ============================================
// FUNCIONES PRINCIPALES DE MENÚ DEL DÍA
// ============================================

// Cargar y mostrar el menú del día desde localStorage
function loadAndDisplayDailyMenu() {
    console.log('📋 Cargando menú del día...');
    
    const savedMenu = localStorage.getItem('canbuigas_daily_menu');
    
    if (savedMenu) {
        try {
            const menuData = JSON.parse(savedMenu);
            console.log('✅ Menú cargado desde localStorage:', menuData);
            updateDailyMenuOnPage(menuData);
        } catch (e) {
            console.error('❌ Error cargando menú:', e);
            // Usar menú por defecto
            setupDefaultDailyMenu();
        }
    } else {
        console.log('ℹ️ No hay menú guardado, usando menú por defecto');
        setupDefaultDailyMenu();
    }
    
    // Escuchar cambios en el menú (desde el panel de admin)
    window.addEventListener('storage', function(e) {
        if (e.key === 'canbuigas_daily_menu' || e.key === 'canbuigas_menu_updated') {
            console.log('🔄 Menú actualizado desde localStorage');
            const updatedMenu = localStorage.getItem('canbuigas_daily_menu');
            if (updatedMenu) {
                const menuData = JSON.parse(updatedMenu);
                updateDailyMenuOnPage(menuData);

                // Mostrar notificación
                showMenuUpdatedNotification();
            }
        }
    });
}

// Mostrar menú por defecto
function setupDefaultDailyMenu() {
    console.log('⚙️ Configurando menú por defecto');
    
    // Asegurar que todos los elementos tengan el atributo data-i18n
    const priceElement = document.querySelector('.daily-menu-header .price');
    if (priceElement) {
        priceElement.setAttribute('data-i18n', 'priceDailyMenu');
        priceElement.textContent = translations[currentLanguage].priceDailyMenu || '25€';
    }
    
    const firstCourse = document.querySelector('[data-i18n="firstCourseDesc"]');
    if (firstCourse) {
        firstCourse.setAttribute('data-i18n', 'firstCourseDesc');
        firstCourse.textContent = translations[currentLanguage].firstCourseDesc || '';
    }
    
    const secondCourse = document.querySelector('[data-i18n="secondCourseDesc"]');
    if (secondCourse) {
        secondCourse.setAttribute('data-i18n', 'secondCourseDesc');
        secondCourse.textContent = translations[currentLanguage].secondCourseDesc || '';
    }
    
    const dessertCourse = document.querySelector('[data-i18n="dessertCourseDesc"]');
    if (dessertCourse) {
        dessertCourse.setAttribute('data-i18n', 'dessertCourseDesc');
        dessertCourse.textContent = translations[currentLanguage].dessertCourseDesc || '';
    }
    
    const includesDesc = document.querySelector('[data-i18n="includesDesc"]');
    if (includesDesc) {
        includesDesc.setAttribute('data-i18n', 'includesDesc');
        includesDesc.textContent = translations[currentLanguage].includesDesc || '';
    }
}

// Actualizar el menú en la página
function updateDailyMenuOnPage(menuData) {
    console.log('🎯 Actualizando menú en la página:', menuData);
    
    if (!menuData) {
        console.log('❌ No hay datos de menú para actualizar');
        return;
    }
    
    // Actualizar precio
    const priceElement = document.querySelector('.daily-menu-header .price');
    if (priceElement && menuData.price) {
        console.log('💰 Actualizando precio:', menuData.price);
        priceElement.textContent = menuData.price;
        priceElement.removeAttribute('data-i18n');
    }
    
    // Si hay fecha, agregarla al título
    if (menuData.date) {
        const dateObj = new Date(menuData.date);
        const formattedDate = dateObj.toLocaleDateString('es-ES', {
            weekday: 'long',
            day: 'numeric',
            month: 'long'
        });
        
        console.log('📅 Mostrando fecha:', formattedDate);
        const menuHeader = document.querySelector('.daily-menu-header h3');
        if (menuHeader) {
            menuHeader.innerHTML = `Menú del Día`;
        }
    }
    
    // Sistema para manejar múltiples platos (estructura del panel admin)
    let hasFirstCourses = false;
    let hasSecondCourses = false;
    let hasDesserts = false;
    
    // Manejar primeros platos (múltiples)
    if (menuData.first_courses && Array.isArray(menuData.first_courses)) {
        const firstCourses = menuData.first_courses.filter(dish => dish && dish.name);
        if (firstCourses.length > 0) {
            hasFirstCourses = true;
            console.log('🍽️ Primeros platos:', firstCourses.length);
            updateCourseSection('firstCourse', 'firstCourseDesc', firstCourses);
        }
    }
    // Manejar formato antiguo (único plato)
    else if (menuData.firstCourseCustom || menuData.firstCourse) {
        console.log('🍽️ Primer plato (formato antiguo):', menuData.firstCourseCustom || menuData.firstCourse);
        updateSingleCourse('firstCourseDesc', menuData.firstCourseCustom || menuData.firstCourse);
    }
    
    // Manejar segundos platos (múltiples)
    if (menuData.second_courses && Array.isArray(menuData.second_courses)) {
        const secondCourses = menuData.second_courses.filter(dish => dish && dish.name);
        if (secondCourses.length > 0) {
            hasSecondCourses = true;
            console.log('🍖 Segundos platos:', secondCourses.length);
            updateCourseSection('secondCourse', 'secondCourseDesc', secondCourses);
        }
    }
    // Manejar formato antiguo
    else if (menuData.secondCourseCustom || menuData.secondCourse) {
        console.log('🍖 Segundo plato (formato antiguo):', menuData.secondCourseCustom || menuData.secondCourse);
        updateSingleCourse('secondCourseDesc', menuData.secondCourseCustom || menuData.secondCourse);
    }
    
    // Manejar postres (múltiples)
    if (menuData.desserts && Array.isArray(menuData.desserts)) {
        const desserts = menuData.desserts.filter(dish => dish && dish.name);
        if (desserts.length > 0) {
            hasDesserts = true;
            console.log('🍰 Postres:', desserts.length);
            updateCourseSection('dessertCourse', 'dessertCourseDesc', desserts);
        }
    }
    // Manejar formato antiguo
    else if (menuData.dessertCourseCustom || menuData.dessertCourse) {
        console.log('🍰 Postre (formato antiguo):', menuData.dessertCourseCustom || menuData.dessertCourse);
        updateSingleCourse('dessertCourseDesc', menuData.dessertCourseCustom || menuData.dessertCourse);
    }
    
    // Actualizar "incluye"
    if (menuData.includesCustom || menuData.includes) {
        console.log('🥖 Actualizando "incluye":', menuData.includesCustom || menuData.includes);
        const includesDesc = document.querySelector('[data-i18n="includesDesc"]');
        if (includesDesc) {
            includesDesc.textContent = menuData.includesCustom || menuData.includes;
            includesDesc.removeAttribute('data-i18n');
        }
    }
    
    // Agregar suplementos si existen
    if (menuData.supplements && menuData.supplements.length > 0) {
        console.log('➕ Agregando suplementos:', menuData.supplements.length);
        addSupplementsToMenu(menuData.supplements);
    }
    
    // Agregar animación de actualización
    const menuCard = document.querySelector('.daily-menu-card');
    if (menuCard) {
        menuCard.classList.add('menu-updated');
        setTimeout(() => menuCard.classList.remove('menu-updated'), 1000);
    }
    
    console.log('✅ Menú actualizado correctamente');
}

// Actualizar sección de curso con múltiples platos
function updateCourseSection(courseTitleKey, courseDescKey, dishes) {
    const courseElement = document.querySelector(`[data-i18n="${courseDescKey}"]`);
    if (!courseElement) {
        console.log(`❌ No se encontró el elemento para ${courseDescKey}`);
        return;
    }
    
    // Remover elemento de traducción
    courseElement.removeAttribute('data-i18n');
    
    // Crear HTML para múltiples platos
    let dishesHTML = '';
    dishes.forEach((dish, index) => {
        if (dish.name) {
            dishesHTML += `<div class="daily-menu-dish-item">${dish.image || '🍽️'} ${dish.name}</div>`;
        }
    });
    
    // Actualizar título
    const titleElement = courseElement.closest('.daily-menu-item').querySelector('h4');
    if (titleElement) {
        titleElement.textContent = dishes.length > 1 ? 
            `${translations[currentLanguage][courseTitleKey]}s` : 
            translations[currentLanguage][courseTitleKey];
    }
    
    // Actualizar contenido
    courseElement.innerHTML = `<div class="multiple-dishes">${dishesHTML}</div>`;
}

// Actualizar curso individual
function updateSingleCourse(courseDescKey, text) {
    const courseElement = document.querySelector(`[data-i18n="${courseDescKey}"]`);
    if (courseElement) {
        courseElement.textContent = text;
        courseElement.removeAttribute('data-i18n');
    }
}

// Agregar suplementos al menú
function addSupplementsToMenu(supplements) {
    const includesSection = document.querySelector('[data-i18n="includesDesc"]')?.closest('.daily-menu-item');
    if (!includesSection) return;
    
    // Remover suplementos anteriores si existen
    const oldSupplements = document.querySelector('.daily-menu-supplements');
    if (oldSupplements) oldSupplements.remove();
    
    // Crear sección de suplementos
    const supplementsDiv = document.createElement('div');
    supplementsDiv.className = 'daily-menu-supplements';
    supplementsDiv.style.marginTop = '15px';
    supplementsDiv.style.padding = '10px';
    supplementsDiv.style.background = 'rgba(212, 175, 55, 0.1)';
    supplementsDiv.style.borderRadius = '5px';
    supplementsDiv.style.border = '1px solid rgba(212, 175, 55, 0.3)';
    
    let supplementsHTML = '<strong>Suplementos:</strong><br>';
    supplements.forEach(supp => {
        if (supp.name || supp.price) {
            const name = supp.name || '';
            const price = supp.price || '';
            supplementsHTML += `<div class="supplement-item" style="margin-top: 5px;">${name} ${price}</div>`;
        }
    });
    
    supplementsDiv.innerHTML = supplementsHTML;
    
    // Insertar después de "incluye"
    includesSection.parentNode.insertBefore(supplementsDiv, includesSection.nextSibling);
}

// Agregar botones sociales al menú
function addSocialButtonsToMenu() {
    const menuCard = document.querySelector('.daily-menu-card');
    if (!menuCard) {
        console.log('❌ No se encontró el menú card');
        return;
    }
    
    // Remover botones anteriores si existen
    const oldButtons = menuCard.querySelectorAll('.menu-social-btn');
    oldButtons.forEach(btn => {
        console.log('🗑️ Eliminando botón anterior:', btn);
        btn.remove();
    });
    
    // Crear contenedor para botones
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'menu-social-buttons';
    buttonsContainer.style.marginTop = '20px';
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.gap = '10px';
    buttonsContainer.style.flexWrap = 'wrap';
    
    // Botón de compartir
    const shareBtn = document.createElement('button');
    shareBtn.className = 'btn-secondary menu-social-btn social-share-btn';
    shareBtn.innerHTML = '<i class="fas fa-share-alt"></i> Compartir Menú';
    shareBtn.style.background = 'linear-gradient(135deg, #4267B2 0%, #365899 100%)';
    shareBtn.style.border = 'none';
    shareBtn.style.padding = '12px 20px';
    shareBtn.onclick = shareDailyMenu;
    
    // Botón de imprimir (creado localmente para evitar ReferenceError)
    const printBtn = document.createElement('button');
    printBtn.className = 'btn-secondary menu-social-btn social-print-btn';
    printBtn.innerHTML = '<i class="fas fa-print"></i> Imprimir';
    printBtn.style.background = 'linear-gradient(135deg, #28a745 0%, #1e7e34 100%)';
    printBtn.style.border = 'none';
    printBtn.style.padding = '12px 20px';
    printBtn.onclick = printDailyMenu;

    // Agregar botones al contenedor
    buttonsContainer.appendChild(shareBtn);
    buttonsContainer.appendChild(printBtn);
    
    // Insertar botones en el menú
    const reserveBtn = menuCard.querySelector('.btn-secondary[onclick="showReservationForm()"]');
    if (reserveBtn) {
        // Insertar antes del botón de reserva
        reserveBtn.parentNode.insertBefore(buttonsContainer, reserveBtn);
    } else {
        // Si no hay botón de reserva, agregar al final del contenido
        const menuContent = document.querySelector('.daily-menu-content');
        if (menuContent) {
            menuContent.appendChild(buttonsContainer);
        }
    }
    
    console.log('✅ Botones sociales agregados al menú');
}

// Compartir menú diario
function shareDailyMenu() {
    console.log('📤 Compartiendo menú...');
    
    const menuData = JSON.parse(localStorage.getItem('canbuigas_daily_menu') || '{}');
    
    if (!menuData) {
        alert('No hay un menú configurado para compartir.');
        return;
    }
    
    const date = menuData.date ? new Date(menuData.date).toLocaleDateString('es-ES') : 'Hoy';
    let shareText = `🍽️ MENÚ DEL DÍA - CAN BUÏGAS (${date})\n\n`;
    
    // Agregar primeros platos
    if (menuData.first_courses && Array.isArray(menuData.first_courses)) {
        const firstCourses = menuData.first_courses.filter(dish => dish && dish.name);
        if (firstCourses.length > 0) {
            shareText += `🍽️ PRIMEROS PLATOS:\n`;
            firstCourses.forEach(dish => {
                shareText += `• ${dish.name}\n`;
            });
            shareText += '\n';
        }
    } else if (menuData.firstCourseCustom || menuData.firstCourse) {
        shareText += `🍽️ ${menuData.firstCourseCustom || menuData.firstCourse}\n`;
    }
    
    // Agregar segundos platos
    if (menuData.second_courses && Array.isArray(menuData.second_courses)) {
        const secondCourses = menuData.second_courses.filter(dish => dish && dish.name);
        if (secondCourses.length > 0) {
            shareText += `🍖 SEGUNDOS PLATOS:\n`;
            secondCourses.forEach(dish => {
                shareText += `• ${dish.name}\n`;
            });
            shareText += '\n';
        }
    } else if (menuData.secondCourseCustom || menuData.secondCourse) {
        shareText += `🍖 ${menuData.secondCourseCustom || menuData.secondCourse}\n`;
    }
    
    // Agregar postres
    if (menuData.desserts && Array.isArray(menuData.desserts)) {
        const desserts = menuData.desserts.filter(dish => dish && dish.name);
        if (desserts.length > 0) {
            shareText += `🍰 POSTRES:\n`;
            desserts.forEach(dish => {
                shareText += `• ${dish.name}\n`;
            });
            shareText += '\n';
        }
    } else if (menuData.dessertCourseCustom || menuData.dessertCourse) {
        shareText += `🍰 ${menuData.dessertCourseCustom || menuData.dessertCourse}\n`;
    }
    
    // Agregar suplementos
    if (menuData.supplements && menuData.supplements.length > 0) {
        shareText += `➕ SUPLEMENTOS:\n`;
        menuData.supplements.forEach(supp => {
            shareText += `• ${supp.name || ''} ${supp.price || ''}\n`;
        });
        shareText += '\n';
    }
    
    // Agregar precio
    if (menuData.price) {
        shareText += `💰 ${menuData.price}\n\n`;
    }
    
    // Agregar información de contacto
    shareText += `📍 Calle Gourmet, 123 - Barcelona\n`;
    shareText += `📞 Reservas: +34 93 123 45 67\n\n`;
    shareText += `#CanBuigas #MenuDelDía #RestauranteBarcelona #Gastronomía`;
    
    // Usar Web Share API si está disponible
    if (navigator.share) {
        navigator.share({
            title: `Menú del Día Can Buïgas - ${date}`,
            text: shareText,
            url: window.location.href
        }).then(() => {
            console.log('✅ Menú compartido exitosamente');
        }).catch(error => {
            console.log('❌ Error compartiendo:', error);
            copyToClipboard(shareText);
        });
    } else {
        // Fallback: copiar al portapapeles
        copyToClipboard(shareText);
    }
}

// Imprimir menú diario
function printDailyMenu() {
    console.log('🖨️ Imprimiendo menú...');
    
    const menuData = JSON.parse(localStorage.getItem('canbuigas_daily_menu') || '{}');
    
    if (!menuData) {
        alert('No hay menú para imprimir.');
        return;
    }
    
    // Crear ventana de impresión
    const printWindow = window.open('', '_blank');
    
    let printContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Menú del Día - Can Buïgas</title>
            <style>
                body { 
                    font-family: 'Georgia', serif; 
                    padding: 20px;
                    color: #333;
                }
                .menu-print { 
                    border: 2px solid #D4AF37; 
                    padding: 30px; 
                    max-width: 600px; 
                    margin: 0 auto;
                }
                .print-header {
                    text-align: center;
                    margin-bottom: 30px;
                    border-bottom: 3px solid #D4AF37;
                    padding-bottom: 20px;
                }
                .restaurant-name {
                    color: #D4AF37;
                    font-size: 28px;
                    font-weight: bold;
                    margin-bottom: 5px;
                }
                .menu-date {
                    font-size: 16px;
                    color: #666;
                }
                .menu-section {
                    margin-bottom: 20px;
                }
                .section-title {
                    color: #D4AF37;
                    font-size: 18px;
                    font-weight: bold;
                    border-bottom: 2px solid #D4AF37;
                    padding-bottom: 5px;
                    margin-bottom: 10px;
                }
                .dish-item {
                    margin-bottom: 8px;
                    padding-left: 10px;
                }
                .price-section {
                    text-align: center;
                    margin: 25px 0;
                    padding: 20px;
                    background: #f8f8f8;
                    border-radius: 5px;
                }
                .total-price {
                    font-size: 32px;
                    font-weight: bold;
                    color: #000;
                }
                .supplements-section {
                    margin: 15px 0;
                    padding: 10px;
                    background: #f0f0f0;
                    border-radius: 5px;
                }
                .footer-info {
                    text-align: center;
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 1px solid #eee;
                    color: #666;
                    font-size: 12px;
                }
                .print-buttons {
                    text-align: center;
                    margin-top: 20px;
                    padding: 20px;
                }
                @media print {
                    .print-buttons { display: none; }
                    .menu-print { border: none; }
                }
            </style>
        </head>
        <body>
            <div class="menu-print">
                <div class="print-header">
                    <div class="restaurant-name">CAN BUÏGAS</div>
                    <div class="menu-date">${menuData.date ? new Date(menuData.date).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Menú del Día'}</div>
                </div>
    `;
    
    // Primeros platos
    if ((menuData.first_courses && menuData.first_courses.length > 0) || menuData.firstCourse) {
        printContent += `
            <div class="menu-section">
                <div class="section-title">PRIMEROS PLATOS</div>
        `;
        
        if (menuData.first_courses && Array.isArray(menuData.first_courses)) {
            const firstCourses = menuData.first_courses.filter(dish => dish && dish.name);
            firstCourses.forEach(dish => {
                printContent += `<div class="dish-item">${dish.image || '🍽️'} ${dish.name}</div>`;
            });
        } else if (menuData.firstCourseCustom || menuData.firstCourse) {
            printContent += `<div class="dish-item">${menuData.firstCourseCustom || menuData.firstCourse}</div>`;
        }
        
        printContent += `</div>`;
    }
    
    // Segundos platos
    if ((menuData.second_courses && menuData.second_courses.length > 0) || menuData.secondCourse) {
        printContent += `
            <div class="menu-section">
                <div class="section-title">SEGUNDOS PLATOS</div>
        `;
        
        if (menuData.second_courses && Array.isArray(menuData.second_courses)) {
            const secondCourses = menuData.second_courses.filter(dish => dish && dish.name);
            secondCourses.forEach(dish => {
                printContent += `<div class="dish-item">${dish.image || '🍽️'} ${dish.name}</div>`;
            });
        } else if (menuData.secondCourseCustom || menuData.secondCourse) {
            printContent += `<div class="dish-item">${menuData.secondCourseCustom || menuData.secondCourse}</div>`;
        }
        
        printContent += `</div>`;
    }
    
    // Postres
    if ((menuData.desserts && menuData.desserts.length > 0) || menuData.dessertCourse) {
        printContent += `
            <div class="menu-section">
                <div class="section-title">POSTRES</div>
        `;
        
        if (menuData.desserts && Array.isArray(menuData.desserts)) {
            const desserts = menuData.desserts.filter(dish => dish && dish.name);
            desserts.forEach(dish => {
                printContent += `<div class="dish-item">${dish.image || '🍽️'} ${dish.name}</div>`;
            });
        } else if (menuData.dessertCourseCustom || menuData.dessertCourse) {
            printContent += `<div class="dish-item">${menuData.dessertCourseCustom || menuData.dessertCourse}</div>`;
        }
        
        printContent += `</div>`;
    }
    
    // Precio
    if (menuData.price) {
        printContent += `
            <div class="price-section">
                <div class="total-price">${menuData.price}</div>
            </div>
        `;
    }
    
    // Suplementos
    if (menuData.supplements && menuData.supplements.length > 0) {
        printContent += `
            <div class="supplements-section">
                <div class="section-title">SUPLEMENTOS</div>
        `;
        
        menuData.supplements.forEach(supp => {
            printContent += `<div class="dish-item">${supp.name || ''} ${supp.price || ''}</div>`;
        });
        
        printContent += `</div>`;
    }
    
    // Footer
    printContent += `
            <div class="footer-info">
                <div>📍 Calle Gourmet, 123 - 08025 Barcelona</div>
                <div>📞 +34 93 123 45 67 | www.canbuigas.com</div>
                <div>⏰ Lunes a Sábado: 13:00 - 16:00 / 20:00 - 00:00 | Domingo: 13:00 - 17:00</div>
            </div>
        </div>
        
        <div class="print-buttons">
            <button onclick="window.print()" style="padding: 15px 30px; background: #D4AF37; color: black; border: none; border-radius: 5px; cursor: pointer; margin-right: 10px; font-size: 16px;">
                🖨️ Imprimir Menú
            </button>
            <button onclick="window.close()" style="padding: 15px 30px; background: #666; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">
                Cerrar Ventana
            </button>
        </div>
        
        <script>
            // Imprimir automáticamente después de cargar
            window.onload = function() {
                setTimeout(function() {
                    window.print();
                }, 500);
            };
        <\/script>
        </body>
        </html>
    `;
    
    printWindow.document.write(printContent);
    printWindow.document.close();
}

// Mostrar notificación de menú actualizado
function showMenuUpdatedNotification() {
    console.log('🔔 Mostrando notificación de menú actualizado');
    
    // Crear notificación
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.background = '#D4AF37';
    notification.style.color = '#000';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    notification.style.zIndex = '9999';
    notification.style.fontWeight = 'bold';
    notification.innerHTML = '✅ Menú del día actualizado';
    
    document.body.appendChild(notification);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

// Función auxiliar para copiar al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('✅ Menú copiado al portapapeles. Pega en WhatsApp, Instagram, etc.');
    }).catch(err => {
        console.error('Error copiando al portapapeles:', err);
        // Fallback para navegadores antiguos
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('✅ Menú copiado al portapapeles. Pega en WhatsApp, Instagram, etc.');
    });
}

// ============================================
// FUNCIONES DE IDIOMA Y NAVEGACIÓN
// ============================================

let currentLanguage = 'es'; // Variable global para el idioma actual

// Función auxiliar para obtener nombre del idioma
function getLanguageName(lang) {
    const languageNames = {
        'es': 'Español',
        'en': 'English',
        'zh': '中文',
        'hi': 'हिन्दी',
        'fr': 'Français',
        'de': 'Deutsch',
        'ar': 'العربية',
        'ru': 'Русский',
        'ja': '日本語',
        'pt': 'Português',
        'it': 'Italiano',
        'ko': '한국어',
        'ca': 'Català'
    };
    return languageNames[lang] || 'Español';
}

// Seleccionar idioma
function selectLanguage(lang) {
    console.log('🌍 Cambiando idioma a:', lang);
    
    currentLanguage = lang;
    localStorage.setItem('canbuigas_language', lang);
    
    // Actualizar bandera y texto en el selector
    const flagClass = flagMap[lang] || 'fi fi-es';
    const currentFlag = document.getElementById('currentFlag');
    const currentLanguageText = document.getElementById('currentLanguageText');
    
    if (currentFlag) {
        currentFlag.className = 'flag-icon-mini fi ' + flagClass;
    }
    
    if (currentLanguageText) {
        currentLanguageText.textContent = getLanguageName(lang);
    }
    
    // Cerrar el modal de selección de idioma si está abierto
    document.getElementById('languageSelector').style.display = 'none';
    
    // Traducir la página
    translatePage(lang);
    
    // 🔥 IMPORTANTE: Forzar retraducción de la carta
    const activeCategory = document.querySelector('.menu-categories .category-btn.active')?.getAttribute('data-category') || 'all';
    renderMenuItems(activeCategory);
    
    // Recargar el menú del día
    loadAndDisplayDailyMenu();
}

// Traducir la página
function translatePage(lang) {
    console.log('📝 Traduciendo página a:', lang);
    
    // Verificar si existen traducciones para este idioma
    if (!translations[lang]) {
        console.error('❌ No hay traducciones para el idioma:', lang);
        return;
    }
    
    // Actualizar todos los elementos con atributo data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        // 🔥 EXCLUIR ELEMENTOS DEL MENÚ
        if (element.closest('.menu-items') || element.closest('.menu-item')) {
            return; // Saltar elementos de la carta
        }
        
        if (translations[lang][key]) {
            const translation = translations[lang][key];
            
            // Para elementos que pueden contener HTML
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
                if (element.placeholder) {
                    element.placeholder = translation;
                }
            } else if (element.tagName === 'OPTION') {
                element.textContent = translation;
            } else {
                element.innerHTML = translation;
            }
        }
    });
    
    // Actualizar también las opciones de idioma en el navbar
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        const value = option.getAttribute('data-value');
        if (value === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    
    console.log('✅ Página traducida correctamente');
}

// Inicializar selector de idioma en el navbar
function initLanguageSelector() {
    const currentLanguageDisplay = document.getElementById('currentLanguageDisplay');
    const currentFlag = document.getElementById('currentFlag');
    const currentLanguageText = document.getElementById('currentLanguageText');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageOptions = document.querySelectorAll('.language-option');
    
    // Función para actualizar la visualización del idioma actual
    function updateCurrentDisplay(languageOption) {
        if (!languageOption) return;
        
        const flagClass = languageOption.getAttribute('data-flag');
        const languageText = languageOption.getAttribute('data-text');
        const languageValue = languageOption.getAttribute('data-value');
        
        // Actualizar bandera y texto
        currentFlag.className = 'flag-icon-mini fi ' + flagClass;
        currentLanguageText.textContent = languageText;
        
        // Actualizar estado activo en todas las opciones
        languageOptions.forEach(opt => opt.classList.remove('active'));
        languageOption.classList.add('active');
        
        return languageValue;
    }
    
    // Función para cerrar el dropdown
    function closeDropdown() {
        languageDropdown.classList.remove('show');
        currentLanguageDisplay.parentElement.classList.remove('active');
    }
    
    // Función para abrir el dropdown
    function openDropdown() {
        languageDropdown.classList.add('show');
        currentLanguageDisplay.parentElement.classList.add('active');
    }
    
    // Configurar evento click para mostrar/ocultar dropdown
    if (currentLanguageDisplay) {
        currentLanguageDisplay.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            if (languageDropdown.classList.contains('show')) {
                closeDropdown();
            } else {
                openDropdown();
            }
        });
    }
    
    // Configurar eventos para cada opción de idioma
    languageOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            const languageValue = updateCurrentDisplay(this);
            
            // Cerrar dropdown después de seleccionar
            closeDropdown();
            
            // Llamar a la función selectLanguage
            selectLanguage(languageValue);
        });
    });
    
    // Cerrar dropdown al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!currentLanguageDisplay.contains(e.target) && !languageDropdown.contains(e.target)) {
            closeDropdown();
        }
    });
    
    // Inicializar con el idioma guardado
    function initializeLanguage() {
        const savedLanguage = localStorage.getItem('canbuigas_language') || 'es';
        const initialOption = document.querySelector(`.language-option[data-value="${savedLanguage}"]`);
        
        if (initialOption) {
            updateCurrentDisplay(initialOption);
        } else if (languageOptions.length > 0) {
            // Si no se encuentra, usar el primero
            updateCurrentDisplay(languageOptions[0]);
        }
    }
    
    // Llamar a la inicialización
    initializeLanguage();
    
    // Manejar tecla Escape para cerrar
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && languageDropdown.classList.contains('show')) {
            closeDropdown();
        }
    });
}

// ============================================
// FUNCIONES DE NAVEGACIÓN Y MENÚ
// ============================================

// Inicializar menú
function initMenu() {
    const menuItemsContainer = document.querySelector('.menu-items');
    
    // Mostrar todos los items inicialmente
    renderMenuItems('all');
    
    // Configurar botones de categorías
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase active de todos los botones
            document.querySelectorAll('.category-btn').forEach(b => {
                b.classList.remove('active');
            });
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            // Filtrar items por categoría
            const category = this.getAttribute('data-category');
            renderMenuItems(category);
        });
    });
}
function renderMenuItems(category) {
    const menuItemsContainer = document.querySelector('.menu-items');
    menuItemsContainer.innerHTML = '';
    
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    filteredItems.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.className = 'menu-item';
        
        // OBTENER TRADUCCIONES
        const translatedName = getItemTranslation(item.id, 'name') || item.name;
        const translatedDesc = getItemTranslation(item.id, 'description') || item.description;
        
        // ===== SISTEMA DE IMÁGENES MEJORADO =====
        let imageHTML = '';
        
        // Verificar si es una imagen (tiene extensión .png, .jpg, etc.)
        const isImageFile = item.image && (
            item.image.includes('.png') || 
            item.image.includes('.jpg') || 
            item.image.includes('.jpeg') || 
            item.image.includes('.gif') || 
            item.image.includes('.webp')
        );
        
        if (isImageFile) {
            // Es una imagen real - usar etiqueta <img> con fallback
            imageHTML = `
                <div class="menu-item-img">
                    <img src="${item.image}" 
                         alt="${translatedName}"
                         style="width: 100%; height: 100%; object-fit: cover;"
                         onerror="this.onerror=null; this.style.display='none'; 
                                  this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;\\'>🍳</div>';">
                </div>
            `;
        } else {
            // Es un emoji o texto
            imageHTML = `<div class="menu-item-img">${item.image || '🍽️'}</div>`;
        }
        
        // Crear etiquetas HTML
        let tagsHTML = '';
        if (item.tags && item.tags.length > 0) {
            tagsHTML = `
                <div class="menu-tags">
                    ${item.tags.map(tag => `<span class="menu-tag">${tag}</span>`).join('')}
                </div>
            `;
        }
        
        // 🔥 USAR LAS VARIABLES TRADUCIDAS
        menuItemElement.innerHTML = `
            ${imageHTML}
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-title">${escapeHtml(translatedName)}</h3>
                    <div class="menu-item-price">${item.price}€</div>
                </div>
                <p class="menu-item-description">${escapeHtml(translatedDesc)}</p>
                ${tagsHTML}
            </div>
        `;
        
        menuItemsContainer.appendChild(menuItemElement);
    });
}

// Inicializar navegación
function initNavigation() {
    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Cerrar menú móvil si está abierto
                document.querySelector('.nav-links').classList.remove('active');
                
                // Desplazamiento suave
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Actualizar enlace activo
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Actualizar enlace activo al hacer scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// FUNCIONES DE RESERVA
// ============================================

// Inicializar formulario de reserva
function initReservationForm() {
    const form = document.getElementById('reservationForm');
    if (!form) return;
    
    // Establecer fecha mínima como hoy
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('date');
    if (dateInput) {
        dateInput.setAttribute('min', today);
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const persons = document.getElementById('persons').value;
        const message = document.getElementById('message').value;
        
        // Mostrar modal de confirmación
        showModal();
        
        // Reiniciar formulario
        form.reset();
    });
}

// Mostrar modal de confirmación
function showModal() {
    const modal = document.getElementById('reservationModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('reservationModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Mostrar formulario de reserva (para botón en menú del día)
function showReservationForm() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        const nameInput = document.getElementById('name');
        if (nameInput) {
            nameInput.focus();
        }
    }
}

// Actualizar año en el footer
function updateYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ============================================
// FUNCIONES PARA EL MODAL DE IDIOMAS
// ============================================

// Configurar modal de idiomas
function setupLanguageModal() {
    // Configurar botones de idioma en el modal
    const languageBtns = document.querySelectorAll('.language-btn');
    languageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase 'selected' de todos los botones
            document.querySelectorAll('.language-btn').forEach(b => {
                b.classList.remove('selected');
            });
            
            // Agregar clase 'selected' al botón clickeado
            this.classList.add('selected');
            
            const lang = this.getAttribute('data-lang');
            
            // Actualizar también el selector del navbar
            const navbarOption = document.querySelector(`.language-option[data-value="${lang}"]`);
            if (navbarOption) {
                const flagClass = navbarOption.getAttribute('data-flag');
                const languageText = navbarOption.getAttribute('data-text');
                const currentFlag = document.getElementById('currentFlag');
                const currentLanguageText = document.getElementById('currentLanguageText');
                
                if (currentFlag) currentFlag.className = 'flag-icon-mini fi ' + flagClass;
                if (currentLanguageText) currentLanguageText.textContent = languageText;
            }
            
            // Cambiar el idioma
            selectLanguage(lang);
            
            // Actualizar texto del botón continuar
            const continueBtn = document.getElementById('continueBtn');
            const langName = this.querySelector('.lang-native').textContent;
            if (continueBtn) {
                continueBtn.innerHTML = `<i class="fas fa-arrow-right"></i> Continuar con ${langName}`;
            }
        });
    });
    
    // Configurar botón continuar
    const continueBtn = document.getElementById('continueBtn');
    if (continueBtn) {
        continueBtn.addEventListener('click', function() {
            // Cerrar el modal de idiomas
            const languageModal = document.getElementById('languageSelector');
            if (languageModal) {
                languageModal.style.display = 'none';
            }
            
            // Guardar que ya se vio el modal
            localStorage.setItem('canbuigas_language_selected', 'true');
        });
    }
}

// ============================================
// FUNCIONES DE INICIALIZACIÓN
// ============================================

// Inicialización cuando el DOM está listo
// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Iniciando aplicación Can Buïgas...');
    
    // Obtener idioma guardado o usar español por defecto
    const savedLanguage = localStorage.getItem('canbuigas_language') || 'es';
    currentLanguage = savedLanguage;
    
    console.log('🌍 Idioma inicial:', currentLanguage);
    
    // Inicializar componentes en el orden correcto
    initLanguageSelector();
    setupLanguageModal();
    initMenu(); // 🔥 ESTO CARGA LA CARTA POR PRIMERA VEZ
    initNavigation();
    initReservationForm();
    updateYear();
    
    // Cargar y mostrar el menú del día
    loadAndDisplayDailyMenu();
    
    // Traducir la página (pero NO la carta - eso ya se hizo en initMenu)
    translatePage(currentLanguage);
    
    // Seleccionar automáticamente el idioma guardado en el modal
    setTimeout(() => {
        const savedLangBtn = document.querySelector(`.language-btn[data-lang="${savedLanguage}"]`);
        if (savedLangBtn) {
            savedLangBtn.classList.add('selected');
            const langName = savedLangBtn.querySelector('.lang-native').textContent;
            const continueBtn = document.getElementById('continueBtn');
            if (continueBtn) {
                continueBtn.innerHTML = `<i class="fas fa-arrow-right"></i> Continuar con ${langName}`;
            }
        }
    }, 100);
    
    console.log('✅ Aplicación inicializada correctamente');
});

// ============================================
// FUNCIONES PARA EL PANEL DE ADMINISTRACIÓN
// ============================================

// Hacer estas funciones disponibles globalmente
window.updateMenuFromLocalStorage = function() {
    loadAndDisplayDailyMenu();
    alert('Menú actualizado desde el almacenamiento local');
};

window.resetDailyMenu = function() {
    if (confirm('¿Estás seguro de que quieres restaurar el menú original? Se perderán los cambios actuales.')) {
        localStorage.removeItem('canbuigas_daily_menu');
        localStorage.setItem('canbuigas_menu_updated', Date.now().toString());
        
        // Recargar la página después de 1 segundo
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
};

// Función para exportar (disponible globalmente)
window.updateDailyMenuOnPage = updateDailyMenuOnPage;
window.addSocialButtons = addSocialButtonsToMenu;
// ============================================
// MEJORAS PARA EL MENÚ MÓVIL
// ============================================

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    if (!menuToggle || !navLinks) return;
    
    // Crear overlay para el menú móvil
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);
    
    // Función para abrir/cerrar menú
    function toggleMenu() {
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Cambiar icono del botón
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    }
    
    // Evento para el botón del menú
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    // Evento para cerrar menú al hacer clic en overlay
    overlay.addEventListener('click', function() {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Evento para cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Cerrar menú al presionar Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Ajustar el selector de idiomas en móvil
    function adjustLanguageSelector() {
        const languageSwitcher = document.querySelector('.language-switcher');
        const navLinksContainer = document.querySelector('.nav-links');
        
        if (!languageSwitcher || !navLinksContainer) return;
        
        // En móvil, mover el selector de idiomas dentro del menú desplegable
        if (window.innerWidth <= 768) {
            // Si no está ya en nav-links, moverlo
            if (!navLinksContainer.contains(languageSwitcher)) {
                const clone = languageSwitcher.cloneNode(true);
                clone.id = 'mobile-language-switcher';
                navLinksContainer.appendChild(clone);
                
                // Inicializar el clon
                initMobileLanguageSwitcher(clone);
            }
        } else {
            // En desktop, asegurarse de que está en su lugar original
            const mobileSwitcher = document.getElementById('mobile-language-switcher');
            if (mobileSwitcher) {
                mobileSwitcher.remove();
            }
        }
    }
    
    // Inicializar el clon del selector de idiomas
    function initMobileLanguageSwitcher(clone) {
        const currentDisplay = clone.querySelector('.current-language');
        const dropdown = clone.querySelector('.language-dropdown');
        
        if (currentDisplay && dropdown) {
            currentDisplay.addEventListener('click', function(e) {
                e.stopPropagation();
                dropdown.classList.toggle('show');
            });
            
            // Cerrar dropdown al hacer clic fuera
            document.addEventListener('click', function(e) {
                if (!clone.contains(e.target)) {
                    dropdown.classList.remove('show');
                }
            });
        }
    }
    
    // Ajustar al cambiar tamaño de ventana
    window.addEventListener('resize', adjustLanguageSelector);
    
    // Ajustar inicialmente
    adjustLanguageSelector();
}

// Llamar a la función en la inicialización
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
});