import { connect } from "react-redux";
import Register from "../../Components/Pages/Register";
import { loginUser, registerUser } from "../actions/authActions";
import Login from "../../Components/Pages/Login";

const mapStateToProps = (state) => ({
  userDetails: state.authReducer.userDetails || {},
  jwt: state.authReducer.jwt || {},
});
const mapDispatchToProps = (dispatch) => ({
  registerUser: ({formData, navigate}) => {
    dispatch(registerUser({formData, navigate}));
  },
  loginUser: ({loginDetails, navigate}) => {
    dispatch(loginUser({loginDetails, navigate}));
  },
});
const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export { RegisterContainer, LoginContainer };
