import storeImage from "../../assets/images/namshi-store.png";
import AppHeader from "../../ui/appHeader.jsx";
import Footer from "../../ui/footer.jsx";

import StoreItem2 from "../../ui/ٍStoreItemV2.jsx";

export default function Stores() {
  return (
    <>
      <AppHeader />
      <div className="stores-page">
        <h1 className="stores-title">Our Stores</h1>
        <div className="stores-container">
          {Array.from({ length: 8 }).map((_, index) => (
            <StoreItem2
              imageUrl={storeImage}
              likes={100}
              description="Your one-stop shop for all things tech!"
              offerNumber={10}
            >
              <StoreItem2.Image />
              <StoreItem2.Title />
              <StoreItem2.Description />
              <StoreItem2.Reactions />
            </StoreItem2>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
