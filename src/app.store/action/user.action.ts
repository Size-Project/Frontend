import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from 'app.store/constants/actionTypes';
import API from 'app.modules/api';
import { API_USERS_LOGIN, API_USERS } from 'app.modules/api/constant';

interface loginForm {
  email: string;
  password: string;
}

export const login = (payload: loginForm) => async (dispatch: any) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const cookieResponse = await API.POST({
      url: API_USERS_LOGIN,
      data: {
        email: payload.email,
        password: payload.password,
      },
    });
    const userResponse = await API.GET(API_USERS, {
      Authorization: `Bearer ${cookieResponse.data}`,
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {},
    });
  } catch (e) {
    alert('로그인에 실패하였습니다');
    dispatch({
      type: LOGIN_FAILURE,
    });
  }
};

// export const logout = () => (dispatch, getState) => {
//   try {
//   } catch (e) {
//     alert('로그아웃에 실패하였습니다');
//     dispatch({
//       type: LOGOUT_FAILURE,
//     });
//   }
// };
