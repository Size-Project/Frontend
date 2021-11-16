import React from "react";
import styled from "styled-components";

const Button: React.FC<any> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button``;
