import ImageDivider from "./imageDivider.jsx";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
export default function StoreItem({
  imageUrl,
  name,
  description,
  likes,
  isBookmarked,
  offerNumber,
}) {
  return (
    <div className="store-card">
      <div className="store-card-image">
        <img src={imageUrl} alt="Store" className="store-image" />
        <ImageDivider />
      </div>
      <div className="">
        <h3 className="store-card-store-name">{name}</h3>

        <p className="store-card-store-description">{description}</p>
        <div className="store-card-reactions">
          <div> available offers: {offerNumber}</div>
          <div>
            <FavoriteIcon sx={{ color: likes > 0 ? "red" : "gray" }} />
            {likes} Likes
          </div>
          <div>
            {isBookmarked ? (
              <BookmarkIcon sx={{ color: "orange" }} />
            ) : (
              <BookmarkBorderIcon sx={{ color: "gray" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
