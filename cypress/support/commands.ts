/// <reference types="cypress" />

import 'cypress-file-upload';
import 'cypress-xpath';

const baseUrl = 'http://localhost:4000';

Cypress.Commands.add('listAllTransactions', () => {
  cy.request('GET', `${baseUrl}/transaction`);
});

Cypress.Commands.add('listTransactionsByType', (type: number) => {
  cy.request('GET', `${baseUrl}/transaction/${type}`);
});
