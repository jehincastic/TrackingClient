import { createMuiTheme } from '@material-ui/core/styles';
import { grey, blue } from '@material-ui/core/colors';

const darkMode = false;

const theme = createMuiTheme({
  palette: {
    type: darkMode ? 'dark' : 'light',
    primary: {
      main: darkMode ? grey[700] : blue[700],
    },
  },
});

export default theme;
