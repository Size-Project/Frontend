import React from 'react';
import styled from 'styled-components';
import SNSloginBox from 'app.component/third-party/SNSloginBox';

const LoginLayout = () => {
  return (
    <StyledWrapper>
      <div className="login-box">
        <div className="title">오늘의 집</div>
        <form className="login-form">
          <input className="input email" type="email" placeholder="이메일" />
          <input
            className="input password"
            type="password"
            placeholder="비밀번호"
          />
          <button className="login-button">로그인</button>
        </form>
        <div>회원가입</div>
        <SNSloginBox />
      </div>
    </StyledWrapper>
  );
};

export default LoginLayout;

const StyledWrapper = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-box {
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 40px;
    }
    .login-form {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 200px;
      .input {
        appearance: none;
        border: 1px solid #dbdbdb;
        height: 50px;
        border-radius: 4px;
      }

      .login-button {
        appearance: none;
        border: 0;
        margin-top: 20px;
        margin-bottom: 20px;
        height: 52px;
        background-color: rgb(53, 197, 240);
        border-radius: 4px;
      }
    }
  }
`;
