import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignLayout = () => {
  return (
    <StyledWrapper>
      <div className="home">
        <Link to="/">
          <svg
            width="88"
            height="31"
            viewBox="0 0 88 31"
            preserveAspectRatio="xMidYMid meet"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                fill="#35C5F0"
                d="M23.131 0H5.03C2.424 0 0 2.411 0 5v20c0 2.59 2.424 5 5.029 5h20.114c2.603 0 5.028-2.41 5.028-5V5c0-2.589-2.425-5-5.028-5H23.13z"
              ></path>
              <path
                fill="#FFF"
                d="M22.114 15.615a1.99 1.99 0 0 1-1.996-1.984 1.99 1.99 0 0 1 1.996-1.985 1.99 1.99 0 0 1 1.996 1.985 1.99 1.99 0 0 1-1.996 1.984zm-1.488 5.213H9.123v-7.574l5.752-3.988 3.297 2.285a4.397 4.397 0 0 0-.52 2.08 4.44 4.44 0 0 0 2.974 4.183v3.014zm1.488-11.635c-.507 0-.995.086-1.449.24l-4.769-3.306a1.791 1.791 0 0 0-2.042 0l-7.14 4.95a1.771 1.771 0 0 0-.764 1.456v9.676c0 .98.8 1.775 1.785 1.775h14.28a1.78 1.78 0 0 0 1.785-1.775v-4.47a4.438 4.438 0 0 0 2.776-4.108c0-2.45-1.997-4.438-4.462-4.438z"
              ></path>
              <g fill="#000">
                <path d="M46.634 22.257h-3.442V19.15c0-.558-.454-1.01-1.015-1.01-.56 0-1.015.452-1.015 1.01v3.107h-3.441c-.561 0-1.016.453-1.016 1.01 0 .558.455 1.01 1.016 1.01h8.913c.56 0 1.015-.452 1.015-1.01 0-.557-.454-1.01-1.015-1.01M39.847 11.118c0-3.193 1.46-3.67 2.33-3.67.87 0 2.33.477 2.33 3.67v.251c0 3.193-1.46 3.67-2.33 3.67-.87 0-2.33-.477-2.33-3.67v-.251zm2.33 5.94c2.69 0 4.361-2.18 4.361-5.69v-.25c0-3.51-1.67-5.69-4.36-5.69-2.69 0-4.362 2.18-4.362 5.69v.251c0 3.51 1.671 5.689 4.361 5.689zM60.037 11.95H49.154c-.56 0-1.015.451-1.015 1.009 0 .558.454 1.01 1.015 1.01h10.883c.561 0 1.016-.452 1.016-1.01s-.455-1.01-1.016-1.01M58.951 22.723c-4.946 1.278-6.604.551-7.088.18-.316-.244-.457-.562-.457-1.033v-.602h7.17c.561 0 1.016-.452 1.016-1.01v-3.53c0-.558-.455-1.01-1.016-1.01H50.39c-.56 0-1.015.452-1.015 1.01 0 .557.454 1.009 1.015 1.009h7.171v1.512H50.39c-.56 0-1.015.452-1.015 1.01v1.61c0 1.094.43 2.004 1.246 2.63.836.643 2.053.965 3.642.965 1.434 0 3.17-.262 5.199-.786.543-.14.869-.692.727-1.231a1.016 1.016 0 0 0-1.238-.724M50.904 10.2h7.558c.56 0 1.015-.452 1.015-1.01 0-.557-.455-1.01-1.015-1.01h-6.543V5.768c0-.558-.454-1.01-1.015-1.01-.561 0-1.015.452-1.015 1.01V9.19c0 .558.454 1.01 1.015 1.01M86.923 5.096c-.56 0-1.015.452-1.015 1.01v8.146c0 .558.454 1.01 1.015 1.01.561 0 1.015-.452 1.015-1.01V6.106c0-.558-.454-1.01-1.015-1.01M81.798 13.986a1.016 1.016 0 0 0 1.3.6c.526-.19.799-.768.607-1.292-.032-.09-.697-1.863-2.358-3.125l2.58-2.853c.267-.296.335-.722.172-1.086a1.016 1.016 0 0 0-.928-.598h-6.326c-.56 0-1.015.452-1.015 1.01 0 .557.455 1.009 1.015 1.009h4.048L79.03 9.71a.176.176 0 0 0-.007.01l-2.933 3.242a1.006 1.006 0 0 0 .077 1.426 1.016 1.016 0 0 0 1.434-.076l2.383-2.636c1.261.887 1.8 2.275 1.814 2.309M85.338 23.19h-4.903a.569.569 0 0 1-.57-.565v-1.357h6.043v1.357a.568.568 0 0 1-.57.566m1.585-6.512c-.56 0-1.015.452-1.015 1.01v1.56h-6.043v-1.56c0-.558-.455-1.01-1.016-1.01-.56 0-1.015.452-1.015 1.01v4.936a2.596 2.596 0 0 0 2.6 2.585h4.904c1.434 0 2.6-1.16 2.6-2.585v-4.936c0-.558-.454-1.01-1.015-1.01M66.393 7.448c1.548 0 1.626 2.944 1.626 3.534 0 .59-.078 3.535-1.626 3.535-1.547 0-1.625-2.945-1.625-3.535 0-.59.078-3.534 1.625-3.534m0 9.088c1.23 0 2.256-.649 2.89-1.826.502-.933.767-2.222.767-3.728 0-1.506-.265-2.794-.767-3.727-.634-1.177-1.66-1.826-2.89-1.826-1.23 0-2.255.649-2.89 1.826-.5.933-.766 2.221-.766 3.727 0 1.506.265 2.795.767 3.728.634 1.177 1.66 1.826 2.89 1.826"></path>
                <path d="M72.64 5.096c-.56 0-1.016.452-1.016 1.01v12.358c-1.345.417-4.016.784-7.251.784h-1.546c-.56 0-1.015.452-1.015 1.01 0 .557.454 1.009 1.015 1.009h1.546c1.846 0 5.04-.161 7.251-.708v3.362c0 .558.455 1.01 1.016 1.01.56 0 1.015-.452 1.015-1.01V6.106c0-.558-.454-1.01-1.015-1.01"></path>
              </g>
            </g>
          </svg>
        </Link>
      </div>
      <div className="sign-box">
        <div className="title">회원가입</div>
        <div className="third-party-sign">
          <div className="sign-desc">SNS 계정으로 간편 로그인</div>
          <div className="sign-icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              preserveAspectRatio="xMidYMid meet"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#3B5998"
                  d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z"
                ></path>
                <path
                  fill="#FFF"
                  d="M25.77 35V24h3.384v-3.385h-3.385v-2.538c-.012-.756.08-1.285 1.693-1.692h1.692V13h-3.385c-3.25 0-4.52 1.84-4.23 5.077v2.538H19V24h2.538v11h4.231z"
                ></path>
              </g>
            </svg>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              preserveAspectRatio="xMidYMid meet"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#FFEB00"
                  d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z"
                ></path>
                <path
                  fill="#3C2929"
                  d="M24 11.277c8.284 0 15 5.306 15 11.85 0 6.545-6.716 11.85-15 11.85-.92 0-1.822-.066-2.697-.191l-6.081 4.105a.43.43 0 0 1-.674-.476l1.414-5.282C11.777 31.031 9 27.335 9 23.127c0-6.544 6.716-11.85 15-11.85zm6.22 8.407c-.416 0-.718.297-.718.707v5.939c0 .41.289.686.718.686.41 0 .718-.295.718-.686v-1.932l.515-.526 1.885 2.57c.277.374.426.54.691.568.037.003.075.005.112.005.154 0 .66-.04.716-.563.038-.293-.137-.52-.348-.796l-2.043-2.675 1.727-1.743.176-.196c.234-.26.353-.39.353-.587.009-.422-.34-.652-.687-.661-.274 0-.457.15-.57.262l-2.528 2.634v-2.3c0-.422-.288-.706-.717-.706zm-9.364 0c-.56 0-.918.432-1.067.837l-2.083 5.517a.84.84 0 0 0-.065.315c0 .372.31.663.706.663.359 0 .578-.162.69-.51l.321-.97h2.999l.313.982c.111.335.34.498.7.498.367 0 .655-.273.655-.62 0-.056-.017-.196-.081-.369l-2.019-5.508c-.187-.53-.577-.835-1.069-.835zm-2.92.064h-4.452c-.417 0-.642.337-.642.654 0 .3.168.652.642.652h1.51v5.21c0 .464.274.752.716.752.443 0 .718-.288.718-.751v-5.21h1.508c.474 0 .643-.352.643-.653 0-.317-.225-.654-.643-.654zm7.554-.064c-.442 0-.717.287-.717.75v5.707c0 .497.28.794.75.794h2.674c.434 0 .677-.321.686-.627a.642.642 0 0 0-.17-.479c-.122-.13-.3-.2-.516-.2h-1.99v-5.195c0-.463-.274-.75-.717-.75zm-4.628 1.306l.008.01 1.083 3.265h-2.192L20.842 21a.015.015 0 0 1 .028 0z"
                ></path>
              </g>
            </svg>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              preserveAspectRatio="xMidYMid meet"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#00C63B"
                  d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z"
                ></path>
                <path
                  fill="#FFF"
                  d="M21 25.231V34h-7V15h7l6 8.769V15h7v19h-7l-6-8.769z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <form className="sign-form">
          <div className="email-box input-box">
            <label htmlFor="email">이메일</label>
            <div className="email-input-wrap">
              <input
                className="input email"
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
        <div className="login-button">
          이미 아이디가 있으신가요? <Link to="/login">로그인</Link>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default SignLayout;

const StyledWrapper = styled.div`
  padding-top: 40px;
  margin: 0 auto;
  height: 100vh;
  width: calc(100% - 30px);

  .home {
    cursor: pointer;
  }

  .sign-box {
    padding: 60px 0;
    margin: 0 auto;
    width: 360px;

    .title {
      font-size: 20px;
      font-weight: bold;
      color: #424242;
      margin-bottom: 20px;
      width: 100%;
    }

    .third-party-sign {
      margin: 30px 0;
      font-size: 12px;
      color: rgb(117, 117, 117);

      .sign-desc {
        text-align: center;
        margin-bottom: 15px;
      }

      .sign-icon {
        text-align: center;
        padding-bottom: 30px;
        border-bottom: 1px solid rgb(237, 237, 237);

        svg {
          cursor: pointer;
          margin: 0 10px;
        }
      }
    }

    .sign-form {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 500px;

      .input-box {
        position: relative;
        margin-bottom: 30px;

        label {
          display: block;
          left: 0;
          font-size: 15px;
          font-weight: bold;
          color: rgb(41, 41, 41);
          word-break: keep-all;
          margin-bottom: 12px;
        }

        .input {
          padding: 0 15px;
          appearance: none;
          border: 1px solid #dbdbdb;
          height: 40px;
          border-radius: 4px;
          width: 100%;

          &.email {
            width: 170px;
          }
        }

        .email-input-wrap {
          display: flex;
          align-items: center;

          span {
            display: block;
            color: #dbdbdb;
            padding: 0 5px;
          }
        }
      }

      select {
        width: 170px;
        height: 40px;
        border: 1px solid #dbdbdb;
        border-radius: 4px;
      }

      .sign-button {
        cursor: pointer;
        appearance: none;
        border: 0;
        margin: 30px 0;
        height: 50px;
        background-color: rgb(53, 197, 240);
        border-radius: 4px;
        color: #fff;
        font-size: 17px;
      }
    }

    .login-button {
      text-align: center;
      color: rgb(66, 66, 66);
      font-size: 15px;

      a {
        color: rgb(66, 66, 66);
        cursor: pointer;
        text-decoration: underline;
        padding-left: 10px;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;