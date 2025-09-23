import Hero1 from "../../ui/hero1.jsx";
import OurFeatures from "../ourFeatuers/OurFeatuers.jsx";
import Divider from "../../ui/dividerCom.jsx";
import OurPartners from "../../ui/Partners.jsx";
import AppHeader from "../../ui/appHeader.jsx";
import Footer from "../../ui/footer.jsx";

export default function Home() {
  return (
    <div>
      <AppHeader />
      <Hero1 />
      <Divider />
      <OurFeatures />
      <OurPartners />
      <Footer />
    </div>
  );
}
