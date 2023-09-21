import { Outlet } from 'react-router-dom';
import { AuthNavbar } from '../authNavbar/AuthNavbar';

function AuthLayout() {
  return (
    <div>
      <AuthNavbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
