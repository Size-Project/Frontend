import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin-bottom: 40px;
`;

const SNSloginBox = () => {
  return (
    <StyledWrapper>
      <section className="third-party-login">
        <div>SNS 계정으로 간편 로그인</div>
        <div></div>
      </section>
    </StyledWrapper>
  );
};

export default SNSloginBox;
