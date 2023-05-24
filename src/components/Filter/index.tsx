import { Service } from '@/api';
import { ICONS } from '@/constants/icons';
import { TEXT } from '@/constants/text';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { searchSlice } from '@/store/reducers/SearchSlice';
import { VacancySlice } from '@/store/reducers/VacancySlice';

import { CategorySelector } from '../CategorySelector';
import { NumberSelector } from '../NumberSelector';
import {
  ApplyButton,
  ClearButton,
  ClearText,
  Container,
  FiltersHeader,
  FilterSubTitle,
  Header,
} from './styles';

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();

  const { clearFilters } = searchSlice.actions;
  const { setLoading, setVacancies, setTotal, setPage } = VacancySlice.actions;

  const searchValue = useAppSelector((state) => state.searchReducer);
  const page = useAppSelector((state) => state.vacancyReducer.page);

  const fetchVacancies = async () => {
    const data = await Service.getVacanciesByParams(searchValue, page);
    dispatch(setVacancies(data.vacancies));
    dispatch(setTotal(data.total));
    dispatch(setLoading(false));
  };

  const handleSubmit = () => {
    dispatch(setLoading(true));
    dispatch(setPage(0));
    fetchVacancies();
  };

  const handleClear = () => {
    dispatch(clearFilters());
  };

  return (
    <Container>
      <FiltersHeader>
        <Header>{TEXT.FILTERS}</Header>
        <ClearButton onClick={handleClear}>
          <ClearText>{TEXT.REMOVE}</ClearText>
          {ICONS.CROSS}
        </ClearButton>
      </FiltersHeader>
      <FilterSubTitle>{TEXT.CATEGORY}</FilterSubTitle>
      <CategorySelector />
      <FilterSubTitle>{TEXT.SALARY}</FilterSubTitle>
      <NumberSelector type={'from'} />
      <NumberSelector type={'to'} />
      <ApplyButton onClick={handleSubmit} data-elem="search-button">
        {TEXT.SUBMIT}
      </ApplyButton>
    </Container>
  );
};

export default Filter;
