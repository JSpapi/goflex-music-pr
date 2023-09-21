import { Login } from '../authPages/login/Login';
import { Register } from '../authPages/register/Register';
import { ConfirmName } from '../authPages/resetPassword/ConfirmName';
import { ConfirmOtpCode } from '../authPages/resetPassword/ConfirmOtpCode';
import { ResetPassword } from '../authPages/resetPassword/ResetPassword';
import { Home } from '../pages/home/Home';
import { Profile } from '../pages/profile/Profile';

const routes = [
  {
    id: 'login',
    path: '/login',
    element: <Login />,
    isMenu: false,
    isPrivate: false,
  },
  {
    id: 'register',
    path: '/register',
    element: <Register />,
    isMenu: false,
    isPrivate: false,
  },
  {
    id: 'confirmOTPCode',
    path: '/confirmOTPCode',
    element: <ConfirmOtpCode />,
    isMenu: false,
    isPrivate: false,
  },
  {
    id: 'confirmName',
    path: '/confirmName',
    element: <ConfirmName />,
    isMenu: false,
    isPrivate: false,
  },
  {
    id: 'resetPassword',
    path: '/resetPassword',
    element: <ResetPassword />,
    isMenu: false,
    isPrivate: false,
  },
  {
    id: 'profile',
    path: '/profile',
    element: <Profile />,
    isMenu: true,
    isPrivate: true,
  },
  {
    id: 'home',
    path: '/home',
    element: <Home />,
    isMenu: true,
    isPrivate: true,
  },
] as const;
export default routes;
