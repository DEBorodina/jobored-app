import { Container } from './styles';
import { VacancyDescriptionProps } from './types';

export const VacancyDescription: React.FC<VacancyDescriptionProps> = ({
  vacancyRichText,
}) => {
  return (
    <Container
      dangerouslySetInnerHTML={{ __html: vacancyRichText }}
    ></Container>
  );
};
