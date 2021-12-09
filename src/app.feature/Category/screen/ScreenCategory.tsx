import styled from 'styled-components';
import { useEffect, useState } from 'react';
import API from '../../../app.modules/api';
import { useSelector } from 'react-redux';

const ScreenCategory = ({ categoryId }: any) => {
  const [selected, setSelected]: any = useState(null);
  const [subShow, setSubShow]: any = useState(null);

  const categories = useSelector((state: any) => state.category);

  useEffect(() => {
    setSelected(categories.find((item: any) => String(item.id) === categoryId));
    setSubShow(selected?.subCategories);
  }, [categories]);

  console.log(subShow);

  return (
    <StyledWrapper>
      <div className="category-list-wrap">
        <div className="list-title">{selected?.name}</div>
        {selected &&
          selected?.subCategories.map((item: any, idx: number) => {
            return (
              <div key={idx} className="list-item-wrap">
                <div className="list-item">
                  <div>{item.name}</div>
                  {item?.subCategories && (
                    <div>
                      <svg
                        className="icon"
                        width="12"
                        height="12"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path d="M6.07 7.56l4.39-4.55.87.87-5.25 5.45L.67 3.9 1.53 3z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
      <div className="category-goods-wrap"></div>
    </StyledWrapper>
  );
};

export default ScreenCategory;

const StyledWrapper = styled.div`
  max-width: 1136px;
  display: flex;
  margin: 90px 40px;

  .category-list-wrap {
    width: 160px;

    .list-title {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 27px;
    }

    .list-item-wrap {
      .list-item {
        height: 23px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        margin-bottom: 10px;
        font-size: 13px;
        transition: opacity 100ms;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;
