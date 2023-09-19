const routes = [
  {
    id: 'login',
    path: '/login',
    element: '',
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
    element: <ConfirmOTPCode />,
    isMenu: false,
    isPrivate: false,
  },
  {
    id: 'confirmEmail',
    path: '/confirmEmail',
    element: <ConfirmEmail />,
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
] as const;
export default routes;
