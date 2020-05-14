import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: blue[300],
      main: blue[700],
      dark: blue[900],
      contrastText: '#fff',
    },
  },
});

export default theme;
