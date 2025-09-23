import StoreItem from "../../ui/ٍStoreItem";
import storeImage from "../../assets/images/namshi-store.png";
import AppHeader from "../../ui/appHeader.jsx";
import Footer from "../../ui/footer.jsx";

export default function Stores() {
  return (
    <>
      <AppHeader />
      <div className="stores-page">
        <h1 className="stores-title">Our Stores</h1>
        <div className="stores-container">
          <StoreItem
            imageUrl={storeImage}
            name="Reefi Store"
            description="Your one-stop shop for all things tech!"
            likes={50}
            isBookmarked={true}
            offerNumber={10}
          />
          <StoreItem
            imageUrl={storeImage}
            name="Reefi Store"
            description="Your one-stop shop for all things tech!"
            likes={50}
            isBookmarked={true}
            offerNumber={10}
          />

          <StoreItem
            imageUrl={storeImage}
            name="Reefi Store"
            description="Your one-stop shop for all things tech!"
            likes={50}
            isBookmarked={false}
            offerNumber={100}
          />
          <StoreItem
            imageUrl={storeImage}
            name="Reefi Store"
            description="Your one-stop shop for all things tech!"
            likes={50}
            isBookmarked={true}
            offerNumber={10}
          />
          <StoreItem
            imageUrl={storeImage}
            name="Reefi Store"
            description="Your one-stop shop for all things tech!"
            likes={50}
            isBookmarked={false}
            offerNumber={10}
          />
          <StoreItem
            imageUrl={storeImage}
            name="Reefi Store"
            description="Your one-stop shop for all things tech!"
            likes={50}
            isBookmarked={true}
            offerNumber={10}
          />
          <StoreItem
            imageUrl={storeImage}
            name="Reefi Store"
            description="Your one-stop shop for all things tech!"
            likes={50}
            isBookmarked={true}
            offerNumber={10}
          />
          <StoreItem
            imageUrl={storeImage}
            name="Reefi Store"
            description="Your one-stop shop for all things tech!"
            likes={50}
            isBookmarked={true}
            offerNumber={10}
          />
          <StoreItem
            imageUrl={storeImage}
            name="Reefi Store"
            description="Your one-stop shop for all things tech!"
            likes={50}
            isBookmarked={true}
            offerNumber={10}
          />
          <StoreItem
            imageUrl={storeImage}
            name="Reefi Store"
            description="Your one-stop shop for all things tech!"
            likes={50}
            isBookmarked={true}
            offerNumber={10}
          />
          <StoreItem
            imageUrl={storeImage}
            name="Reefi Store"
            description="Your one-stop shop for all things tech!"
            likes={50}
            isBookmarked={true}
            offerNumber={10}
          />
          <StoreItem
            imageUrl={storeImage}
            name="Reefi Store"
            description="Your one-stop shop for all things tech!"
            likes={50}
            isBookmarked={true}
            offerNumber={10}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
