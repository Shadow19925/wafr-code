export default function CardItem({ title, value, logoURL }) {
  return (
    <div className="card-item">
      <div className="small-logo">
        <img src={logoURL} alt={title} />
      </div>
      <div className="info">
        <h5 className="title">{title}</h5>
        <p className="value">{value}</p>
      </div>
    </div>
  );
}
