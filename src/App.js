import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageMain from './pages/Main';
import PageSign from './pages/Sign';
import PageLogin from './pages/Login';
import PageProduction from './pages/Production';
import PageCategory from './pages/Category';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from 'app.store/constants/actionTypes';
import API from 'app.modules/api';
import { API_USERS_LOGIN, API_USERS } from 'app.modules/api/constant';
import { getCookie } from 'utils/cookie';
import { useDispatch } from 'react-redux';

const App = () => {
  //로그인 여부 확인해서 로그인 창 or 메인 페이지 결정
  const dispatch = useDispatch();

  const loginCheck = async () => {
    const userResponse = await API.GET(API_USERS, {
      Authorization: `Bearer ${getCookie('jwt')}`,
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        email: userResponse.data.email,
        nickname: userResponse.data.nickname,
      },
    });
  };

  useEffect(() => {
    loginCheck();
  }, [getCookie('jwt')]);

  return (
    <>
      <Routes>
        <Route exact path="/category" element={<PageCategory />} />
        <Route exact path="/" element={<PageMain />} />
        <Route exact path="/sign" element={<PageSign />} />
        <Route exact path="/login" element={<PageLogin />} />
        <Route
          exact
          path="/production/:productionId"
          element={<PageProduction />}
        />
      </Routes>
    </>
  );
};

export default App;
