import { createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: grey[300],
      main: grey[700],
      dark: grey[900],
      contrastText: '#fff',
    },
  },
});

export default theme;
