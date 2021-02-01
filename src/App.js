import React from 'react';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import Home from './pages/Home';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#fbc531',
      },
      secondary: {
        main: '#e4e450',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
