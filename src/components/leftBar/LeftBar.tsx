import Drawer from '@mui/material/Drawer';
import { NavLink } from 'react-router-dom';
import logo from '@assets/logo.svg';
import logoSmall from '@assets/logo-mini.svg';
import home from '@assets/navbar-icons/home-fill.svg';
import dashboard from '@assets/navbar-icons/dashboard.svg';
import heart from '@assets/navbar-icons/heart.svg';
import headphone from '@assets/navbar-icons/headphone.svg';
import { TopLeftbar } from '@components/topLeftbar/TopLeftbar';
import { BottomLeftbar } from '@components/bottomLeftbar/BottomLeftbar';
import { BottomLeftAdaptive } from '@components/bottomLeftAdaptive/BottomLeftAdaptive';
import s from './LeftBar.module.scss';

const drawerWidth = 286;
const miniDrawer = 100;
export function LeftBar() {
  const topNavigation = [
    { id: 't1', icon: home, name: 'Home', path: '' },
    { id: 't2', icon: dashboard, name: 'Bowse', path: 'categories' },
    { id: 't3', icon: heart, name: 'Favorite', path: 'favorites' },
    { id: 't4', icon: headphone, name: 'Library', path: 'library' },
  ];
  const bottomNavigation = [
    {
      id: 'b1',
      name: 'For workplace',
      path: 'workplace',
      img: 'https://i.scdn.co/image/ab67706c0000da8441441f50bab81dd4e4cf8d00',
    },
    {
      id: 'b2',
      name: 'Rich Brian"s collections',
      path: 'brainCollection',
      img: 'https://i.scdn.co/image/ab67616d00001e021907b9219e8b4f7a644d6f3f',
    },
    {
      id: 'b3',
      name: 'deep focus',
      path: 'deepFocuse',
      img: 'https://i.scdn.co/image/ab67706c0000da848ba5c6e825f743f38f182965',
    },
    {
      id: 'b4',
      name: 'Lo-Fi Jazz upbeat',
      path: 'lofi',
      img: 'https://i.scdn.co/image/ab67706c0000da84b8bbacde3a2f7846cc88d08e',
    },
    {
      id: 'b5',
      name: 'Christmas playlist',
      path: 'christmas',
      img: 'https://i.scdn.co/image/ab67616d00001e02bb653f725d8a3d0c58983111',
    },
  ];
  // TODO LOGO ADAPTIVE
  return (
    <Drawer
      sx={{
        width: { lg: drawerWidth, xs: miniDrawer },
        flexShrink: { lg: 0, xs: 0.8 },
        '& .MuiDrawer-paper': {
          width: { lg: drawerWidth, xs: miniDrawer },
          background: 'var(--neutral-100-night)',
          px: 2.5,
          overflow: 'hidden',
          textAlign: { lg: 'start', xs: 'center' },
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <NavLink to="/" className={s.logo}>
        <img src={logo} alt="logo" className={s.logo_big} />
        <img src={logoSmall} alt="logo-small" className={s.logo_small} />
      </NavLink>

      <TopLeftbar topList={topNavigation} />

      <BottomLeftbar bottomList={bottomNavigation} />

      <BottomLeftAdaptive adaptiveList={bottomNavigation} />
    </Drawer>
  );
}
