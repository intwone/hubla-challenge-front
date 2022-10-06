import theme from '@src/theme';
import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70vh;
  max-width: 550px;
  border: 1px solid ${theme.colors.gray[600]};
  border-radius: 15px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .info-message {
    color: ${theme.colors.gray[800]};
    font-size: 13px;
    margin-top: 50px;
  }
`;

export const TitleContainer = styled.div`
  h2 {
    color: ${theme.colors.gray[800]};
    font-weight: bold;
  }
`;

export const Divider = styled.div`
  height: 4px;
  width: 100%;
  max-width: 110px;
  background: ${theme.colors.main};
  border-radius: 3px;
  margin: 5px 0;
`;

export default interface DropzoneContainerProps {
  isDragActive: boolean;
  isDragReject: boolean;
}

const isDragActive = css`
  border-color: ${theme.colors.success};
  background-color: ${transparentize(0.95, theme.colors.success)};
`;

const isDragReject = css`
  border-color: ${theme.colors.error};
  background-color: ${transparentize(0.95, theme.colors.error)};
`;

export const DropzoneContainer = styled.div<DropzoneContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 30px;
  border: 2px dashed ${theme.colors.gray[600]};
  cursor: pointer;

  ${props => props.isDragActive && isDragActive}
  ${props => props.isDragReject && isDragReject}
`;

export const Paragraph = styled.p`
  color: ${theme.colors.gray[700]};
  font-size: 13px;
  font-weight: 100;
`;

export const Footer = styled.div<{ disabled: boolean }>`
  display: flex;
  justify-content: end;

  button {
    display: flex;
    justify-content: center;
    padding: 10px;
    width: 120px;
    background-color: ${({ disabled }) =>
      disabled ? theme.colors.gray[800] : theme.colors.main};
    border: 0;
    border-radius: 5px;
    font-size: 15px;
    color: #fff;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${({ disabled }) =>
        disabled ? '' : transparentize(0.2, theme.colors.main)};
      cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    }
  }
`;

export const FileUploadedContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RemoveTransactionContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    padding: 7px;
    width: 80px;
    background-color: ${theme.colors.gray[500]};
    border: 0;
    border-radius: 5px;
    font-size: 11px;
    color: #fff;
    transition: background-color 0.3s;

    &:hover {
      transition: background-color 0.3s;
      background-color: ${transparentize(0.3, theme.colors.gray[500])};
    }
  }
`;
