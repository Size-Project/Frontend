import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import API from '../../app.modules/api';
import { useDispatch } from 'react-redux';
import { getCategory } from '../../app.store/action/category.action';

const CategorySwiper: React.FC<any> = ({ subHover }) => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  const requestCategories = async () => {
    try {
      const res = await API.GET('/api/categories');
      setCategories(res?.data?.subCategories);
      dispatch(getCategory(res?.data?.subCategories));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    requestCategories();
  }, []);

  return (
    <StyledWrapper subHover={subHover}>
      <ul className="swiper-menu-category-wrap">
        {categories?.map((item: any, idx) => (
          <li className="menu-category-item" key={idx}>
            <a href={`/category?id=${item.id}`}>
              <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823226017937426.png?gif=1&w=144&h=144&c=c" />{' '}
              <div className="category-item-title">{item?.name}</div>{' '}
            </a>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  );
};

export default CategorySwiper;

const StyledWrapper = styled.div<any>`
  ${({ subHover }) => css`
    width: 100%;
    height: 150px;
    position: fixed;
    top: ${subHover ? '130px' : '-100px'};
    transition-delay: 500ms;
    transition: top 500ms;
    background-color: #fff;
    z-index: 997;

    &:hover {
      top: 130px;
    }

    .swiper-menu-category-wrap {
      background-color: #fff;
      padding: 10px 40px;
      overflow-x: scroll;
      display: flex;
      width: 100%;

      .menu-category-item {
        padding: 10px 5px;
        cursor: pointer;

        img {
          width: 80px;
          height: 80px;
          margin-bottom: 20px;
        }

        .category-item-title {
          text-align: center;
          margin: 0 -10px;
          font-size: 14px;
          font-weight: 700;
          color: #424242;
        }

        &:hover {
          color: #35c5f0;
        }
      }
    }
  `}
`;
