import theme from '@src/theme';
import styled from 'styled-components';

export const Container = styled.div`
  div {
    margin-top: 100px;
  }

  p {
    color: ${theme.colors.gray[700]};
    font-size: 12px;
    font-weight: 100;

    span,
    strong {
      color: ${theme.colors.main};
      font-weight: bold;
    }
  }
`;
