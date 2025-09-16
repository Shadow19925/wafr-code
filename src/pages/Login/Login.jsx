import { Link } from "react-router";
import Form from "../../ui/Form";
import { useNavigate } from "react-router";
export default function Login() {
  const navigate = useNavigate();
  const handleLogin = (values) => {
    console.log("Login values:", values);
    // Simulate successful login
    navigate("/auth", { replace: true });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <Form
          initialValues={{ email: "", password: "" }}
          submitLabel="Login"
          onSubmit={handleLogin}
          fields={[
            { name: "email", label: "Email", type: "email" },
            { name: "password", label: "Password", type: "password" },
          ]}
        />
        <div className="signup-link">
          Don't have an account? <Link to="/register">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
