import FriendListItem from './FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles.friendlist}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          id={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        ></FriendListItem>
      ))}
    </ul>
  );
}

export default FriendList;
