import { SET_JWT, SET_USER_DETAILS } from "../actionCreators/authCreators";

const initialState = {
    jwt: {},
    userDetails: {}
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_JWT:
            return {
                ...state,
                jwt: action.data,
            };
        case SET_USER_DETAILS:
            return {
                ...state,
                userDetails: action.data,
            };
        default:
            return state;
    }
};
export default authReducer;
