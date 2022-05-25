import styles from './FriendListItem.module.css';

function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li className={styles.item} key={id}>
      <span
        className={`${styles.status} ${styles[chooseOnline({ isOnline })]}`}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
}

function chooseOnline({ isOnline }) {
  return isOnline ? 'online' : 'offline';
}

export default FriendListItem;
