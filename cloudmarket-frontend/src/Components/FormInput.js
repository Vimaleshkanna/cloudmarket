import React from "react";

const FormInput = ({
  label,
  type = "text",
  placeholder,
  required = false,
  ...props
}) => {
  return (
    <div className="mb-3">
      <label className="form-label fw-medium">{label}</label>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        required={required}
        {...props}
      />
    </div>
  );
}
export default FormInput
