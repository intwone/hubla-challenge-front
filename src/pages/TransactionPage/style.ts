import theme from '@src/theme';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 120px;
  position: relative;

  div + div {
    margin-top: 10px;
  }
`;

export const TransactionInfoContainer = styled.div`
  padding: 15px 109px 15px 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 100;

    strong {
      color: ${theme.colors.main};
      font-weight: bold;
    }
  }

  .dropdown {
    width: 300px;
    border-radius: 8px;
    color: ${theme.colors.gray[700]};
  }
`;
