import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function Form({
  initialValues,
  submitLabel,
  onFormSubmit,
  fields,
}) {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const onSubmit = (data) => {
    onFormSubmit(data);
    reset(initialValues);
  };
  return (
    <form
      className={`form  ${currentLanguage === "ar" ? "login-page-Arabic" : ""}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      {fields.map((field) => (
        <>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            id={field.name}
            placeholder={field.placeholder}
            type={field.type}
            key={field.name}
            {...register(field.name, field.inputProps)}
          />
          {errors[field.name] && (
            <span className="error">{errors[field.name].message}</span>
          )}
        </>
      ))}
      <button type="submit">{submitLabel}</button>
    </form>
  );
}
