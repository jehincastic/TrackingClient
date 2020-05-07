import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    flexGrow: 1,
  },
  header: {
    flexGrow: 1,
    fontWeight: 100,
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '30px',
    },
    fontSize: '50px',
    margin: 0,
    padding: 0,
  },
  subHeader: {
    flexGrow: 1,
    fontWeight: 500,
    fontSize: '20px',
  },
  btn: {
    height: '40px',
  },
  homeContainer: {
    marginTop: '25vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
  },
});
