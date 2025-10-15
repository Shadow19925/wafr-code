export default function CouponDetails({ StoreName, discount, storeIcon }) {
  return (
    <div className="coupon-details-items">
      <div className="small-logo">
        <img src={storeIcon} alt={StoreName} />
        <h5>{StoreName}</h5>
      </div>

      <div className="discount-info">
        <span className="value">{discount}</span>
        <p>Discount</p>
      </div>
    </div>
  );
}
