import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Service from '../../service';
import { searchSlice } from '../../store/reducers/SearchSlice';
import { VacancySlice } from '../../store/reducers/VacancySlice';
import CategorySelector from '../CategorySelector';
import NumberSelector from '../NumberSelector';
import CrossIcon from '../svg/CrossIcon';
import { ApplyButton,ClearButton, ClearText, Container, FiltersHeader, FilterSubTitle, Header } from './styles';


const Filter: React.FC = () => {
    const dispatch = useAppDispatch();

    const { clearFilters } = searchSlice.actions;

    const { setLoading, setVacancies, setTotal, setPage } = VacancySlice.actions;
    const searchValue = useAppSelector(state => state.searchReducer);
    const page = useAppSelector(state => state.vacancyReducer.page);

    const fetchVacancies = async () => {
        const data = await Service.getVacanciesByParams(searchValue, page);
        dispatch(setVacancies(data.vacancies));
        dispatch(setTotal(data.total));
        dispatch(setLoading(false));
    }

    const handleSubmit = () => {
        dispatch(setLoading(true));
        dispatch(setPage(0));
        fetchVacancies();
    }

    const handleClear = () => {
        dispatch(clearFilters());
    }

    return (
        <Container>
            <FiltersHeader>
                <Header>Фильтры</Header>
                <ClearButton onClick={handleClear}>
                    <ClearText>Сбросить все</ClearText>
                    <CrossIcon/>
                </ClearButton>                
            </FiltersHeader>
            <FilterSubTitle>Отрасль</FilterSubTitle>
            <CategorySelector/>
            <FilterSubTitle>Оклад</FilterSubTitle>
            <NumberSelector type={'from'}/>
            <NumberSelector type={'to'}/>
            <ApplyButton onClick={handleSubmit} data-elem='search-button'>Применить</ApplyButton>
        </Container>
      );
}

export default Filter;