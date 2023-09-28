import { FriendListItem } from './FriendListItem';
import css from './Friend.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      <FriendListItem />
    </ul>
  );
};
