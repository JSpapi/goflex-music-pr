import { Divider, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface IProps {
  menuIcon: string;
}

export function HorizontalMoreinfo({ menuIcon }: IProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const menuList = [
    { name: 'Go to song', link: '' },
    { name: 'Go to playlist', link: '' },
    { name: 'Add to playlist', link: '' },
  ];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        type="button"
      >
        <img src={menuIcon} alt="more info" />
      </button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        {menuList.map(({ name, link }, index) => (
          <div key={name}>
            <MenuItem onClick={handleClose}>
              <NavLink to={link}>{name}</NavLink>
            </MenuItem>
            {index === menuList.length - 1 ? null : <Divider />}
          </div>
        ))}
      </Menu>
    </div>
  );
}
