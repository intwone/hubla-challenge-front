import { FilePropsProtocol } from '../components/UploadFile/types';
import axiosClient from './axios-client';

export async function insertTransactionsFileRequest(
  file: FilePropsProtocol,
): Promise<void> {
  const data = new FormData();
  const fileTyped = file as File;
  data.append('transactions', fileTyped);
  await axiosClient.post('/transaction', data);
}
