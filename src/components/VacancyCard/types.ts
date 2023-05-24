import { Vacancy } from '../../types';

export interface VacancyCardProps {
  updateFavorites: (key: number) => void;
  isFavorite: boolean;
  vacancy: Vacancy;
  main: boolean;
}
