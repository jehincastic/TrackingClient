import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import useStyles from './styles';
import { PopOverType, PopOverList } from '../../Types';

const PopOver = ({ propObj }: { propObj: PopOverType }): JSX.Element => {
  const {
    popOverId,
    openPopOver,
    anchorEl,
    handlePopOverClose,
    userState,
    setUserState,
  } = propObj;
  const classes = useStyles();

  const getTimeDiff = (time: number): string => {
    const timeDiff = (new Date().getTime() - time) / 1000;
    if (timeDiff <= 60) {
      return 'A Few Seconds Ago';
    }
    if (timeDiff / 60 < 60) {
      return `${Math.floor(timeDiff / 60)} Minutes Ago`;
    }
    if (timeDiff / 3600 < 24) {
      return `${Math.floor(timeDiff / 3600)} Hours Ago`;
    }
    if (timeDiff / (3600 * 24) < 30) {
      return `${Math.floor(timeDiff / (3600 * 24))} Days Ago`;
    }
    if (timeDiff / (3600 * 24 * 30) < 12) {
      return `${Math.floor(timeDiff / (3600 * 24 * 30))} Months Ago`;
    }
    return `${Math.floor(timeDiff / (3600 * 24 * 30 * 12))} Years Ago`;
  };

  const clearNotification = (id: string, type: string): null => {
    const newUserState = { ...userState };
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < newUserState.notifications.length; i++) {
      const notification: PopOverList = newUserState.notifications[i];
      if (notification.id === id) {
        newUserState.notifications.splice(i, 1);
        setUserState(newUserState);
        if (type === 'Click') {
          handlePopOverClose();
        }
        return null;
      }
    }
    return null;
  };

  return (
    <Popover
      id={popOverId}
      open={openPopOver}
      anchorEl={anchorEl}
      onClose={handlePopOverClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      {userState.notifications.length > 0 ? (
        userState.notifications.map(
          (notification, i): JSX.Element => (
            <Card key={notification.id}>
              <CardActionArea
                onClick={(): null => clearNotification(notification.id, 'Click')}
                to={notification.action}
                component={Link}
              >
                {i !== 0 ? <Divider /> : null}
                <Typography
                  variant="subtitle1"
                  className={classes.notificationHeading}
                >
                  {notification.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  className={classes.notificationContent}
                >
                  {notification.content}
                </Typography>
                <Typography
                  variant="caption"
                  className={classes.notificationDate}
                >
                  {getTimeDiff(notification.date)}
                </Typography>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={(): null => clearNotification(notification.id, 'Clear')}
                  size="small"
                  color="primary"
                >
                  Clear
                </Button>
              </CardActions>
            </Card>
          ),
        )
      ) : (
        <Card>
          <CardActionArea>
            <Typography variant="subtitle1" className={classes.noNotifcation}>
              No New Notifications
            </Typography>
          </CardActionArea>
        </Card>
      )}
    </Popover>
  );
};

export default PopOver;
