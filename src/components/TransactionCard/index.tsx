import { TypeEnum } from '@src/enums/type-enum';
import {
  formatDateToBR,
  formatToBRLCurrency,
  getCompleteHourOfDate,
} from '@src/helpers/formatters';
import { Container, Details, Value } from './style';
import { TransactionProtocol } from './types';

export function TransactionCard({
  date,
  productName,
  seller,
  value,
  type,
}: TransactionProtocol) {
  const transactionType = Object.values(TypeEnum)[type - 1];
  const formattedTransactionInfo = {
    type: transactionType,
    value: formatToBRLCurrency(value),
    date: formatDateToBR(date),
    hour: getCompleteHourOfDate(date),
  };

  return (
    <Container data-testid="transaction-item">
      <Details>
        <p className="product-name">{productName}</p>
        <h4>
          <em>{seller}</em>
        </h4>
        <h4>
          {formattedTransactionInfo.date} {formattedTransactionInfo.hour}
        </h4>
        <h4>{formattedTransactionInfo.type}</h4>
      </Details>

      <Value>{formattedTransactionInfo.value}</Value>
    </Container>
  );
}
