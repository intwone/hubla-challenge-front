import { TypeEnum } from '../../src/enums/type-enum';

import { transactionsPageSelectors } from '../selectors/transactions-page';

describe('Transaction listing', () => {
  beforeEach(() => {
    cy.visit('/transactions');
  });

  it('should list all transactions when type is not defined or equal to all', () => {
    cy.listAllTransactions().then(response => {
      cy.get(transactionsPageSelectors.transactionCardItem).then(res => {
        expect(res.length).to.eq(response.body.length);
      });
    });
  });

  for (const type in TypeEnum) {
    const typeName = TypeEnum[type];

    it(`should list transactions of type ${typeName} when the selected type is ${typeName}`, () => {
      cy.listTransactionsByType(Number(type)).then(response => {
        cy.get(transactionsPageSelectors.dropdownMenu).click();
        cy.xpath(transactionsPageSelectors.dropdownItem(typeName)).click();
        cy.get(transactionsPageSelectors.transactionCardItem).then(res => {
          expect(res.length).to.eq(response.body.length);
        });
      });
    });
  }
});
