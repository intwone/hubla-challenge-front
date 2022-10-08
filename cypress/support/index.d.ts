declare namespace Cypress {
  interface Chainable<Subject = any> {
    listAllTransactions(): Promise<any>;
    listTransactionsByType(type: number): Promise<any>;
  }
}
