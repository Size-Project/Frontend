import React from 'react';
import styled from 'styled-components';
import BlueButton from 'app.component/Button/blueButton';

const StyledWrapper = styled.div`
  margin-top: 300px;
  display: flex;
  justify-content: space-between;
`;
const ButtonBox = () => {
  return (
    <StyledWrapper>
      <BlueButton width={187} height={55}>
        장바구니
      </BlueButton>
      <BlueButton width={187} height={55}>
        바로가기
      </BlueButton>
    </StyledWrapper>
  );
};

export default ButtonBox;
