import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import s from './AuthNavbar.module.scss';

export function AuthNavbar() {
  return (
    <nav className={s.nav}>
      <Container maxWidth="lg">
        <div className={s.nav__content}>
          <NavLink
            to="register"
            className={({ isActive }) =>
              isActive ? s.nav__link : [s.nav__link, s.current].join(' ')
            }
          >
            Create Account
          </NavLink>
          <NavLink
            to={'login' && '/'}
            className={({ isActive }) =>
              isActive ? s.nav__link : [s.nav__link, s.current].join(' ')
            }
          >
            Login
          </NavLink>
        </div>
      </Container>
    </nav>
  );
}
