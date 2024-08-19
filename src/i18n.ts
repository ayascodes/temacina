import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './ProductCompliance/Content/en.json';
import fr from './ProductCompliance/Content/fr.json'
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
     fr:{ translation: fr }

    },
    lng: 'fr', // Default language
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
