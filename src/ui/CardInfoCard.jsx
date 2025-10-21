export default function CardInfoCard({ title, value, icon, color }) {
  return (
    <div className="card-info-card">
      <div className="icon" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div className="details">
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
}
