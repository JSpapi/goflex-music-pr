import { Outlet } from 'react-router-dom';
import { LeftBar } from '@components/leftBar/LeftBar';
import CssBaseline from '@mui/material/CssBaseline';
import { RightBar } from '@components/rightBar/RightBar';
import s from './SharedLayout.module.scss';

function SharedLayout() {
  return (
    <div className={s.layout}>
      <CssBaseline />
      <LeftBar />
      <main className={s.main}>
        <Outlet />
      </main>
      <RightBar />
    </div>
  );
}

export default SharedLayout;
