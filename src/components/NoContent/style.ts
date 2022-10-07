import theme from '@src/theme';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 100;
  color: ${theme.colors.gray[700]};

  svg {
    color: ${theme.colors.main};
  }
`;
