export const GET = 'category/GET';

export const getCategory = (category: any) => ({
  type: GET,
  payload: category,
});
