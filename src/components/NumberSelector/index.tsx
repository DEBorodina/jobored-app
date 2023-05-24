import { ICONS } from '@/constants/icons';
import { TEXT } from '@/constants/text';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { searchSlice } from '@/store/reducers/SearchSlice';

import { Button, Buttons, Container, Input } from './styles';
import { NumberSelectorProps } from './types';

export const NumberSelector: React.FC<NumberSelectorProps> = ({ type }) => {
  const { increment, decrement, setValue } = searchSlice.actions;

  const dispatch = useAppDispatch();

  const value = useAppSelector((state) => state.searchReducer[type]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const stringValue = e.target.value;
    const value = parseInt(stringValue);
    dispatch(setValue({ value, type }));
  };

  const onIncrement = (): void => {
    dispatch(increment(type));
  };

  const onDecrement = (): void => {
    dispatch(decrement(type));
  };

  return (
    <Container>
      <Input
        data-elem={type === 'from' ? 'salary-from-input' : 'salary-to-input'}
        value={value || value === 0 ? value : ''}
        type="number"
        placeholder={type === 'from' ? TEXT.FROM : TEXT.TO}
        onChange={handleOnChange}
      />
      <Buttons>
        <Button onClick={onIncrement}>{ICONS.UPARROW}</Button>
        <Button onClick={onDecrement}>{ICONS.DOWNARROW}</Button>
      </Buttons>
    </Container>
  );
};
