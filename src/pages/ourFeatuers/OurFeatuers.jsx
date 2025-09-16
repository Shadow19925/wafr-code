import Fe1 from "../../assets/images/fe-image-1.png";
import Fe2 from "../../assets/images/fe-image-2.png";
import Fe3 from "../../assets/images/fe-image-3.png";
import Fe4 from "../../assets/images/fe-image-4.png";
import Fe5 from "../../assets/images/fe-image-5.png";
import { useTranslation } from "react-i18next";
import FeatureItem from "../../ui/featuerItem.jsx";

const features = [
  {
    image: Fe1,
    title: "ourFeatures.feature1.title",
    description: "ourFeatures.feature1.description",
  },
  {
    image: Fe2,
    title: "ourFeatures.feature2.title",
    description: "ourFeatures.feature2.description",
  },
  {
    image: Fe3,
    title: "ourFeatures.feature3.title",
    description: "ourFeatures.feature3.description",
  },
  {
    image: Fe4,
    title: "ourFeatures.feature4.title",
    description: "ourFeatures.feature4.description",
  },
];

export default function OurFeatures() {
  const { i18n } = useTranslation();
  return (
    <div className="our-features">
      <h2>{i18n.t("ourFeatures.title")}</h2>
      <div className="features-list">
        <div className="feature-image-5">
          <img src={Fe5} alt="Feature 5" />
        </div>
        <div className="">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              image={feature.image}
              title={i18n.t(feature.title)}
              description={i18n.t(feature.description)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
