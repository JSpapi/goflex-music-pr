import React from 'react';
import { NavLink } from 'react-router-dom';
import home from '@assets/icons/home-fill.svg';
import dashboard from '@assets/icons/dashboard.svg';
import heart from '@assets/icons/heart.svg';
import headphone from '@assets/icons/headphone.svg';

import s from './TopLeftbar.module.scss';

interface IProps {
  topList: {
    id: string;
    icon: string;
    name: string;
    path: string;
  }[];
}

export function TopLeftbar({ topList }: IProps) {
  return (
    <ul className={s.leftbar_topList}>
      {topList.map(({ icon, id, name, path }) => (
        <NavLink
          to={`/${path}`}
          key={id}
          className={({ isActive }) =>
            isActive
              ? [s.leftbar_topList_link, s.activeLink].join(' ')
              : s.leftbar_topList_link
          }
        >
          <img src={icon} alt={name} /> <span>{name}</span>
        </NavLink>
      ))}
    </ul>
  );
}
