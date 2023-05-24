import { Select } from '@mantine/core';
import { useEffect, useState } from 'react';

import { Service } from '@/api';
import { TEXT } from '@/constants/text';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { searchSlice } from '@/store/reducers/SearchSlice';
import { Category } from '@/types';

import SelectArrow from '../SelectArrow';
import { Container, textStyles } from './styles';

export const CategorySelector: React.FC = () => {
  const [rotate, setRotate] = useState<'up' | 'down'>('down');
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useAppDispatch();

  const { setCategoryValue } = searchSlice.actions;

  const value = useAppSelector((state) => state.searchReducer.category);

  const toggleArrow = () => {
    rotate === 'up' ? setRotate('down') : setRotate('up');
  };

  const handleChange = (key_value: string | null) => {
    let key = null;
    if (key_value) {
      key = Number(key_value);
    }
    dispatch(setCategoryValue(key));
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await Service.getCategories();
      setCategories(data);
      setIsLoading(false);
    };

    fetchCategories();
  }, []);

  return (
    <Container>
      <Select
        disabled={isLoading}
        data={categories.map((category) => {
          return { label: category.title_trimmed, value: String(category.key) };
        })}
        rightSection={<SelectArrow rotate={rotate} />}
        onDropdownOpen={toggleArrow}
        onDropdownClose={toggleArrow}
        onChange={(x) => handleChange(x)}
        styles={{
          rightSection: { pointerEvents: 'none' },
          item: textStyles,
          input: textStyles,
        }}
        placeholder={isLoading ? TEXT.LOADING : TEXT.CHOSEN_CATEGORY}
        searchable
        size={'md'}
        value={String(value)}
        data-elem="industry-select"
      />
    </Container>
  );
};
