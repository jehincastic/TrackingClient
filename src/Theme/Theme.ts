import { createMuiTheme } from '@material-ui/core/styles';
import { blue, grey } from '@material-ui/core/colors';

const darkMode = false;

const theme = createMuiTheme({
  palette: {
    type: darkMode ? 'dark' : 'light',
    primary: {
      light: darkMode ? grey[300] : blue[300],
      main: darkMode ? grey[700] : blue[700],
      dark: darkMode ? grey[900] : blue[900],
      contrastText: '#fff',
    },
  },
});

export default theme;
