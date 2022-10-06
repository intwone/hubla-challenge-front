import theme from '@src/theme';
import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px 120px;
  align-items: center;

  h1 {
    font-weight: bold;
    color: ${theme.colors.gray[800]};

    span {
      color: ${theme.colors.main};
    }
  }
`;

export const Topics = styled.div`
  a {
    font-weight: 100;
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
      color: ${darken(0.1, theme.colors.main)};
    }
  }

  a + a {
    margin-left: 45px;
  }
`;
