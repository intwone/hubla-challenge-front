export function formatDateToBR(date: string) {
  const dateFormatted = new Date(date).toLocaleDateString('pt-BR');
  return dateFormatted;
}

export function formatToBRLCurrency(value: number) {
  const valueFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
  return valueFormatted;
}

export function getCompleteHourOfDate(date: string) {
  const dateFormatted = new Date(date);
  const hour = dateFormatted.getHours().toString().padStart(2, '0');
  const minutes = dateFormatted.getMinutes().toString().padStart(2, '0');
  const seconds = dateFormatted.getSeconds().toString().padStart(2, '0');
  return `${hour}:${minutes}:${seconds}`;
}
