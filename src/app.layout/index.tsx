import React from "react";
import styled from "styled-components";

const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <header>헤더</header>
      <body>{children}</body>
    </>
  );
};

export default AppLayout;

const StyledWrapper = styled.div``;
