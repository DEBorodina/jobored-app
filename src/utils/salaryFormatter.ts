import { Vacancy } from '../types';

export const salaryFormatter = ({
  payment,
  payment_to,
  payment_from,
  currency,
}: Vacancy): string => {
  let salary = `з/п `;

  if (payment) {
    salary += `${payment}`;
  } else if (payment_from && payment_to) {
    salary += `${payment_from} - ${payment_to} ${currency}`;
  } else if (payment_from) {
    salary += ` от ${payment_from} ${currency}`;
  } else if (payment_to) {
    salary += ` до ${payment_to} ${currency}`;
  } else {
    salary += `не указана`;
  }

  return salary;
};
