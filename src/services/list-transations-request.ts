import { TransactionProtocol } from '@src/components/TransactionCard/types';
import axiosClient from './axios-client';

export async function listTransactionsRequest(): Promise<
  TransactionProtocol[] | []
> {
  const transactions = await axiosClient.get('/transaction');
  return transactions.data;
}
