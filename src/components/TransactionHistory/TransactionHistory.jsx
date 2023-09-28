import { Transaction } from './Transaction';
import css from './TransactionHistory.module.css';

export const TransactionHistory = () => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <Transaction />
      </tbody>
    </table>
  );
};
