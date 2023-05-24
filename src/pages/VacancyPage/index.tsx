import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Empty from '@/components/Empty';
import Loader from '@/components/Loader';
import VacancyCard from '@/components/VacancyCard';
import VacancyDescription from '@/components/VacancyDescription';
import { ERROR_MESSAGES } from '@/constants/errorMessages';
import Service from '@/service';
import { FullVacancy } from '@/types';
import { FavoritesService } from '@/utils/FavoritesService';

import { Container } from './styles';

export const VacancyPage = () => {
  const { id } = useParams();

  const [vacancy, setVacancy] = useState<FullVacancy | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  const fetchVacancy = async () => {
    const data = await Service.getVacancyById(Number(id));

    setVacancy(data);

    const favorites = FavoritesService.getFavorites();
    if (favorites.includes(Number(id))) {
      setIsFavorite(true);
    }

    setIsLoading(false);
  };

  const toggleFavorite = (key: number) => {
    if (isFavorite) {
      FavoritesService.deleteFromFavorites(key);
    } else {
      FavoritesService.addToFavorites(key);
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    fetchVacancy();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : vacancy ? (
        <VacancyCard
          isFavorite={isFavorite}
          updateFavorites={toggleFavorite}
          vacancy={vacancy}
          main={true}
        />
      ) : (
        <Empty message={ERROR_MESSAGES.NO_SUCH_VACANCY} />
      )}
      {vacancy && (
        <VacancyDescription vacancyRichText={vacancy.vacancyRichText} />
      )}
    </Container>
  );
};
