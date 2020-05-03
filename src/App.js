import logo from './logo.svg';
import 'typeface-roboto';
import './css/App.css'
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProfilePage from './pages/profile';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  return (
    <React.Fragment>

      <html>
        <head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </head>
        <div className="App">
        <ProfilePage/>
        </div>
      </html>
    </React.Fragment>
  );
}

export default App;
