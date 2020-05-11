import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => createStyles({
  notificationHeading: {
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(0),
    paddingTop: theme.spacing(1.5),
    fontSize: '1 rem',
  },
  notificationContent: {
    fontSize: '0.85 rem',
    padding: theme.spacing(1),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0),
    width: '320px',
  },
  notificationDate: {
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(1.5),
    fontSize: '0.5 rem',
  },
  noNotifcation: {
    padding: theme.spacing(1.3),
  },
}));
