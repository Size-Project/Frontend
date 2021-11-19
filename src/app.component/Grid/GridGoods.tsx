import React from "react";
import styled from "styled-components";

const GridGoods: React.FC<any> = ({ children }) => {
  return <StyledGrid className="grid-goods-wrap">{children}</StyledGrid>;
};

export default GridGoods;

const StyledGrid = styled.div`
  display: grid;
  max-width: 1136px;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 15px;
  row-gap: 30px;
`;
