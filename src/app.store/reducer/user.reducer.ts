import { LOGIN, SIGN } from 'app.store/constants/actionTypes';

const initialState = {
  email: '',
  nickname: '',
};

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return '';
    case SIGN:
      return '';
    default:
      return state;
  }
};

export default user;
