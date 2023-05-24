import { Select} from '@mantine/core';
import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Service from '../../service';
import { searchSlice } from '../../store/reducers/SearchSlice';
import { Category } from '../../types';
import SelectArrow from '../svg/SelectArrow';
import { Container, textStyles } from './styles';

const CategorySelector: React.FC = () => {
    
    const [rotate, setRotate] = useState<'up'|'down'>('down');
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const { setCategoryValue } = searchSlice.actions;
    const dispatch = useAppDispatch();
    const value = useAppSelector(state => state.searchReducer.category);

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await Service.getCategories();
            setCategories(data);
            setIsLoading(false);
        }
        fetchCategories();
    }, [])

    const toggleArrow = () => {
        rotate === 'up'? setRotate('down') : setRotate('up');
    }

    const handleChange = (key_value: string|null) => {
        let key = null;
        if(key_value) {
            key = Number(key_value);
        }
        dispatch(setCategoryValue(key))
    }

    return (
        <Container>
        <Select
            disabled={isLoading}
            data={
                categories.map((category) => {
                    return {label: category.title_trimmed, value: String(category.key)}
                })}
            rightSection={<SelectArrow rotate={rotate}/>}
            onDropdownOpen={toggleArrow}
            onDropdownClose={toggleArrow}
            onChange={(x) => handleChange(x)}
            styles={{ rightSection: { pointerEvents: 'none' }, item: textStyles, input: textStyles }}
            placeholder={isLoading?'Идет загрузка...':'Выберете отрасль'}
            searchable
            size={"md"}
            value={String(value)}
            data-elem="industry-select"
            />
        </Container>
      );
}

export default CategorySelector;