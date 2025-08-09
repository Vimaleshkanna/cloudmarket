import React from "react";
import FormWrapper from "../../FormWrapper";
import FormInput from "../../FormInput";
import Header from "../../Header";

const Register = () => {
  return (
    <>
    <Header/>
    <FormWrapper title="Register">
      <form>
        <FormInput label="Full Name" placeholder="Enter your name" required />
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
        <FormInput label="Zipcode" placeholder="Enter your zipcode" required />
        <FormInput
          label="Address Line 1"
          placeholder="Street, apartment, etc."
          required
        />
        <FormInput label="Address Line 2" placeholder="Area, landmark, etc." />
        <FormInput
          label="Phone Number"
          type="tel"
          placeholder="Enter your phone number"
          required
        />

        {/* Role */}
        <div className="mb-3">
          <label className="form-label fw-medium">Role</label>
          <select className="form-select" required>
            <option value="">Select Role</option>
            <option value="customer">Customer</option>
            <option value="seller">Seller</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3 mb-3">
          Register
        </button>
      </form>
    </FormWrapper>
    </>
  );
}

export default Register