import { Input } from '@mantine/core';
import { useEffect } from 'react';

import { Service } from '@/api';
import { ICONS } from '@/constants/icons';
import { TEXT } from '@/constants/text';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { searchSlice } from '@/store/reducers/SearchSlice';
import { VacancySlice } from '@/store/reducers/VacancySlice';

import { Loader } from '../Loader';
import { Pagination } from '../Pagination';
import { VacanciesBlock } from '../VacanciesBlock';
import { Button, Container } from './styles';

export const Search = () => {
  const dispatch = useAppDispatch();

  const { setSearchValue } = searchSlice.actions;
  const { setLoading, setVacancies, setTotal, setPage } = VacancySlice.actions;

  const searchValue = useAppSelector((state) => state.searchReducer);
  const isLoading = useAppSelector((state) => state.vacancyReducer.loading);
  const total = useAppSelector((state) => state.vacancyReducer.total);
  const page = useAppSelector((state) => state.vacancyReducer.page);

  const fetchVacancies = async (fetchPage: number) => {
    const { vacancies, total } = await Service.getVacanciesByParams(
      searchValue,
      fetchPage
    );
    dispatch(setVacancies(vacancies));
    dispatch(setTotal(total));
    dispatch(setLoading(false));
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchValue(e.target.value));
  };

  const handleSubmit = () => {
    dispatch(setPage(0));
    dispatch(setLoading(true));
    fetchVacancies(0);
  };

  const setCurrentPage = (newPage: number) => {
    dispatch(setPage(newPage));
    dispatch(setLoading(true));
    fetchVacancies(newPage);
  };

  useEffect(() => {
    fetchVacancies(0);
  }, []);
  return (
    <Container>
      <Input
        value={searchValue.search}
        onChange={handleOnChange}
        icon={ICONS.SEARCH}
        placeholder={TEXT.ADD_VACANCY_NAME}
        styles={{
          input: {
            width: '100%',
            height: '48px',
            weight: '500',
            lineHeight: '20px',
            borderRadius: '8px',
          },
        }}
        rightSection={
          <Button onClick={handleSubmit} data-elem="search-button">
            {TEXT.SEARCH_BUTTON}
          </Button>
        }
        data-elem="search-input"
      />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <VacanciesBlock />
          <Pagination
            total={total}
            currentPage={page}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </Container>
  );
};
