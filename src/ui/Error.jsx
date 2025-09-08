import { useNavigate, useRouteError } from "react-router";

function NotFound() {
  const navigate = useNavigate();
  const errorMessage = useRouteError();
  console.error("Error:", errorMessage);

  return (
    <div className="error">
      <h1>Something went wrong 😢</h1>
      <p>{errorMessage?.data || errorMessage?.message || "Unknown error"}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
