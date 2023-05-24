import styled from 'styled-components';

import { COLORS } from '@/constants/colors';

export const Container = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  margin-top: 39px;
  margin-bottom: 18px;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${COLORS.DARK_GREY};
`;
