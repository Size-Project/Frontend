import React from 'react';
import styled from 'styled-components';
import SNSloginBox from 'app.component/third-party/SNSloginBox';
import BlueButton from 'app.component/Button/blueButton';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .home {
    position: fixed;
    left: 50px;
    top: 50px;
    font-size: 30px;
  }
  .sign-box {
    width: 300px;
    height: 800px;
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 30px;
      margin-bottom: 20px;
      width: 100%;
    }
    .sign-form {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 500px;
      .input-box {
        position: relative;
        label {
          position: absolute;
          left: 0;
          top: -20px;
        }
        .input {
          appearance: none;
          border: 1px solid #dbdbdb;
          height: 50px;
          border-radius: 4px;
          margin-bottom: 50px;
        }
        .input-password,
        .input-password-confirm,
        .input-nickname {
          width: 100%;
        }
      }
    }
  }
`;

const SignLayout = () => {
  return (
    <StyledWrapper>
      <div className="home">오늘의 집</div>
      <div className="sign-box">
        <div className="title">회원가입</div>
        <SNSloginBox />
        <form className="sign-form">
          <div className="email-box input-box">
            <label htmlFor="email">이메일</label>
            <input
              className="input input-email"
              type="email"
              placeholder="이메일"
              id="email"
            />
            <span>@</span>
            <select name="emails" className="emails">
              <option value="naver.com">naver.com</option>
              <option value="daum.net">daum.net</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="gmail.com">gmail.com</option>
              <option value="nate.com">nate.com</option>
            </select>
          </div>
          <div className="password-box input-box">
            <label htmlFor="password">비밀번호</label>
            <input
              className="input input-password"
              type="password"
              placeholder="비밀번호"
              id="password"
            />
          </div>
          <div className="password-confirm-box input-box">
            <label htmlFor="password-confirm">비밀번호 확인</label>
            <input
              className="input input-password-confirm"
              type="password"
              placeholder="비밀번호 확인"
              id="password-confirm"
            />
          </div>
          <div className="nickname-box input-box">
            <label htmlFor="password-confirm">닉네임</label>
            <input
              className="input input-nickname"
              type="text"
              placeholder="닉네임"
              id="nickname"
            />
          </div>
          <div className="button-box">
            <BlueButton>회원가입</BlueButton>
          </div>
        </form>
        <div>
          이미 아이디가 있으신가요? <span>로그인</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default SignLayout;
