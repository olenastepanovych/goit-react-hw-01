import clsx from 'clsx';
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
    const statusClasses = clsx(css.status, isOnline && css.online);
return (
    <li className={css.item}>
    <img src={avatar} alt="Avatar" width="48" className={css.avatar} />
    <p className={css.name}>{name}</p>
    <p className={statusClasses}>{isOnline ? 'Online' : 'Offline'}</p>
    </li>
);
};

export default FriendListItem;
