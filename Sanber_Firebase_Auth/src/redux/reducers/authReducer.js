const initialState = {
  user: null,
  token: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.email,
        token: action.payload.token,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
}
