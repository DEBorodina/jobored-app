import { Route, Routes } from 'react-router-dom';

import { ROUTE_NAMES } from '@/constants/routesNames';
import { FavoritesPage } from '@/pages/FavoritesPage';
import { SearchVacanciesPage } from '@/pages/SearchVacanciesPage';
import { VacancyPage } from '@/pages/VacancyPage';

const { SEARCH_VACANCIES, VACANCY, FAVORITES } = ROUTE_NAMES;

export const Router = () => (
  <Routes>
    <Route path={SEARCH_VACANCIES} element={<SearchVacanciesPage />} />
    <Route path={`${VACANCY}:id`} element={<VacancyPage />} />
    <Route path={FAVORITES} element={<FavoritesPage />} />
  </Routes>
);
