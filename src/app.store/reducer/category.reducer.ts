import { GET } from '../action/category.action';
import { categoryImgArr } from '../../app.feature/Category/common/categoryImgArr';

const category = (state = [], action: any) => {
  switch (action.type) {
    case GET:
      console.log(action?.payload);
      action?.payload.map((item: any, idx: number) => {
        item.image = categoryImgArr[idx] ?? categoryImgArr[0];
        return item;
      });
      return action?.payload;
    default:
      return state;
  }
};

export default category;
