import rhythm from '@assets/navbar-icons/rhythm-fill.svg';
import { NavLink } from 'react-router-dom';
import s from './BottomLeftbar.module.scss';

interface IProps {
  bottomList: {
    id: string;
    name: string;
    path: string;
  }[];
}
export function BottomLeftbar({ bottomList }: IProps) {
  return (
    <ul className={s.leftbar_bottomList}>
      {bottomList.map(({ id, name, path }, index) => (
        <NavLink
          to={`/${path}`}
          key={id}
          className={({ isActive }) =>
            isActive
              ? [s.leftbar_bottomList_link, s.activeLink].join(' ')
              : s.leftbar_bottomList_link
          }
        >
          {index === 0 ? (
            <>
              <span>{name}</span>
              <img src={rhythm} alt="rhytm" />
            </>
          ) : (
            <span>{name}</span>
          )}
        </NavLink>
      ))}
    </ul>
  );
}
