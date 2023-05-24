import { useEffect, useMemo, useState } from 'react';

import { Service } from '@/api';
import { ERROR_MESSAGES } from '@/constants/errorMessages';
import { ROUTE_NAMES } from '@/constants/routesNames';
import { TEXT } from '@/constants/text';
import { Vacancy } from '@/types';
import { FavoritesService } from '@/utils/FavoritesService';

import Empty from '../Empty';
import { Loader } from '../Loader';
import { Pagination } from '../Pagination';
import { VacancyCard } from '../VacancyCard';
import { Button } from './styles';

const VACANCIES_PER_PAGE = 4;

export const FavoriteVacanciesBlock = () => {
  const [favoriteVacancies, setFavoriteVacancies] = useState<Vacancy[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const fetchVacancies = async () => {
    const favoritesFromLocalStorage = FavoritesService.getFavorites();
    const data = await Service.getFavoritesVacancies(favoritesFromLocalStorage);
    setFavoriteVacancies(data);
    setLoading(false);
  };

  const updateFavorites = (key: number) => {
    FavoritesService.deleteFromFavorites(key);
    setFavoriteVacancies(
      favoriteVacancies.filter((vacancy) => vacancy.id !== key)
    );
  };

  const isOnPage = (index: number) => {
    return (
      index >= VACANCIES_PER_PAGE * currentPage &&
      index < VACANCIES_PER_PAGE * (currentPage + 1)
    );
  };

  useEffect(() => {
    fetchVacancies();
  }, []);

  const vacanciesList = useMemo(
    () =>
      favoriteVacancies
        .filter((_, index) => isOnPage(index))
        .map((vacancy) => (
          <VacancyCard
            isFavorite={true}
            updateFavorites={updateFavorites}
            vacancy={vacancy}
            key={vacancy.id}
            main={false}
          />
        )),
    [favoriteVacancies]
  );

  return isLoading ? (
    <Loader />
  ) : favoriteVacancies.length ? (
    <>
      {vacanciesList}
      <Pagination
        total={favoriteVacancies.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Pagination>
    </>
  ) : (
    <>
      <Empty message={ERROR_MESSAGES.NO_VACANCIES} />
      <Button to={ROUTE_NAMES.SEARCH_VACANCIES}>{TEXT.SEARCH}</Button>
    </>
  );
};
