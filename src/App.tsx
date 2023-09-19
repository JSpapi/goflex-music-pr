import { createTheme, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <h1>tests</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          delectus.
        </p>
        <button type="button">test</button>
      </>
    </ThemeProvider>
  );
}

export default App;
