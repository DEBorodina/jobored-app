import { SalaryInputType } from "../../components/NumberSelector/types";
import { Vacancy } from "../../types";

export interface SetValuePayload {
    type: SalaryInputType,
    value: number | null,
}

export type LoadingType = {
    loading: boolean,
    vacancies: Vacancy[],
    total: number,
    page: number,
}