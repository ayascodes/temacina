import React from 'react';
import { useTranslation } from 'react-i18next';
import './ProductCompliance.css';

const ProductCompliance = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div id="product-compliance-container">
      <div id="Head_of_the_page">
      <h1>{t('productCompliance.title')}</h1>
      <h2>{t('productCompliance.platform')}</h2>
      <p>{t('productCompliance.date')}</p>
      <p><strong>{t('productCompliance.pr_language')}</strong></p>
      <p>{t('productCompliance.language')}</p>
      <p>{t('productCompliance.welcome')}</p>
      </div>
      <section>
        <h2>{t('productCompliance.compliance_and_requirements.title')}</h2>
        <p>{t('productCompliance.compliance_and_requirements.description')}</p>
        <p>{t('productCompliance.compliance_and_requirements.evaluation')}</p>
        <p>{t('productCompliance.compliance_and_requirements.backoffice')}</p>
        <p>{t('productCompliance.compliance_and_requirements.details')}</p>
      </section>

      <section>
        <p>{t('productCompliance.non_compliance_consequences.description')}</p>
        <p>{t('productCompliance.non_compliance_consequences.text')}</p>
        <ul>
          {t('productCompliance.non_compliance_consequences.sanctions', { returnObjects: true }).map((sanction, index) => (
            <li key={index}>{sanction}</li>
          ))}
        </ul>
      </section>

      <section>
        <p>{t('productCompliance.communication_with_buyers.description')}</p>
        <ul>
          {t('productCompliance.communication_with_buyers.requirements', { returnObjects: true }).map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </section>

      <section>
        <p>{t('productCompliance.platform_commitment.description')}</p>
      </section>

      <section>
        <h2>{t('productCompliance.compliance_responsibilities.title')}</h2>
        <p>{t('productCompliance.compliance_responsibilities.description')}</p>
        <ul>
          {t('productCompliance.compliance_responsibilities.participants', { returnObjects: true }).map((participant, index) => (
            <li key={index}>{participant}</li>
          ))}
        </ul>
      </section>

      <section>
        <p>{t('productCompliance.platform_product_compliance.description')}</p>
      </section>

      <section>
        <p>{t('productCompliance.seller_responsibilities_for_product_compliance.description')}</p>
      </section>

      <section>
        <p>{t('productCompliance.product_and_service_qualifications.description')}</p>
      </section>

      <section>
        <p>{t('productCompliance.documentation_requirements.description')}</p>
      </section>

      <section>
        <p>{t('productCompliance.platform_policies_and_regulations.description')}</p>
      </section>

      <section>
        <p>{t('productCompliance.consequences_of_non_compliance.description')}</p>
      </section>

      <button className="button" onClick={() => changeLanguage('en')}>English</button>
      <button className="button" onClick={() => changeLanguage('fr')}>Français</button>
    </div>
  );
};

export default ProductCompliance;
