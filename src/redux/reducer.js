import { LOGIN_SUCCESS, LOGOUT, SESSION_STORAGE_KEY } from './actionTypes';

const initialState = {
  userId: sessionStorage.getItem(SESSION_STORAGE_KEY) || null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            sessionStorage.setItem(SESSION_STORAGE_KEY, action.payload);
            return {
                ...state,
                userId: action.payload,
            };
        case LOGOUT:
            sessionStorage.removeItem(SESSION_STORAGE_KEY);
            return {
                ...state,
                userId: null,
            };
        default:
            return state;
    }
};

export default reducer;