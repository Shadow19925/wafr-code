import ImageDivider from "./imageDivider.jsx";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SendAndArchiveOutlinedIcon from "@mui/icons-material/SendAndArchiveOutlined";
import GetOffer from "../featuers/GetOffer.jsx";

import { createContext, useContext, useState } from "react";

const StoreItemContext = createContext();
export default function StoreItem({ children, ...props }) {
  const [showGetOffer, setShowGetOffer] = useState(false);
  return (
    <StoreItemContext.Provider value={{ ...props, setShowGetOffer }}>
      <div className="store-card">{children}</div>
      {showGetOffer && (
        <GetOffer
          offerId={props.id}
          isopen={showGetOffer}
          closeModal={() => setShowGetOffer(false)}
        />
      )}
    </StoreItemContext.Provider>
  );
}
//  image component
function Image() {
  const { imageUrl, name } = useContext(StoreItemContext);
  return (
    <div className="store-card-image">
      <img src={imageUrl} alt={name} className="store-image" />
      <ImageDivider />
    </div>
  );
}

function Title() {
  const { name } = useContext(StoreItemContext);
  return <h3 className="store-card-store-name">{name}</h3>;
}

function Description() {
  const { description } = useContext(StoreItemContext);
  return <p className="store-card-store-description">{description}</p>;
}

function Reactions() {
  const {
    likes,
    isBookmarked,
    isLiked,
    isLoggedIn,
    offerNumber,
    comingSoonDate,
  } = useContext(StoreItemContext);
  const [isLikedState, setIsLikedState] = useState(isLiked);
  const [isBookmarkedState, setIsBookmarkedState] = useState(isBookmarked);

  const toggleLike = () => {
    setIsLikedState((prev) => !prev);
    // Here you can also add logic to save the like state to a server or local storage
  };
  const toggleBookmark = () => {
    setIsBookmarkedState((prev) => !prev);
    // Here you can also add logic to save the bookmark state to a server or local storage
  };
  return (
    <div className="store-card-reactions">
      {comingSoonDate && <div> Coming Soon: {comingSoonDate}</div>}
      {offerNumber > 0 && <div> available offers: {offerNumber}</div>}
      <div>
        <FavoriteIcon
          onClick={isLoggedIn ? toggleLike : null}
          sx={{ color: isLikedState || offerNumber > 0 ? "red" : "gray" }}
        />
        {likes} Likes
      </div>
      <div>
        {isBookmarked && (
          <BookmarkIcon
            onClick={isLoggedIn ? toggleBookmark : null}
            sx={{ color: isBookmarkedState ? "orange" : "gray" }}
          />
        )}
      </div>
    </div>
  );
}

function OfferBadge() {
  const { setShowGetOffer } = useContext(StoreItemContext);
  return (
    <div className="offer-badge">
      <button onClick={() => setShowGetOffer(true)} variant="contained">
        Get Offer <SendAndArchiveOutlinedIcon sx={{ marginLeft: "8px" }} />
      </button>
    </div>
  );
}

function AvailableOffers() {
  const { offerNumber } = useContext(StoreItemContext);
  return <div> available offers: {offerNumber}</div>;
}

StoreItem.Image = Image;
StoreItem.Title = Title;
StoreItem.Description = Description;
StoreItem.Reactions = Reactions;
StoreItem.OfferBadge = OfferBadge;
StoreItem.AvailableOffers = AvailableOffers;
