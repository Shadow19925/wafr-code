import Hero1 from "./homePageParts/hero/hero1.jsx";
import OurFeatures from "./homePageParts/featuers/OurFeatuers.jsx";
import Divider from "./homePageParts/divider/dividerCom.jsx";
import OurPartners from "./homePageParts/Partners/Partners.jsx";

export default function Home() {
  return (
    <div className="home">
      <Hero1 />
      <Divider />
      <OurFeatures />

      <OurPartners />
    </div>
  );
}
