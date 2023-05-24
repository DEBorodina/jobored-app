export type Position = {
    title_rus: string,
    url_rus: string,
    title: string,
    id_parent: number,
    key: number,
}

export type Category = {
    title_rus: string,
    url_rus: string,
    title: string,
    title_trimmed: string,
    key: number,
    positions: Position[],
}

export type Town = {
    title: string,
    id: number,
}

export type Type_of_work = {
    title: string,
    id: number,
}

export interface Vacancy {
    id: number,
    profession: string,
    firm_name: string,

    town: Town,
    type_of_work: Type_of_work,

    payment_to: number,
    payment_from: number,
    payment: number,
    currency: string
}

export interface FullVacancy extends Vacancy {
    vacancyRichText: string
}

export interface SearchState {
    from: number | null,
    to: number | null,
    category: number | null,
    search: string,
}