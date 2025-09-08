import { useTranslation } from "react-i18next";

export default function Subscription() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <div className={`subscribation ${isArabic ? "subscribation-Arabic" : ""}`}>
      <div className="">
        <div className="subscription-title">
          {i18n.t("subscriptionPage.title")}
        </div>
        <div className="subscription-message">
          {i18n.t("subscriptionPage.welcomeMessage")}
        </div>
      </div>
    </div>
  );
}
