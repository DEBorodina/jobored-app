import { SearchState } from "../types";

const queryCreater = (searchValues: SearchState) => {
    let url = `published=1`;
    if(searchValues.search) {
        url += `&keyword=${searchValues.search}`;
      }

      if(searchValues.from) {
        url += `&payment_from=${searchValues.from}`;
      }

      if(searchValues.to) {
        url += `&payment_to=${searchValues.to}`;
      }

      if(searchValues.category) {
        url += `&catalogues=${searchValues.category}`;
      }
    return url;
}

export default queryCreater;