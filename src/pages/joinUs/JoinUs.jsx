import { Link } from "react-router";
import Form from "../../ui/Form";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

export default function JoinUs() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const handleLogin = (values) => {
    console.log("Login values:", values);
    // Simulate successful login
    navigate("/auth", { replace: true });
  };

  return (
    <div className="register-screen">
      <div className="register-container">
        <h2>{i18n.t("joinUs.title")}</h2>
        <Form
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            address: "",
            city: "",

            username: "",
          }}
          submitLabel={i18n.t("joinUs.submit")}
          onFormSubmit={handleLogin}
          fields={[
            {
              name: "firstName",
              label: i18n.t("joinUs.fields.firstName.label"),
              type: "text",
              placeholder: i18n.t("joinUs.fields.firstName.placeholder"),
              inputProps: {
                required: i18n.t("joinUs.fields.firstName.required"),
              },
            },
            {
              name: "lastName",
              label: i18n.t("joinUs.fields.lastName.label"),
              type: "text",
              placeholder: i18n.t("joinUs.fields.lastName.placeholder"),
              inputProps: {
                required: i18n.t("joinUs.fields.lastName.required"),
              },
            },
            {
              name: "username",
              label: i18n.t("joinUs.fields.username.label"),
              type: "text",
              placeholder: i18n.t("joinUs.fields.username.placeholder"),
              inputProps: {
                required: i18n.t("joinUs.fields.username.required"),
                minLength: {
                  value: 5,
                  message: i18n.t("joinUs.fields.username.minLength"),
                },
                maxLength: {
                  value: 15,
                  message: i18n.t("joinUs.fields.username.maxLength"),
                },
                validate: (value) =>
                  value.trim() !== "" || i18n.t("joinUs.fields.username.empty"),
              },
            },
            {
              name: "email",
              label: i18n.t("joinUs.fields.email.label"),
              type: "email",
              placeholder: i18n.t("joinUs.fields.email.placeholder"),
              inputProps: {
                required: i18n.t("joinUs.fields.email.required"),
                pattern: /^\S+@\S+$/i,
                validate: (value) =>
                  /^\S+@\S+\.\S+$/.test(value) || "Enter a valid email",
              },
            },
            {
              name: "password",
              label: i18n.t("joinUs.fields.password.label"),
              type: "password",
              placeholder: i18n.t("joinUs.fields.password.placeholder"),
              inputProps: {
                required: i18n.t("joinUs.fields.password.required"),
                minLength: {
                  value: 8,
                  message: i18n.t("joinUs.fields.password.minLength"),
                },
                maxLength: {
                  value: 30,
                  message: i18n.t("joinUs.fields.password.maxLength"),
                },
                validate: (value) =>
                  value.trim() !== "" || i18n.t("joinUs.fields.password.empty"),
              },
            },
            {
              name: "confirmPassword",
              label: i18n.t("joinUs.fields.confirmPassword.label"),
              type: "password",
              placeholder: i18n.t("joinUs.fields.confirmPassword.placeholder"),
              inputProps: {
                required: i18n.t("joinUs.fields.confirmPassword.required"),
                validate: (value, allValues) =>
                  value === allValues.password ||
                  i18n.t("joinUs.fields.confirmPassword.match"),
              },
            },
            {
              name: "phoneNumber",
              label: i18n.t("joinUs.fields.phoneNumber.label"),
              type: "tel",
              placeholder: i18n.t("joinUs.fields.phoneNumber.placeholder"),
              inputProps: {
                required: i18n.t("joinUs.fields.phoneNumber.required"),
                validate: (value) =>
                  /^05\d{8}$/.test(value) ||
                  i18n.t("joinUs.fields.phoneNumber.valid"),
              },
            },
            {
              name: "address",
              label: i18n.t("joinUs.fields.address.label"),
              type: "text",
              placeholder: i18n.t("joinUs.fields.address.placeholder"),
              inputProps: {
                required: i18n.t("joinUs.fields.address.required"),
              },
            },
            {
              name: "city",
              label: i18n.t("joinUs.fields.city.label"),
              type: "text",
              placeholder: i18n.t("joinUs.fields.city.placeholder"),
              inputProps: {
                required: true,
              },
            },
          ]}
        />
        <div className="signup-link">
          {i18n.t("joinUs.loginPrompt")}{" "}
          <Link to="/Login">{i18n.t("joinUs.loginLink")}</Link>
        </div>

        <div className="go-back">
          <Link to="/home">{i18n.t("joinUs.goBack")}</Link>
        </div>
      </div>
    </div>
  );
}
