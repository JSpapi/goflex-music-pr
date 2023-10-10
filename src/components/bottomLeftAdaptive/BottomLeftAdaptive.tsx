import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './BottomLeftAdaptive.module.scss';

interface IProps {
  adaptiveList: {
    id: string;
    name: string;
    path: string;
    img: string;
  }[];
}

export function BottomLeftAdaptive({ adaptiveList }: IProps) {
  return (
    <ul className={s.bottomList_adaptive}>
      {adaptiveList.map(({ id, name, path, img }) => (
        <NavLink
          to={`/${path}`}
          key={id}
          className={s.bottomList_adaptive_link}
        >
          <img src={img} alt={name} />
        </NavLink>
      ))}
    </ul>
  );
}
