import { useTranslation } from "react-i18next";
export default function FeatureItem({ image, title, description }) {
  const { i18n } = useTranslation();
  const language = i18n.language;
  return (
    <div className={`feature ${language === "ar" ? "features-Arabic" : "ltr"}`}>
      <img src={image} alt={title} />
      <div className="feature-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
