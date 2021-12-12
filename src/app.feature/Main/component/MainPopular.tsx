import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import API from 'app.modules/api';
import GoodsCard from 'app.component/GoodsCard/GoodsCard';
import GridGoods from 'app.component/Grid/GridGoods';
import useIntersectionObserver from 'app.modules/util/useIntersectionObserver';
import { API_ITEMS } from 'app.modules/api/constant';

const MainPopular = () => {
  const lastPostRef = useRef();
  const currentPage = useRef(0);

  const [goods, setGoods]: any = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  const requestGoods = async () => {
    try {
      setIsLoading(true);
      const res = await API.GET(
        `${API_ITEMS}?size=30&from=${currentPage?.current}`,
      );
      if (!res) throw 'err';
      setHasNextPage(res.data.length > 0);
      setGoods([...goods, ...res?.data]);
      currentPage.current += 30;
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useIntersectionObserver({
    root: null,
    target: lastPostRef,
    enabled: hasNextPage,
    onIntersect: requestGoods,
  });

  return (
    <StyledWrapper>
      <div className="popular-title">인기 상품</div>
      <div className="popular-filter-wrap">
        <div className="popular-filter">
          <span>인기순</span>
          <svg
            className="caret"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            preserveAspectRatio="xMidYMid meet"
          >
            <path fill="#BDBDBD" d="M0 2l4 4 4-4z"></path>
          </svg>
          <div className="filter-popup-wrap">
            <div className="popular-filter-popup">
              <div className={`filter-item ${false}`}>판매순</div>
              <div className={`filter-item ${true}`}>인기순</div>
              <div className={`filter-item ${false}`}>많은 리뷰순</div>
              <div className={`filter-item ${false}`}>유저사진 많은순</div>
              <div className={`filter-item ${false}`}>높은가격순</div>
              <div className={`filter-item ${false}`}>낮은가격순</div>
              <div className={`filter-item ${false}`}>최신순</div>
            </div>
          </div>
        </div>
      </div>
      <GridGoods>
        {goods?.map((item: any, idx: number) => (
          <GoodsCard key={idx} goods={item} href={item?.id} />
        ))}
        <div
          //@ts-ignore
          ref={lastPostRef}
        />
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
    position: relative;

    .popular-filter {
      color: #424242;
      font-size: 13px;
      cursor: pointer;

      svg {
        margin-left: 5px;
      }

      &:hover {
        span {
          opacity: 0.5;
        }
        .filter-popup-wrap {
          visibility: visible;
          opacity: 1;
          transform: none;
        }
      }
    }

    .filter-popup-wrap {
      top: 11px;
      right: 0;
      position: absolute;
      z-index: 5;
      visibility: hidden;
      padding-top: 15px;
      transition: all 200ms;
      opacity: 0;
      transform: translateY(-10px);

      .popular-filter-popup {
        background-color: #fff;
        box-shadow: 0 -1px 16px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        white-space: nowrap;
        overflow: hidden;

        .filter-item {
          width: 200px;
          padding: 15px;
          font-size: 15px;
          cursor: pointer;
          z-index: 2;

          &:hover {
            background-color: #effbff;
          }

          &.true {
            color: #35c5f0;
          }
        }

        &:hover {
          visibility: visible;
          opacity: 1;
        }

        &:after {
          content: '';
          position: absolute;
          display: block;
          border-width: 0 9px 9px;
          border-style: solid;
          border-color: transparent transparent #fff;
          transform: translateX(-50%);
          top: 6px;
          right: 10px;
        }
      }
    }
  }
`;
