import { NoContent } from '@src/components/NoContent';
import { TransactionCard } from '@src/components/TransactionCard';
import { TransactionProtocol } from '@src/components/TransactionCard/types';
import { TypeEnum } from '@src/enums/type-enum';
import { formatToBRLCurrency } from '@src/helpers/formatters';
import { MainLayoult } from '@src/layouts/MainLayout';
import { listTransactionsByTypeRequest } from '@src/services/list-transations-by-type-request';
import { listTransactionsRequest } from '@src/services/list-transations-request';
import { useEffect, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Container, TransactionInfoContainer } from './style';

export function TransactionPage() {
  const [transactions, setTransactions] = useState<TransactionProtocol[]>([]);
  const [type, setType] = useState(0);

  const totalValue = formatToBRLCurrency(
    transactions.reduce((sum, transaction) => sum + transaction.value, 0),
  );

  async function sendRequest() {
    if (!type) {
      listTransactionsRequest().then(t => setTransactions(t));
      return;
    }
    listTransactionsByTypeRequest(type).then(t => setTransactions(t));
  }

  useEffect(() => {
    sendRequest();
  }, [type]);

  return (
    <MainLayoult>
      <TransactionInfoContainer>
        <p>
          Valor total das transações:{' '}
          <strong>{transactions.length ? totalValue : 0}</strong>
        </p>
        <Dropdown
          onChange={async e => {
            if (e.value === 'Todas') return setType(0);
            const typeNumber = Object.values(TypeEnum).indexOf(e.value) + 1;
            const filteredTransations = await listTransactionsByTypeRequest(
              typeNumber,
            );
            setTransactions(filteredTransations);
            setType(typeNumber);
          }}
          controlClassName="dropdown"
          options={[...Object.values(TypeEnum), 'Todas']}
          placeholder="Selecione o tipo de transação"
        />
      </TransactionInfoContainer>

      <Scrollbars style={{ height: '80vh' }}>
        {transactions.length ? (
          <Container>
            {transactions.map(transaction => {
              return (
                <TransactionCard
                  id={transaction.id}
                  productName={transaction.productName}
                  date={transaction.date}
                  seller={transaction.seller}
                  type={transaction.type}
                  value={transaction.value}
                  key={transaction.id}
                />
              );
            })}
          </Container>
        ) : (
          <NoContent />
        )}
      </Scrollbars>
    </MainLayoult>
  );
}
