import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { NavLink } from 'react-router-dom';
import logo from '@assets/logo.svg';
import home from '@assets/icons/home-fill.svg';
import dashboard from '@assets/icons/dashboard.svg';
import heart from '@assets/icons/heart.svg';
import headphone from '@assets/icons/headphone.svg';
import rhythm from '@assets/icons/rhythm-fill.svg';
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
    { id: 'b1', name: 'For workplace', path: 'workplace' },
    { id: 'b2', name: 'Rich Brian"s collections', path: 'brainCollection' },
    { id: 'b3', name: 'deep focus', path: 'deepFocuse' },
    { id: 'b4', name: 'Lo-Fi Jazz upbeat', path: 'lofi' },
    { id: 'b5', name: 'Christmas playlist', path: 'christmas' },
  ];

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: { md: 0, xs: 0.8 },
        '& .MuiDrawer-paper': {
          width: { md: drawerWidth, xs: miniDrawer },
          background: 'var(--neutral-100-night)',
          px: 2.5,
          overflow: 'hidden',
        },
      }}
      className={s.leftBar}
      variant="permanent"
      anchor="left"
    >
      <NavLink to="/" className={s.logo}>
        <img src={logo} alt="logo" />
      </NavLink>

      <ul className={s.leftbar_topList}>
        {topNavigation.map(({ icon, id, name, path }) => (
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

      <ul className={s.leftbar_bottomList}>
        {bottomNavigation.map(({ id, name, path }, index) => (
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
    </Drawer>
  );
}
