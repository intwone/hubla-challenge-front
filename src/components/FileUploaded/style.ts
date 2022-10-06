import theme from '@src/theme';
import styled from 'styled-components';

export const Container = styled.div`
  button {
    padding: 10px;
    width: 120px;
    background-color: ${theme.colors.gray[500]};
    border: 0;
    border-radius: 5px;
    font-size: 15px;
    color: #fff;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${theme.colors.main};
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.gray[700]};

  div {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
  }

  span {
    font-weight: bold;
    font-size: 15px;
  }

  strong {
    font-size: 13px;
    font-style: italic;
  }
`;
