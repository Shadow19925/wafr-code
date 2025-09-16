import { useTranslation } from "react-i18next";
export default function SubscriptionCard({
  subscriptionName,
  pricenow,
  pricebefore,
  features,
  color1,
  color2,
}) {
  const { i18n } = useTranslation();
  return (
    <div className={`subscription-plan-cards `}>
      <div
        className={`subscription-plan-cards-title`}
        style={
          color1 && color2
            ? { background: `linear-gradient(to right, ${color1}, ${color2})` }
            : undefined
        }
      >
        <h3>{subscriptionName}</h3>
      </div>
      <div className="subscription-plan-cards-price">
        <div className="price-before">
          <p>subscription</p>
          <span className="ml-2 text-gray-500 line-through">
            {" "}
            {pricebefore} /month
          </span>
        </div>

        <span className="price-now">
          {pricenow}/{i18n.t("month")}
        </span>
      </div>
      <div className="subscription-plan-divider"></div>
      {features.map((feature, index) => (
        <div key={index} className="subscription-plan-cards-message">
          <h4 className="font-bold">{feature.title}</h4>
          <p>{feature.message}</p>
          {index !== features.length - 1 && (
            <div className="subscription-plan-divider"></div>
          )}
        </div>
      ))}
    </div>
  );
}
