export type Language = "en" | "ru" | "kk";

export const translations = {
  // Navigation
  nav: {
    schedule: { en: "Schedule", ru: "Расписание", kk: "Кесте" },
    stay: { en: "Stay", ru: "Проживание", kk: "Тұру" },
    registry: { en: "Registry", ru: "Подарки", kk: "Сыйлықтар" },
    rsvp: { en: "RSVP", ru: "RSVP", kk: "RSVP" },
    faq: { en: "FAQ", ru: "Вопросы", kk: "Сұрақтар" },
  },

  // Hero
  hero: {
    invited: { en: "You're Invited to", ru: "Приглашаем вас на", kk: "Сіздерді шақырамыз" },
    title: { en: "Shokan and Ayazhan Toi", ru: "Той Шокана и Аяжан", kk: "Шоқан мен Аяжан Тойы" },
    date: { en: "August 14, 2026", ru: "14 августа 2026", kk: "14 тамыз 2026" },
    location: { en: "Astana, Kazakhstan", ru: "Астана, Казахстан", kk: "Астана, Қазақстан" },
    viewDetails: { en: "View Details", ru: "Подробнее", kk: "Толығырақ" },
  },

  // Schedule
  schedule: {
    title: { en: "Schedule of Events", ru: "Расписание", kk: "Іс-шаралар кестесі" },
    subtitle: { en: "The Day's Timeline", ru: "Программа дня", kk: "Күн бағдарламасы" },
    arrival: { en: "Arrival & Welcome", ru: "Прибытие и встреча", kk: "Келу және қарсы алу" },
    ceremony: { en: "Ceremony", ru: "Церемония", kk: "Рәсім" },
    dinner: { en: "Dinner", ru: "Ужин", kk: "Кешкі ас" },
    celebration: { en: "Celebration", ru: "Празднование", kk: "Мерекелеу" },
    end: { en: "End", ru: "Завершение", kk: "Аяқталу" },
  },

  // Accommodation
  accommodation: {
    title: { en: "Accommodation", ru: "Проживание", kk: "Тұру" },
    intro: {
      en: "We're planning to arrange special accommodation for our guests!",
      ru: "Мы планируем организовать проживание для наших гостей!",
      kk: "Қонақтарымыз үшін арнайы тұрғын үй дайындап жатырмыз!",
    },
    femaleTitle: { en: "For Our Female Guests", ru: "Для наших гостей-девушек", kk: "Қыз қонақтарымыз үшін" },
    femaleDesc: {
      en: "We're looking into renting a place where our female friends can stay together. It'll be like a little gathering of its own!",
      ru: "Мы подбираем место, где наши подруги смогут остановиться вместе. Это будет как маленькая вечеринка!",
      kk: "Қыз достарымыз бірге тұра алатын орын іздеп жатырмыз. Бұл шағын жиын сияқты болады!",
    },
    aptTitle: { en: "Additional Apartments", ru: "Дополнительные квартиры", kk: "Қосымша пәтерлер" },
    aptDesc: {
      en: "We may also have one or two apartments available for other guests (depending on availability). More details will follow as we finalize the arrangements.",
      ru: "Также у нас могут быть одна-две квартиры для других гостей (в зависимости от наличия). Подробности сообщим позже.",
      kk: "Басқа қонақтар үшін бір-екі пәтер де болуы мүмкін (мүмкіндігіне қарай). Толық ақпаратты кейінірек хабарлаймыз.",
    },
    stayTuned: {
      en: "Stay tuned — we'll share all the specifics soon!",
      ru: "Следите за обновлениями — скоро поделимся подробностями!",
      kk: "Жаңалықтарды қадағалаңыздар — жақында толық ақпарат береміз!",
    },
  },

  // Gift Registry
  registry: {
    title: { en: "Gift Registry", ru: "Подарки", kk: "Сыйлықтар" },
    presence: {
      en: "Your presence is truly the greatest gift we could ask for.",
      ru: "Ваше присутствие — лучший подарок для нас.",
      kk: "Сіздердің қатысуларыңыз — біз үшін ең қымбат сыйлық.",
    },
    description: {
      en: "However, if you wish to honor us with a gift, we've created a small registry with some items we'd love for our new home together. Alternatively, if you prefer to support us as we begin our married life, a contribution to our future would mean so much.",
      ru: "Однако, если вы хотите порадовать нас подарком, мы составили небольшой список вещей для нашего нового дома. Также, если вы предпочитаете поддержать нас в начале совместной жизни, вклад в наше будущее будет очень значим.",
      kk: "Алайда, сыйлық жасағыңыз келсе, жаңа үйіміз үшін керек заттардың тізімін жасадық. Сондай-ақ, отбасылық өміріміздің басында қолдау көрсеткіңіз келсе, болашағымызға қосқан үлесіңіз біз үшін өте маңызды.",
    },
    viewRegistry: { en: "View Our Registry", ru: "Открыть список", kk: "Тізімді ашу" },
    comingSoon: {
      en: "The registry link will be added soon",
      ru: "Ссылка на список будет добавлена скоро",
      kk: "Тізім сілтемесі жақында қосылады",
    },
    alertMessage: {
      en: "Registry link will be added here!",
      ru: "Ссылка на список будет добавлена здесь!",
      kk: "Тізім сілтемесі осында қосылады!",
    },
  },

  // RSVP
  rsvp: {
    title: { en: "RSVP", ru: "RSVP", kk: "RSVP" },
    subtitle: {
      en: "We would be honored by your presence. Please let us know if your plans change.",
      ru: "Мы будем рады вашему присутствию. Пожалуйста, сообщите нам, если ваши планы изменятся.",
      kk: "Қатысуыңызға қуаныштымыз. Жоспарыңыз өзгерсе, бізге хабарлаңыз.",
    },
    yourName: { en: "Your Name", ru: "Ваше имя", kk: "Есіміңіз" },
    fullName: { en: "Full name", ru: "Полное имя", kk: "Толық есім" },
    email: { en: "Email", ru: "Почта", kk: "Пошта" },
    optional: { en: "(optional)", ru: "(необязательно)", kk: "(міндетті емес)" },
    attending: { en: "Will you be attending?", ru: "Вы будете присутствовать?", kk: "Қатысасыз ба?" },
    accepts: { en: "Joyfully accepts", ru: "С радостью приму", kk: "Қуана қабылдаймын" },
    declines: { en: "Regretfully declines", ru: "К сожалению, нет", kk: "Өкінішке орай, жоқ" },
    numGuests: { en: "Number of Guests", ru: "Количество гостей", kk: "Қонақтар саны" },
    guest: { en: "guest", ru: "гость", kk: "қонақ" },
    guests: { en: "guests", ru: "гостей", kk: "қонақ" },
    message: { en: "Message", ru: "Сообщение", kk: "Хабарлама" },
    messagePlaceholder: {
      en: "Dietary restrictions, song requests, or a sweet note...",
      ru: "Диетические ограничения, пожелания по музыке или тёплые слова...",
      kk: "Тағам шектеулері, ән тілектері немесе жылы сөздер...",
    },
    errorGeneric: {
      en: "Something went wrong. Please try again.",
      ru: "Что-то пошло не так. Попробуйте ещё раз.",
      kk: "Бірдеңе дұрыс болмады. Қайталап көріңіз.",
    },
    errorNotConnected: {
      en: "RSVP is not yet connected. Please contact us directly.",
      ru: "RSVP ещё не подключен. Пожалуйста, свяжитесь с нами напрямую.",
      kk: "RSVP әлі қосылмаған. Бізбен тікелей байланысыңыз.",
    },
    sending: { en: "Sending...", ru: "Отправка...", kk: "Жіберілуде..." },
    sendRsvp: { en: "Send RSVP", ru: "Отправить RSVP", kk: "RSVP жіберу" },
    thankYou: { en: "Thank You!", ru: "Спасибо!", kk: "Рахмет!" },
    thankYouMessage: {
      en: "We've received your RSVP. We can't wait to celebrate with you!",
      ru: "Мы получили ваш ответ. С нетерпением ждём встречи!",
      kk: "Жауабыңызды алдық. Сіздермен бірге тойлауды асыға күтеміз!",
    },
  },

  // FAQ
  faq: {
    title: { en: "Questions & Answers", ru: "Вопросы и ответы", kk: "Сұрақтар мен жауаптар" },
    whereQuestion: { en: "Where will the wedding take place?", ru: "Где будет свадьба?", kk: "Той қайда өтеді?" },
    whereAnswer: {
      en: "Dilu Plaza. Korgalzhyn Highway E-126, 6A, Astana, Kazakhstan.",
      ru: "Dilu Plaza. Коргалжинское шоссе Е-126, 6А, Астана, Казахстан.",
      kk: "Dilu Plaza. Қорғалжын тас жолы Е-126, 6А, Астана, Қазақстан.",
    },
    whenQuestion: { en: "What time should I arrive?", ru: "Во сколько нужно прийти?", kk: "Сағат нешеде келу керек?" },
    whenAnswer: {
      en: "Starts at 17:00. Dinner at 18:00, celebration at 19:00. Ends at 23:00. Please arrive at least 30 minutes before the ceremony starts so you have time to settle in.",
      ru: "Начало в 17:00. Ужин в 18:00, празднование в 19:00. Окончание в 23:00. Пожалуйста, приходите хотя бы за 30 минут до начала церемонии.",
      kk: "Басталуы 17:00. Кешкі ас 18:00, мерекелеу 19:00. Аяқталуы 23:00. Рәсім басталғанға дейін кемінде 30 минут бұрын келіңіз.",
    },
    dressQuestion: { en: "What should I wear?", ru: "Какой дресс-код?", kk: "Қандай киім кию керек?" },
    dressAnswer: {
      en: "Classic dress code — smart and elegant. No strict rules, just come looking your best and feeling comfortable!",
      ru: "Классический дресс-код — элегантно и стильно. Строгих правил нет, главное — выглядеть красиво и чувствовать себя комфортно!",
      kk: "Классикалық дресс-код — сәнді және талғампаз. Қатаң ережелер жоқ, ең бастысы — сәнді болыңыз және өзіңізді жайлы сезініңіз!",
    },
    viewOnMap: { en: "View on Map", ru: "Открыть карту", kk: "Картадан көру" },
  },

  // Footer
  footer: {
    cantWait: { en: "We Can't Wait to See You!", ru: "Мы с нетерпением ждём встречи!", kk: "Сіздерді асыға күтеміз!" },
    names: { en: "Shokan & Ayazhan", ru: "Шокан и Аяжан", kk: "Шоқан мен Аяжан" },
    withLove: { en: "With love", ru: "С любовью", kk: "Сүйіспеншілікпен" },
  },

  // Language names for dropdown
  langNames: {
    en: { en: "English", ru: "English", kk: "English" },
    ru: { en: "Русский", ru: "Русский", kk: "Русский" },
    kk: { en: "Қазақша", ru: "Қазақша", kk: "Қазақша" },
  },
} as const;

type TranslationValue = { en: string; ru: string; kk: string };

export function t(value: TranslationValue, lang: Language): string {
  return value[lang];
}
