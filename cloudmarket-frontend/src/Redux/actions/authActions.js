import axios from 'axios'
import { SET_JWT, SET_USER_DETAILS } from '../actionCreators/authCreators';
import jwt_decode from "jwt-decode";

const setJwt = (data) => ({
    type: SET_JWT,
    data
})

const setUserDetails = (data) => ({
    type: SET_USER_DETAILS,
    data
})

// const getDecodedJwt = (jwt) =>{

// const token = "YOUR_JWT_TOKEN_STRING";

// try {
//   const decoded = jwt_decode(token);
//   console.log(decoded);
//   // decoded contains your userObj payload data
// } catch (error) {
//   console.error("Invalid token", error);
// }
// }
export const registerUser = ({formData, navigate}) => {
    const body = {
        name : formData?.name,
        email: formData?.email,
        password: formData?.newPassword,
        zipcode: formData?.zipcode,
        addressOne: formData?.address1,
        addressTwo: formData?.address2,
        phoneno: parseInt(formData?.phoneno)
    }
    return async (dispatch) => {
        try {
            const res = await axios.post('http://localhost:5000/auth/register',body)
            console.log('res',res)
            if(res){
                dispatch(setUserDetails(res?.data?.user))
                navigate('/login')
            }
        } catch (error) {
            console.log("error", error);
        }
    };
};

export const loginUser = ({loginDetails,navigate}) => {
    return async (dispatch) => {
        try {
            const res = await axios.post('http://localhost:5000/auth/login', loginDetails)
            console.log('res',res);
            
            if (res) {
                dispatch(setJwt(res?.data?.token))
                if(res){
                    localStorage.setItem('token', res?.data?.token)
                    dispatch(setUserDetails(res?.data?.user))
                    navigate('/checkout')
                }

                // decode jwt
            }
        } catch (error) {
            console.log("error", error);
            alert('User is invalid')
        }
    }
}