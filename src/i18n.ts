import i18n from 'i18next';
import { initReactI18next, Translation } from 'react-i18next';
import ProductComplianceEn from './ProductCompliance/Content/en.json';
import ProductCompliancefr from './ProductCompliance/Content/fr.json';
import OurServicesAr from './pages/Our services/Content/ar[1].json'; 
import OurServicesFr from './pages/Our services/Content/fr[1].json';
import OurServicesEn from './pages/Our services/Content/en[1].json'; 


i18n
  .use(initReactI18next)
  .init({
    resources: {
     en: { translation: OurServicesEn },
     fr:{ translation:OurServicesFr },
     ar:{ translation:OurServicesAr}
    },
    lng: 'fr', // Default language
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
