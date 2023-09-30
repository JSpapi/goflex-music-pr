import { createTheme, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Login } from './authPages/login/Login';
import AuthLayout from './components/authLayout/AuthLayout';
import SharedLayout from './components/layout/SharedLayout';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/notFound/NotFound';
import routes from './routes';
import 'react-toastify/dist/ReactToastify.min.css';
import { useUser } from './hooks/userUser';
import { Test } from './components/preloader/Test';
import { Preloader } from './components/preloader/Preloader';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const { isAuthenticated } = useUser();
  const setRoutes = () =>
    routes.map(({ element, id, isMenu, isPrivate, path }) => {
      if (isPrivate && isAuthenticated && isMenu) {
        return <Route id={id} key={id} path={path} element={element} />;
      }
      if (!isAuthenticated && !isPrivate) {
        return <Route id={id} key={id} path={path} element={element} />;
      }
      return <Route key="not-found" path="*" element={<NotFound />} />;
    });

  return (
    <ThemeProvider theme={darkTheme}>
      <Preloader>
        <div>
          <Routes>
            {isAuthenticated ? (
              <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                {setRoutes()}
              </Route>
            ) : (
              <Route path="/" element={<AuthLayout />}>
                <Route index element={<Login />} />
                {setRoutes()}
              </Route>
            )}
          </Routes>
          <ToastContainer theme="dark" />
        </div>
      </Preloader>
    </ThemeProvider>
  );
}

export default App;
