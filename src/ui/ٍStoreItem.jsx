// import ImageDivider from "./imageDivider.jsx";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import SendAndArchiveOutlinedIcon from "@mui/icons-material/SendAndArchiveOutlined";
// import GetOffer from "../featuers/GetOffer.jsx";
// import CloseIcon from "@mui/icons-material/Close";

// import { useState } from "react";

// export default function StoreItem({
//   imageUrl,
//   name,
//   description,
//   likes,
//   isBookmarked,
//   offerNumber,
//   isOffer = false,
// }) {
//   const [showGetOffer, setShowGetOffer] = useState(false);
//   return (
//     <div className="store-card">
//       <div className="store-card-image">
//         <img src={imageUrl} alt="Store" className="store-image" />
//         <ImageDivider />
//       </div>
//       <div>
//         <h3 className="store-card-store-name">{name}</h3>

//         <p className="store-card-store-description">{description}</p>
//         <div className="store-card-reactions">
//           {!isOffer && <div> available offers: {offerNumber}</div>}
//           <div>
//             <FavoriteIcon sx={{ color: likes > 0 ? "red" : "gray" }} />
//             {likes} Likes
//           </div>
//           {isOffer && (
//             <div>
//               {isBookmarked ? (
//                 <BookmarkIcon sx={{ color: "orange" }} />
//               ) : (
//                 <BookmarkBorderIcon sx={{ color: "gray" }} />
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//       {isOffer && (
//         <div className="offer-badge">
//           <button
//             onClick={() => setShowGetOffer(true)}
//             variant="contained"
//             color="primary"
//           >
//             Get Offer <SendAndArchiveOutlinedIcon sx={{ marginLeft: "8px" }} />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
