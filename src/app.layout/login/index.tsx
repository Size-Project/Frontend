import React from "react";
import styled from "styled-components";

const LoginLayout = () => {
    return (
        <StyledWrapper>
            <div className="login-box">
                <div className="title">오늘의 집</div>
                <form>
                    <input type="email" placeholder="이메일" />
                    <input type="password" placeholder="비밀번호" />
                    <input type="submit" />
                </form>
                <a>회원가입</a>
                <section className="third-party-login">
                    <div>SNS 계정으로 간편 로그인</div>
                    <div></div>
                </section>
            </div>
        </StyledWrapper>
    );
};

export default LoginLayout;

const StyledWrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;
