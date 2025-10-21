import Filter from "../../ui/Filter";
import StoreItem2 from "../../ui/ٍStoreItemV2";

import storeImage from "../../assets/images/namshi-store.png";

export default function ActiveCoupons() {
  return (
    <>
      <div className="active-coupons">
        <Filter>
          <Filter.Title>Active Coupon</Filter.Title>
          <Filter.Options>
            <Filter.SearchBar
              onSearch={(term) => console.log("Searching for:", term)}
            />
            <Filter.Icon />
          </Filter.Options>
        </Filter>
        <div className="stores-page">
          <div className="stores-container">
            <StoreItem2
              imageUrl={storeImage}
              name="Reefi Store"
              description="Your one-stop shop for all things tech!"
              likes={100}
              isBookmarked={true}
              isOffer={true}
              isLoggedIn={true}
              isLiked={true}
            >
              <StoreItem2.Image />
              <StoreItem2.Title />
              <StoreItem2.Description />
              <StoreItem2.Reactions />

              <StoreItem2.OfferBadge />
            </StoreItem2>
            {Array.from({ length: 8 }).map((_, index) => (
              <StoreItem2
                imageUrl={storeImage}
                name="Reefi Store"
                description="Your one-stop shop for all things tech!"
                likes={100}
                isBookmarked={true}
                isLoggedIn={true}
                isLiked={true}
              >
                <StoreItem2.Image />
                <StoreItem2.Title />
                <StoreItem2.Description />
                <StoreItem2.Reactions />
                <StoreItem2.OfferBadge />
              </StoreItem2>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
