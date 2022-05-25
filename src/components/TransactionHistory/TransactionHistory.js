import TransactionItem from './TransactionItem/TransactionItem';
import styles from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionItem
            id={id}
            type={type}
            amount={amount}
            currency={currency}
          ></TransactionItem>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
