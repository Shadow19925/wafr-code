import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function GetOffer({ offerId = "1", closeModal, isopen }) {
  const close = () => closeModal(false);

  // Mock data - will be replaced with real API call later
  const mockOfferData = {
    title: "Amazing Electronics Deal",
    description:
      "Get incredible discounts on the latest electronics and gadgets!",
    discount: "50% OFF",
    validUntil: "December 31, 2024",
    terms:
      "Valid for new customers only. Cannot be combined with other offers.",
    couponCode: "SAVE50NOW",
  };

  if (!isopen) return null;

  return (
    <div className="get-offer-page">
      <div className="get-offer-container">
        <CloseIcon onClick={close} className="close-icon" />

        <div className="offer-content">
          <h1>Get Offer</h1>
          <h2>{mockOfferData.title}</h2>
          <p className="offer-description">{mockOfferData.description}</p>
          <div className="offer-details">
            <div className="offer-info">
              <p>
                <strong>Discount:</strong> {mockOfferData.discount}
              </p>
              <p>
                <strong>Valid Until:</strong> {mockOfferData.validUntil}
              </p>
            </div>
            <div className="offer-share-options">
              <ul>
                <li>
                  {" "}
                  <p>Get the Coupon in SMS</p>{" "}
                  <SendIcon
                    sx={{
                      color: "primary.main",
                      "&:hover": { color: "secondary.main" },
                    }}
                  />
                </li>
                <li>
                  {" "}
                  <p>Apply the Coupon on the store</p>{" "}
                  <OpenInNewIcon
                    sx={{
                      color: "primary.main",
                      "&:hover": { color: "secondary.main" },
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetOffer;
