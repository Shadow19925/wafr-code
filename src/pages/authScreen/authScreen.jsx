// here the user will recvice comformation code sent to his phone by SMS or whatsApp
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import { useNavigate } from "react-router";
export default function AuthScreen({ onAuth }) {
  const { i18n } = useTranslation();
  const inputRefs = useRef([]);
  const [values, setValues] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
  });
  const navigator = useNavigate();

  const handleChange = (e, idx) => {
    const { name, value } = e.target;
    if (!/^\d*$/.test(value)) return; // Only allow digits
    if (value.length > 1) return; // Prevent more than one character
    setValues((prev) => ({ ...prev, [name]: value }));

    // Auto focus next input if current is filled
    if (value.length === 1 && inputRefs.current[idx + 1]) {
      inputRefs.current[idx + 1].focus();
    }
  };

  const allFilled = Object.values(values).every((v) => v.trim());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (allFilled) {
      const code = `${values.code1}${values.code2}${values.code3}${values.code4}`;
      console.log("Submitted code:", code);
      //  if (onAuth) onAuth(code);  here you can verify the code with backend
      // Simulate successful verification
      navigator("/dashboard", { replace: true });
    }
  };
  const handleKeyDown = (e, idx) => {
    if (
      e.key === "Backspace" &&
      values[`code${idx + 1}`] === "" &&
      inputRefs.current[idx - 1]
    ) {
      inputRefs.current[idx - 1].focus();
    }
  };
  return (
    <div className="auth-screen">
      <h2>{i18n.t("auth.enterConfirmationCode")}</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center gap-2 mb-4">
          {["code1", "code2", "code3", "code4"].map((name, idx) => (
            <input
              key={name}
              ref={(el) => (inputRefs.current[idx] = el)}
              type="text"
              name={name}
              maxLength={1}
              required
              autoFocus={idx === 0}
              placeholder="*"
              value={values[name]}
              inputMode="numeric"
              pattern="\d*"
              onChange={(e) => handleChange(e, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
            />
          ))}
        </div>
        <button type="submit" disabled={!allFilled}>
          {i18n.t("auth.verify")}
        </button>
      </form>
      <div className="resend-code">
        <button type="button" onClick={() => console.log("Resend code")}>
          {i18n.t("auth.re-sendCode")}
        </button>
      </div>
      <div className="resend-code">
        <button
          type="button"
          onClick={() => navigator("/home", { replace: true })}
        >
          {i18n.t("auth.cancel")}
        </button>
      </div>
    </div>
  );
}
