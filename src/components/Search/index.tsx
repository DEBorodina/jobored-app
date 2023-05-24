import {Input} from '@mantine/core';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Service from '../../service';
import { searchSlice } from '../../store/reducers/SearchSlice';
import { VacancySlice } from '../../store/reducers/VacancySlice';
import Loader from '../Loader';
import Pagination from '../Pagination';
import SearchIcon from '../svg/SearchIcon';
import VacanciesBlock from '../VacanciesBlock';
import {Button,Container} from './styles'

const Search: React.FC = ()=> {
    const dispatch = useAppDispatch();

    const { setSearchValue } = searchSlice.actions;
    const searchValue = useAppSelector(state => state.searchReducer);

    const { setLoading, setVacancies, setTotal, setPage } = VacancySlice.actions;
    const isLoading = useAppSelector(state => state.vacancyReducer.loading);
    const total = useAppSelector(state => state.vacancyReducer.total);
    const page = useAppSelector(state => state.vacancyReducer.page);

    const fetchVacancies = async (fetchPage: number) => {
        const data = await Service.getVacanciesByParams(searchValue, fetchPage);
        dispatch(setVacancies(data.vacancies));
        dispatch(setTotal(data.total));
        dispatch(setLoading(false));
    }

    useEffect(() => {
        fetchVacancies(0);
    }, [])

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(setSearchValue(e.target.value))
    }

    const handleSubmit = () => {
        dispatch(setPage(0));
        dispatch(setLoading(true));
        fetchVacancies(0);
    }

    const setCurrentPage = (newPage: number) => {
        dispatch(setPage(newPage));
        dispatch(setLoading(true));
        fetchVacancies(newPage);
    }

    return (
        <Container>
             <Input
                value={searchValue.search}
                onChange={handleOnChange}
                icon={<SearchIcon/>}
                placeholder="Введите название вакансии"
                styles={{input: {width: '100%', height: '48px', weight: '500', lineHeight: '20px', borderRadius: '8px'}}}
                rightSection={
                    <Button onClick={handleSubmit} data-elem='search-button'>Поиск</Button>
                }
                data-elem='search-input'
                />
                {isLoading ? <Loader/> : 
                <>
                    <VacanciesBlock/>
                    <Pagination total={total} currentPage={page} setCurrentPage={setCurrentPage}/>
                </>}
        </Container>
    )
}

export default Search;