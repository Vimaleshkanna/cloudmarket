import React, { useCallback, useState } from "react";
import FormWrapper from "../../FormWrapper";
import FormInput from "../../FormInput";
import Header from "../../Header";
import { useNavigate } from "react-router";

const Register = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
    zipcode: "",
    address1: "",
    address2: "",
    phoneno: "",
  });
  console.log('props',props);
  const navigate = useNavigate()
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault()
    props?.registerUser({formData, navigate})
  }
  return (
    <>
      <Header />
      <FormWrapper title="Register">
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormInput name="name" value={formData.name} onChange={handleChange} label="Full Name" placeholder="Enter your name" required />
          <FormInput
            label="Email address"
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormInput
            label="New Password"
            type="password"
            placeholder="Enter your new password"
            required
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
          />
          <FormInput
            label="Confirm Password"
            type="password"
            placeholder="Enter your confirm password"
            required
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <FormInput name="zipcode" label="Zipcode" placeholder="Enter your zipcode" required value={formData.zipcode} onChange={handleChange} />
          <FormInput
            label="Address Line 1"
            placeholder="Street, apartment, etc."
            required
            onChange={handleChange}
            name="address1"
            value={formData.address1}
          />
          <FormInput
            onChange={handleChange}
            name="address2"
            value={formData.address2}
            label="Address Line 2"
            placeholder="Area, landmark, etc." />
          <FormInput
            label="Phone Number"
            type="tel"
            placeholder="Enter your phone number"
            required
            value={formData.phoneno}
            onChange={handleChange}
            name="phoneno"
          />

          <button type="submit" className="btn btn-primary w-100 mt-3 mb-3">
            Register
          </button>
        </form>
      </FormWrapper>
    </>
  );
}

export default Register