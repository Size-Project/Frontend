import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.button`
  appearance: none;
  border: 0;
  font-size: 17px;
  line-height: 26px;
  background-color: #35c5f0;
  border-color: #35c5f0;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  width: ${props.width};
`;

type prop {
    width: string,
    
}

const blueButton = ({ width: string, height: string, unit: string = "px" }) => {
  return <StyledWrapper width={width} height={height} />;
};

export default blueButton;
