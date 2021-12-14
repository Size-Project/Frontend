import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import API from 'app.modules/api';
import { API_CATEGORIES } from 'app.modules/api/constant';
import GridGoods from '../../../app.component/Grid/GridGoods';
import GoodsCard from '../../../app.component/GoodsCard/GoodsCard';

const CategoryGoods = ({
  selected,
  subSelected,
  setSubSelected,
  handleChangeParams,
}: any) => {
  const [goods, setGoods]: any = useState(null);

  const requestGoods = async () => {
    try {
      const res = await API.GET(
        `${API_CATEGORIES}/${subSelected ? subSelected?.id : selected?.id}`,
      );
      if (!res) throw 'err';
      setGoods(res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    requestGoods();
  }, [selected?.id, subSelected]);

  return (
    <StyledWrapper>
      <div className="category-goods-title">
        <span onClick={() => handleChangeParams(selected?.id, null)}>
          {selected?.name}
        </span>
        {subSelected && (
          <>
            {` > `}
            <span>{subSelected?.name}</span>
          </>
        )}
      </div>
      <GridGoods>
        {goods?.map((item: any, idx: number) => (
          <GoodsCard key={idx} goods={item} href={item?.id} />
        ))}
      </GridGoods>
    </StyledWrapper>
  );
};

export default CategoryGoods;

const StyledWrapper = styled.div`
  width: 100%;
  padding: 0 7.5px 0 30px;

  .category-goods-title {
    margin-bottom: 20px;
    font-size: 15px;

    span {
      cursor: pointer;
    }
  }

  .grid-goods-wrap {
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
  }
`;
