import React from "react";
import FormWrapper from "../../FormWrapper";
import FormInput from "../../FormInput";
import Header from "../../Header";

export default function Login() {
  return (
    <>
    <Header/>
    <FormWrapper title="Login">
      <form>
        <FormInput
          label="Email address"
          type="email"
          placeholder="Enter your email"
          required
        />
        <FormInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          required
        />
        <button type="submit" className="btn btn-primary w-100 mt-3 mb-3">
          Login
        </button>
      </form>
    </FormWrapper>
    </>
  );
}
