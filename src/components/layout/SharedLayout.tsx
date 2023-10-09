import { Outlet } from 'react-router-dom';
import { LeftBar } from '@components/leftBar/LeftBar';
import CssBaseline from '@mui/material/CssBaseline';
import s from './SharedLayout.module.scss';

function SharedLayout() {
  return (
    <div className={s.layout}>
      <CssBaseline />
      <LeftBar />
      <main style={{ flexGrow: 1, padding: 55 }}>
        <Outlet />
      </main>
      leftbar
    </div>
  );
}

export default SharedLayout;
