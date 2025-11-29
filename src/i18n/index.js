import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationSR from "./locales/sr/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  sr: {
    translation: translationSR,
  },
};

// Get initial language from URL or default to Serbian
const getInitialLanguage = () => {
  const path = window.location.pathname;
  const langFromPath = path.split("/")[1]; // Get the first path segment

  if (langFromPath === "en" || langFromPath === "sr") {
    return langFromPath;
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  debug: false,
  fallbackLng: "sr",
  interpolation: {
    escapeValue: false,
  },
});

// Save language changes to localStorage
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
});

export default i18n;
