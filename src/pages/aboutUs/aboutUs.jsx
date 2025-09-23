import { useTranslation } from "react-i18next";

import AppHeader from "../../ui/appHeader.jsx";
import Footer from "../../ui/footer.jsx";
export default function AboutUs() {
  const { i18n } = useTranslation();
  const language = i18n.language;

  return (
    <>
      <AppHeader />
      <div
        className={`about-us-page ${
          language === "ar" ? "about-us-page-Arabic " : ""
        }
        `}
      >
        <div className="about-us-container">
          <h1>{i18n.t("aboutUs.title1")}</h1>
          <p>{i18n.t("aboutUs.description")}</p>
          <h2>{i18n.t("aboutUs.title2")}</h2>
          <p>{i18n.t("aboutUs.mission")}</p>
          <h2>{i18n.t("aboutUs.title3")}</h2>
          <p>{i18n.t("aboutUs.vision")}</p>
          <h2>{i18n.t("aboutUs.title4")}</h2>
          <p>{i18n.t("aboutUs.message")}</p>
          <h2>{i18n.t("aboutUs.title5")}</h2>
          <p>{i18n.t("aboutUs.whyChooseUs")}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
