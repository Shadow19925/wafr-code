import { useTranslation } from "react-i18next";
import heroImageAr from "../../../../assets/images/hero-ar.png";
import heroImageEn from "../../../../assets/images/hero-eng.png";

export default function Hero1() {
  const { i18n } = useTranslation();
  const language = i18n.language;

  return (
    <div className="hero">
      <h1 className="hero-title">
        {language === "ar" ? <strong>{i18n.t("hero.mark")}</strong> : null}
        {i18n.t("hero.Unlock Amazing")}
        <strong>{i18n.t("hero.Discounts")}</strong> {i18n.t("hero.Today")}
        {language === "en" ? <strong>{i18n.t("hero.mark")}</strong> : null}
      </h1>
      <p className="hero-description">{i18n.t("heroSubtitle")}</p>
      <img
        className="hero-image"
        src={language === "ar" ? heroImageAr : heroImageEn}
        alt="Hero"
      />
    </div>
  );
}
