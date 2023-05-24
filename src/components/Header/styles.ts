import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { COLORS } from '@/constants/colors';

import { NavbarLinkProps } from './types';

import '@fontsource/poppins';
import '@fontsource/inter';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  height: 84px;
  background-color: ${COLORS.WHITE};
  @media (max-width: 1100px) {
    width: 100%;
    flex-direction: column;
    height: 120px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 210px;
  @media (max-width: 1100px) {
    position: static;
    margin-bottom: 18px;
    margin-top: 18px;
  }
`;

export const LogoText = styled.h1`
  margin-left: 8px;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -0.02em;
`;

export const Navigator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 275px;
`;

export const NavbarLink = styled(Link)<NavbarLinkProps>`
  font-family: Inter;
  font-size: 16px;
  font-weight: ${(props) => (props.$active ? '500' : '400')};
  line-height: 20px;
  color: ${(props) => (props.$active ? COLORS.BRIGHT_BLUE : COLORS.DARK_BLUE)};
`;
