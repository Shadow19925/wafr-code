import { useTranslation } from "react-i18next";
import SubscriptionCard from "../../ui/subscriptionCard";
export default function Subscription() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <div className={`subscribation ${isArabic ? "subscribation-Arabic" : ""}`}>
      <div className="">
        <div className="subscription-title">
          <h3>{i18n.t("subscriptionPage.title")}</h3>
        </div>
        <div className="subscription-message">
          {i18n.t("subscriptionPage.welcomeMessage")}
        </div>
      </div>

      <div className="subscription-cards-container">
        <SubscriptionCard
          subscriptionName="basic"
          pricenow="9.99"
          pricebefore="19.99"
          features={[
            {
              title: i18n.t("features.feature1.title"),
              message: i18n.t("features.feature1.description"),
            },
            {
              title: i18n.t("features.feature2.title"),
              message: i18n.t("features.feature2.description"),
            },
            {
              title: i18n.t("features.feature3.title"),
              message: i18n.t("features.feature3.description"),
            },
            {
              title: i18n.t("features.feature4.title"),
              message: i18n.t("features.feature4.description"),
            },
          ]}
        />
        <SubscriptionCard
          subscriptionName="basic"
          pricenow="9.99"
          pricebefore="19.99"
          color1={"#11998e"}
          color2={"#38ef7d"}
          features={[
            {
              title: i18n.t("features.feature1.title"),
              message: i18n.t("features.feature1.description"),
            },
            {
              title: i18n.t("features.feature2.title"),
              message: i18n.t("features.feature2.description"),
            },
            {
              title: i18n.t("features.feature3.title"),
              message: i18n.t("features.feature3.description"),
            },
            {
              title: i18n.t("features.feature4.title"),
              message: i18n.t("features.feature4.description"),
            },
          ]}
        />
      </div>
    </div>
  );
}
