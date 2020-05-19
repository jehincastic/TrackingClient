import { createMuiTheme } from '@material-ui/core/styles';
import { blue, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: blue[300],
      main: blue[700],
      dark: blue[900],
      contrastText: '#fff',
    },
    secondary: {
      light: grey[300],
      main: grey[700],
      dark: grey[900],
      contrastText: '#fff',
    },
  },
});

export default theme;
