import React from 'react';
import styled from 'styled-components';

interface styledProps {
  width: number;
  height: number;
  unit: string;
}

const StyledWrapper = styled.button<styledProps>`
  appearance: none;
  border: 0;
  font-size: 17px;
  line-height: 26px;
  background-color: #35c5f0;
  border-color: #35c5f0;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  width: ${(props) => props.width + props.unit};
  height: ${(props) => props.height + props.unit};
`;

interface props {
  width?: number;
  height?: number;
  unit?: string;
  children?: any;
}

const BlueButton = ({
  width = 300,
  height = 52,
  unit = 'px',
  children,
}: props) => {
  return (
    <StyledWrapper width={width} height={height} unit={unit}>
      {children}
    </StyledWrapper>
  );
};

export default BlueButton;
