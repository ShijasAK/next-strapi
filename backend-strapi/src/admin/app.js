import AuthLogo from "./extensions/rel8-logo.png";
import MenuLogo from "./extensions/rel8-logo.png";
import favicon from "./extensions/rel8-logo.png";
import mainLogo from './extensions/favicon.png'

const config = {
  locales: [
    "ar",
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],

  head: {
    favicon: mainLogo,
  },
  menu: {
    logo: MenuLogo,
  },
  auth: {
    logo: AuthLogo,
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.workplace": "rel8hr",
      "app.components.LeftMenu.navbrand.title": "Rel8hr Dashboard",
      "Auth.form.welcome.title": "Welcome to Rel8hr",
      "Auth.form.welcome.subtitle": "Login to your account",
      "settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
    ar: {
      "app.components.LeftMenu.navbrand.workplace": "رِيل إِيت",
      "app.components.LeftMenu.navbrand.title": "رِيل إِيت لوحة القيادة",
      "Auth.form.welcome.title": "مرحبا بك في  رِيل إِيت",
      "Auth.form.welcome.subtitle": "تسجيل الدخول أعلى حسابك",
    },
  },
  tutorials: false,
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
