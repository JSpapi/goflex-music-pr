import { Outlet } from 'react-router-dom';
import { AuthNavbar } from '../authNavbar/AuthNavbar';
import { ParticlesAnim } from '../particlesAnim/ParticlesAnim';

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
