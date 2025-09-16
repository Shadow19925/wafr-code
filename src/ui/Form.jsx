import React, { useState } from "react";

export default function Form({
  fields,
  initialValues = {},
  onSubmit,
  submitLabel = "Submit",
}) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block mb-1">{field.label}</label>
          <input
            type={field.type || "text"}
            name={field.name}
            value={values[field.name] || ""}
            onChange={handleChange}
            className="px-2 py-1 border rounded w-full"
            {...field.inputProps}
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 px-4 py-2 rounded text-white"
      >
        {submitLabel}
      </button>
    </form>
  );
}
