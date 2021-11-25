import React from 'react';
import styled from 'styled-components';
import MainCategorySwiper from './MainCategorySwiper';

const MainCategory = () => {
  return (
    <StyledWrapper>
      <div className="category-title">카테고리</div>
      <MainCategorySwiper />
    </StyledWrapper>
  );
};

export default MainCategory;

const StyledWrapper = styled.div`
  margin: 50px 60px 0;

  .category-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
  }
`;
