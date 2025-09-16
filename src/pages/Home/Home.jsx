import Hero1 from "../../ui/hero1.jsx";
import OurFeatures from "../ourFeatuers/OurFeatuers.jsx";
import Divider from "../../ui/dividerCom.jsx";
import OurPartners from "../../ui/Partners.jsx";

export default function Home() {
  return (
    <div>
      <Hero1 />
      <Divider />
      <OurFeatures />
      <OurPartners />
    </div>
  );
}
