import React, { useCallback, useState } from "react";
import FormWrapper from "../../FormWrapper";
import FormInput from "../../FormInput";
import Header from "../../Header";
import { validateEmail } from "../../../utils/validations";
import { useNavigate } from "react-router";

export default function Login(props) {
  console.log('props in login', props);
  
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' })
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate()
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setLoginDetails((prev) => ({ ...prev, [name]: value }));
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        setEmailError("Invalid email format");
      } else {
        setEmailError("");
      }
    }

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    props?.loginUser({loginDetails, navigate})
  }
  return (
    <>
      <Header />
      <FormWrapper title="Login">
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormInput
            label="Email address"
            type="email"
            placeholder="Enter your email"
            required
            value={loginDetails?.email}
            name="email"
            onChange={handleChange}
          />
          {emailError && (
            <div className="d-flex text-danger">{emailError}</div>
          )}

          <FormInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            required
            value={loginDetails?.password}
            name='password'
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary w-100 mt-3 mb-3">
            Login
          </button>
        </form>
      </FormWrapper>
    </>
  );
}
