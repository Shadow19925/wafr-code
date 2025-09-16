// here the user will recvice comformation code sent to his phone by SMS or whatsApp

import Form from "../../ui/Form";
export default function AuthScreen({ onAuth }) {
  const handleAuth = (values) => {
    console.log("Auth values:", values);
    onAuth(values.code);
  };
  return (
    <div className="auth-screen">
      <h2>Enter Confirmation Code</h2>
      <Form
        initialValues={{ code: "" }}
        submitLabel="Verify"
        onSubmit={handleAuth}
        fields={[{ name: "code", label: "Code", type: "text" }]}
      />
    </div>
  );
}
