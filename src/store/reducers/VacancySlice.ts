import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Vacancy } from "../../types";
import { LoadingType } from "./types";

const initialState: LoadingType = {
    loading: true,
    vacancies: [],
    total: 0,
    page: 0,
}

export const VacancySlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setVacancies: (state, action: PayloadAction<Vacancy[]>) => {
            state.vacancies = action.payload;
        },
        setTotal: (state, action: PayloadAction<number>) => {
            state.total = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    }
})

export default VacancySlice.reducer;