import { useTranslation } from "react-i18next";
import AppHeader from "../../ui/appHeader";
import Footer from "../../ui/footer";

export default function TermsOfService() {
  const { i18n, t } = useTranslation();
  const language = i18n.language;
  const isArabic = language === "ar";

  const sections = t("tarmOfService.sections", { returnObjects: true });
  const subscriptions = t("tarmOfService.subscriptions", {
    returnObjects: true,
  });
  const coupons = t("tarmOfService.coupons", { returnObjects: true });

  return (
    <>
      <AppHeader />
      <div
        className={`terms-of-service-page ${
          isArabic ? "terms-of-service-page-Arabic rtl" : ""
        }`}
      >
        <div className="terms-of-service-container">
          <h1>{t("tarmOfService.title")}</h1>
          <p>{t("tarmOfService.introduction")}</p>

          {/* General Sections */}
          <ol className="terms-list">
            {Object.values(sections).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>

          {/* Subscriptions */}
          <h2>{subscriptions.title}</h2>
          <p>{subscriptions.subscriptionTerms}</p>
          <ol className="terms-list">
            {Object.entries(subscriptions)
              .filter(([key]) => key !== "title" && key !== "subscriptionTerms")
              .map(([key, value], index) => (
                <li key={index}>{value}</li>
              ))}
          </ol>

          {/* Coupons */}
          <h2>{coupons.title}</h2>
          <p>{coupons.couponTerms}</p>

          {/* Other Sections */}
          <p>{t("tarmOfService.dataUsageAgreement")}</p>
          <p>{t("tarmOfService.intellectualProperty")}</p>
          <p>{t("tarmOfService.contactUs")}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
