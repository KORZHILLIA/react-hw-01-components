import styles from './Statistics.module.css';
function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statlist}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={styles.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage + '%'}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export default Statistics;
