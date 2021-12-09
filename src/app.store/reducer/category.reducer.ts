import { GET } from '../action/category.action';

const category = (state = [], action: any) => {
  switch (action.type) {
    case GET:
      return action?.payload;
    default:
      return state;
  }
};

export default category;
