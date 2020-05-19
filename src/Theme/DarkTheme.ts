import { createMuiTheme } from '@material-ui/core/styles';
import { grey, blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: grey[300],
      main: grey[700],
      dark: grey[900],
      contrastText: '#fff',
    },
    secondary: {
      light: blue[300],
      main: blue[700],
      dark: blue[900],
      contrastText: '#fff',
    },
  },
});

export default theme;
