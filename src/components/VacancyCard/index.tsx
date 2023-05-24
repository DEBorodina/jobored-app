import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ICONS } from '@/constants/icons';
import { ROUTE_NAMES } from '@/constants/routesNames';
import { salaryFormatter } from '@/utils/salaryFormatter';

import StarIcon from '../StartIcon';
import {
  Container,
  Description,
  Dot,
  Header,
  Info,
  Location,
  LocationText,
  Salary,
  Title,
} from './styles';
import { VacancyCardProps } from './types';

export const VacancyCard: React.FC<VacancyCardProps> = ({
  isFavorite,
  updateFavorites,
  vacancy,
  main,
}) => {
  const navigate = useNavigate();

  const handleOnClickStar = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    updateFavorites(vacancy.id);
  };

  const handleOnClick = () => {
    if (!main) {
      navigate(`${ROUTE_NAMES.VACANCY}${vacancy.id}`);
    }
  };

  return (
    <ThemeProvider theme={{ main }}>
      <Container onClick={handleOnClick} data-elem={`vacancy-${vacancy.id}`}>
        <Header>
          <Title>{vacancy.profession}</Title>
          <button
            onClick={handleOnClickStar}
            data-elem={`vacancy-${vacancy.id}-shortlist-button`}
          >
            <StarIcon isFavorite={isFavorite} />{' '}
          </button>
        </Header>
        <Info>
          <Salary>{salaryFormatter(vacancy)}</Salary>
          <Dot>•</Dot>
          <Description>{vacancy.type_of_work.title}</Description>
        </Info>
        <Location>
          {ICONS.LOCATION}
          <LocationText>{vacancy.town.title}</LocationText>
        </Location>
      </Container>
    </ThemeProvider>
  );
};
