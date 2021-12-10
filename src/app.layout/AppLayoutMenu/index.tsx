import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { SubMenuObj } from './LayoutMenuObj';
import CategorySwiper from './CategorySwiper';

const AppLayoutMenu: React.FC<any> = ({
  selected,
  subSelected,
  setSubSelected,
  hover,
}) => {
  const [scroll, setScroll] = useState(true);
  const [subHover, setSubHover] = useState(false);
  const [categoryHover, setCategoryHover] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  });

  return (
    <>
      <StyledWrapper
        hover={hover}
        subHover={subHover}
        categoryHover={categoryHover}
        scroll={scroll}
      >
        <ul className="menu-list-wrap">
          {SubMenuObj[hover ?? selected].map((item: any, idx: number) => (
            <li
              key={idx}
              className={`menu-list ${subSelected === item?.id}`}
              onClick={() => setSubSelected(item?.id)}
              onMouseOver={() => {
                if (item.id === 11) setSubHover(true);
              }}
              onMouseOut={() => setSubHover(false)}
            >
              <a
                href={`${item?.path}${item?.params ?? ''}`}
                onClick={() => setSubSelected(item?.id)}
              >
                {item?.name}
              </a>
            </li>
          ))}
        </ul>
      </StyledWrapper>

      <div
        onMouseOver={() => setCategoryHover(true)}
        onMouseLeave={() => setCategoryHover(false)}
      >
        <CategorySwiper subHover={subHover} />
      </div>
    </>
  );
};

export default AppLayoutMenu;

const StyledWrapper = styled.div<any>`
  ${({ hover, subHover, categoryHover, scroll }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    position: ${hover || categoryHover
      ? 'fixed'
      : scroll
      ? 'absolute'
      : 'fixed'};
    top: ${hover || categoryHover ? '80px' : scroll ? 'unset' : '30px'};
    transition-delay: 500ms;
    transition: top 200ms;
    background-color: #fff;
    z-index: 998;

    &:hover {
      position: fixed !important;
      top: 80px;
    }

    .menu-list-wrap {
      width: 100%;
      display: flex;
      align-items: center;
      height: 100%;
      overflow-x: scroll;
      white-space: nowrap;
      border-bottom: 1px solid #ededed;
      font-size: 15px;
      font-weight: 700;
      padding: 0 40px;

      .menu-list {
        display: flex;
        align-items: center;
        height: 100%;
        cursor: pointer;
        margin: 0 12px;
        transition: color 200ms;

        a {
          color: #424242;
        }

        &.true {
          border-bottom: 2px solid #35c5f0;
          a {
            color: #35c5f0 !important;
          }
        }

        &:hover {
          a {
            color: #35c5f0 !important;
          }
        }
      }
    }

    .menu-list-wrap::-webkit-scrollbar {
      display: none;
    }
  `}
`;
