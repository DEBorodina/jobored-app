import { useEffect, useState } from 'react';

import { ERROR_MESSAGES } from '@/constants/errorMessages';
import { useAppSelector } from '@/hooks';
import { FavoritesService } from '@/utils/FavoritesService';

import Empty from '../Empty';
import { VacancyCard } from '../VacancyCard';

export const VacanciesBlock: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const vacancies = useAppSelector((state) => state.vacancyReducer.vacancies);

  const updateFavorites = (key: number) => {
    if (favorites.includes(key)) {
      setFavorites(FavoritesService.deleteFromFavorites(key));
    } else {
      setFavorites(FavoritesService.addToFavorites(key));
    }
  };

  useEffect(() => {
    const favoritesFromLocalStorage = FavoritesService.getFavorites();
    setFavorites(favoritesFromLocalStorage);
  }, []);

  return (
    <>
      {vacancies.length ? (
        vacancies.map((vacancy) => (
          <VacancyCard
            isFavorite={favorites.includes(vacancy.id)}
            updateFavorites={updateFavorites}
            vacancy={vacancy}
            key={vacancy.id}
            main={false}
          />
        ))
      ) : (
        <Empty message={ERROR_MESSAGES.NOTHING_FOUND} />
      )}
    </>
  );
};
