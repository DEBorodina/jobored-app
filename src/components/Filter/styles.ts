import styled from 'styled-components';

import { COLORS } from '@/constants/colors';

import '@fontsource/inter';

export const Container = styled.div`
  width: 315px;
  height: 365px;
  margin-left: 28px;
  background-color: ${COLORS.WHITE};
  border-radius: 12px;
  padding: 20px;
  border: solid 1px;
  border-color: ${COLORS.LIGHT_GREY};

  @media (max-width: 1100px) {
    margin-left: 0px;
    width: 90%;
  }
`;
export const FiltersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const Header = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
`;

export const ClearButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ClearText = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${COLORS.MEDIUM_GREY};
`;

export const FilterSubTitle = styled.h6`
  margin-top: 20px;
  margin-bottom: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.DARK_BLUE};
`;

export const ApplyButton = styled.button`
  height: 40px;
  width: 275px;
  margin-top: 20px;
  border-radius: 8px;
  background-color: ${COLORS.BRIGHT_BLUE};
  color: ${COLORS.WHITE};
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;
