import React, { ReactElement } from 'react';
import s from './PlaylistsSection.module.scss';

interface IProps {
  title: ReactElement;
  playlists: ReactElement;
}

export function PlaylistsSection({ playlists, title }: IProps) {
  return (
    <section className={s.playlists}>
      {title}
      {playlists}
    </section>
  );
}
