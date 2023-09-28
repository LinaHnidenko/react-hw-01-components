import clsx from 'clsx';
import friends from '../data/friends.json';
import css from './Friend.module.css';

export const FriendListItem = ({ isOnline }) => {
  return friends.map(friend => {
    return (
      <li className={css.item} key={friend.id}>
        <span
          className={clsx(
            css.status,
            friend.isOnline ? css.online : css.offline
          )}
        ></span>
        <img
          className={css.avatar}
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={css.name}>{friend.name}</p>
      </li>
    );
  });
};
