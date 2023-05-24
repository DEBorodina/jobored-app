import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1100px) {
    width: 90%;
    margin: 0 auto;
    justify-content: center;
  }
`;
