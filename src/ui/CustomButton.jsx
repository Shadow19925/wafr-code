export default function Button({
  children,
  size = "medium",
  variation = "primary",
  className = "",
  onClick,
}) {
  return (
    <button
      className={`btn btn-${size} btn-${variation} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
