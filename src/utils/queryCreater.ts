import { SearchState } from '../types';

export const queryCreater = ({ search, from, to, category }: SearchState) => {
  let url = `published=1`;
  if (search) {
    url += `&keyword=${search}`;
  }

  if (from) {
    url += `&payment_from=${from}`;
  }

  if (to) {
    url += `&payment_to=${to}`;
  }

  if (category) {
    url += `&catalogues=${category}`;
  }
  return url;
};
