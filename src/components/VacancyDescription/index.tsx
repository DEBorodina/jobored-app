import { Container } from "./styles";
import { VacancyDescriptionProps } from "./types";

const VacancyDescription: React.FC<VacancyDescriptionProps> = ({vacancyRichText}) => {
    return (
        <Container dangerouslySetInnerHTML={{__html: vacancyRichText}}></Container>
    )
}
export default VacancyDescription;