export const transactionsPageSelectors = {
  transactionCardItem: 'div[data-testid="transaction-item"]',
  dropdownMenu: '.Dropdown-control',
  dropdownItem: (typeName: string) =>
    `//div[contains(@class, "Dropdown-menu")]/div[contains(text(), "${typeName}")]`,
};
