import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ROUTE_NAMES } from '../../constants/routesNames';
import salaryFormater from '../../utils/salaryFormater';
import LocationIcon from '../svg/LocationIcon';
import StarIcon from '../svg/StartIcon';
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

const VacancyCard: React.FC<VacancyCardProps> = ({
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
          <Salary>{salaryFormater(vacancy)}</Salary>
          <Dot>•</Dot>
          <Description>{vacancy.type_of_work.title}</Description>
        </Info>
        <Location>
          <LocationIcon />
          <LocationText>{vacancy.town.title}</LocationText>
        </Location>
      </Container>
    </ThemeProvider>
  );
};

export default VacancyCard;
