import React from "react";
import { Link } from "react-router";

const FormWrapper = ({ title, children }) => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
      <div className="card shadow p-4" style={{ width: "450px" }}>
        <h3 className="text-center mb-4">{title}</h3>
        {children}
        {title === "Register" ? <small>
            If you have an account <Link to='/login'>Login</Link>
        </small> : <small>Don't you have an account <Link to='/register'>Register</Link></small>}
      </div>
    </div>
  );
}
export default FormWrapper