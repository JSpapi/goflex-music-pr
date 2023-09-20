import { createTheme, ThemeProvider } from '@mui/material';
import { AuthPage } from './authPages/AuthPages';
import { AuthNavbar } from './components/authNavbar/AuthNavbar';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <AuthPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
