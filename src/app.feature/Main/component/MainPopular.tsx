import React from "react";
import styled from "styled-components";
import GoodsCard from "app.component/GoodsCard/GoodsCard";
import GridGoods from "app.component/Grid/GridGoods";

const MainPopular = () => {
  return (
    <StyledWrapper>
      <div className="popular-title">인기 상품</div>
      <div className="popular-filter-wrap">
        <div className="popular-filter">인기순</div>
      </div>
      <GridGoods>
        {Array.from(Array(20).keys()).map((item, idx) => (
          <GoodsCard key={idx} />
        ))}
      </GridGoods>
    </StyledWrapper>
  );
};

export default MainPopular;

const StyledWrapper = styled.div`
  margin: 50px 60px 0;

  .popular-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  .popular-filter-wrap {
    display: flex;
    justify-content: end;
    margin-bottom: 15px;

    .popular-filter {
    }
  }
`;
