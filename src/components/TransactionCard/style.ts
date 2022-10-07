import theme from '@src/theme';
import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid ${theme.colors.gray[600]};
  border-radius: 10px;
  padding: 20px 40px 20px 40px;
  color: ${theme.colors.gray[400]};
  transition: border 0.2s;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .product-name {
    display: flex;
    font-weight: bold;
  }

  &:hover {
    border: 2px solid ${theme.colors.main};
  }
`;

export const Details = styled.div`
  h4 {
    margin-top: 8px;
  }
`;

export const Value = styled.div`
  font-size: 35px;
  font-weight: bold;
`;
