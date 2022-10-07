import { TransactionProtocol } from '@src/components/TransactionCard/types';
import axiosClient from './axios-client';

export async function listTransactionsByTypeRequest(
  type: number,
): Promise<TransactionProtocol[] | []> {
  const transactions = await axiosClient.get(`/transaction/${type}`);
  return transactions.data;
}
