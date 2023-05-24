import styled from 'styled-components';

import { COLORS } from '../../constants/colors';

import '@fontsource/poppins';

const Container = styled.div`
  display: block;
  width: 773px;
  margin-top: 16px;
  padding: 24px;
  background-color: ${COLORS.WHITE};
  border-radius: 12px;
  border: 1px solid;
  border-color: ${COLORS.LIGHT_GREY};
  cursor: ${(props) => (props.theme.main ? 'auto' : 'pointer')};

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-family: Inter;
  font-size: ${(props) => (props.theme.main ? '28px' : '20px')};
  font-weight: ${(props) => (props.theme.main ? '700' : '600')};
  line-height: ${(props) => (props.theme.main ? '34px' : '24px')};
  color: ${(props) =>
    props.theme.main ? COLORS.DARK_BLUE : COLORS.BRIGHT_BLUE};
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${(props) => (props.theme.main ? '17px' : '13px')};
  margin-bottom: ${(props) => (props.theme.main ? '17px' : '13px')};
`;

const Description = styled.p`
  margin-left: 12px;
  font-size: ${(props) => (props.theme.main ? '20px' : '16px')};
  font-weight: 400;
  line-height: 20px;
  color: ${COLORS.DARK_BLUE};
`;

const LocationText = styled.p`
  margin-left: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${COLORS.DARK_BLUE};
`;

const Salary = styled.p`
  font-family: Inter;
  font-size: ${(props) => (props.theme.main ? '20px' : '16px')};
  font-weight: ${(props) => (props.theme.main ? '700' : '600')};
  line-height: 20px;
  color: ${COLORS.DARK_BLUE};
`;

const Dot = styled.p`
  margin-left: 12px;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  line-height: 21px;
  color: ${COLORS.BRIGHT_GREY};
`;

const Location = styled.div`
  display: flex;
  flex-direction: row;
`;

export {
  Container,
  Description,
  Dot,
  Header,
  Info,
  Location,
  LocationText,
  Salary,
  Title,
};
