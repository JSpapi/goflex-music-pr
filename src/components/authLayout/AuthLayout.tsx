import { AuthNavbar } from '@components/authNavbar/AuthNavbar';
import { ParticlesAnim } from '@components/particlesAnim/ParticlesAnim';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div>
      <AuthNavbar />
      <main>
        <Outlet />
      </main>
      <ParticlesAnim />
    </div>
  );
}

export default AuthLayout;
