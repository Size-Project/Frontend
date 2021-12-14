import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from 'app.store/constants/actionTypes';

const initialState = {
  email: '',
  nickname: '',
};

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_SUCCESS:
      return {
        email: action.payload.email,
        nickname: action.payload.nickname,
      };
    case LOGIN_FAILURE:
      return state;
    case LOGOUT_REQUEST:
      return state;
    case LOGOUT_SUCCESS:
      return initialState;
    case LOGOUT_FAILURE:
      return state;
    default:
      return state;
  }
};

export default user;
