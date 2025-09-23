import { Link } from "react-router";
import Form from "../../ui/Form";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
export default function Login() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const handleLogin = (values) => {
    console.log("Login values:", values);
    // Simulate successful login
    navigate("/auth", { replace: true });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>{i18n.t("login.title")}</h2>
        <Form
          initialValues={{ email: "", password: "" }}
          submitLabel={i18n.t("login.submit")}
          onFormSubmit={handleLogin}
          fields={[
            {
              name: "email",
              label: i18n.t("login.fields.email.label"),
              type: "email",
              placeholder: i18n.t("login.fields.email.placeholder"),
              inputProps: {
                required: true,
                pattern: /^\S+@\S+$/i,
                validate: (value) =>
                  /^\S+@\S+\.\S+$/.test(value) || "Enter a valid email",
              },
            },
            {
              name: "password",
              label: i18n.t("login.fields.password.label"),
              type: "password",
              placeholder: i18n.t("login.fields.password.placeholder"),
              inputProps: {
                required: i18n.t("login.fields.password.required"),
                minLength: {
                  value: 8,
                  message: i18n.t("login.fields.password.minLength"),
                },
                maxLength: {
                  value: 30,
                  message: i18n.t("login.fields.password.maxLength"),
                },
                validate: (value) =>
                  value.trim() !== "" || i18n.t("login.fields.password.empty"),
              },
            },
          ]}
        />
        <div className="signup-link">
          {i18n.t("login.signupPrompt")}{" "}
          <Link to="/register">{i18n.t("login.signupLink")}</Link>
        </div>
        <div className="forgot-password">
          <Link to="/forgot-password">{i18n.t("login.forgotPassword")}</Link>
        </div>
        <div className="go-back">
          <Link to="/home">{i18n.t("login.goBack")}</Link>
        </div>
      </div>
    </div>
  );
}
