import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { COLORS } from '../../constants/colors';

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 32px;
  width: 164px;
  height: 42px;
  border-radius: 8px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  background: ${COLORS.LIGHT_BLUE};
  font-size: 14px;
  line-height: 155%;
  color: ${COLORS.MEDIUM_BLUE};
`;
