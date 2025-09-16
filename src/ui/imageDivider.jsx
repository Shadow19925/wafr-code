function ImageDivider() {
  return (
    <div className="store-card-image-divider">
      <div className="image-divider">
        <div className="dots-container">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ImageDivider;
