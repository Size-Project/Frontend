import { LOGIN_REQUEST, LOGIN_FAILURE } from 'app.store/constants/actionTypes';
import API from 'app.modules/api';
import { API_USERS_LOGIN, API_USERS } from 'app.modules/api/constant';
import { setCookie } from 'utils/cookie';

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
    setCookie('jwt', cookieResponse.data);

    window.location.reload();
  } catch (e) {
    alert('로그인에 실패하였습니다');
    dispatch({
      type: LOGIN_FAILURE,
    });
  }
};
