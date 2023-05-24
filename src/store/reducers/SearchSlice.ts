import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SalaryInputType } from '@/components/NumberSelector/types';
import { SearchState } from '@/types';

import { SetValuePayload } from './types';

const initialState: SearchState = {
  from: null,
  to: null,
  category: null,
  search: '',
};

const STEP = 1000;

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<SalaryInputType>) {
      if (action.payload === 'from') {
        state.from = state.from ? state.from + STEP : STEP;
        if (state.to && state.from > state.to) {
          state.from = state.to;
        }
      } else {
        state.to = state.to ? state.to + STEP : STEP;
        if (state.from && state.to < state.from) {
          state.to = state.from;
        }
      }
    },

    decrement(state, action: PayloadAction<SalaryInputType>) {
      if (action.payload === 'from') {
        state.from = state.from ? state.from - STEP : 0;
        state.from = state.from < 0 ? 0 : state.from;
        if (state.to && state.from > state.to) {
          state.from = state.to;
        }
      } else {
        state.to = state.to ? state.to - STEP : 0;
        state.to = state.to < 0 ? 0 : state.to;
        if (state.from && state.to < state.from) {
          state.to = state.from;
        }
      }
    },

    setValue(
      state,
      { payload: { type, value } }: PayloadAction<SetValuePayload>
    ) {
      state[type] = value;
      if (state.to && state.from) {
        if (state.to < state.from) {
          state[type] = type === 'to' ? state.from : state.to;
        }
      }
    },

    setSearchValue(state, { payload }: PayloadAction<string>) {
      state.search = payload;
    },

    setCategoryValue(state, { payload }: PayloadAction<number | null>) {
      state.category = payload;
    },

    clearFilters(state) {
      state.from = null;
      state.to = null;
      state.category = null;
    },
  },
});

export default searchSlice.reducer;
