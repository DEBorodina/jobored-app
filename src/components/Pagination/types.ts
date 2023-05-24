export type PaginationProps = {
    total: number,
    currentPage: number,
    setCurrentPage: (newPage: number) => void;
}

export type ButtonProps = {
    active: boolean,
}