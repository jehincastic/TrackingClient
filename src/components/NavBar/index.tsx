import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';

import useStyles from './styles';
import { PropType } from '../../Types';

const NavBar: React.FC = (props: React.Props<PropType>) => {
  const [profileMenu, setProfileMenu] = useState<string[]>([]);
  const [mainMenu, setMainMenu] = useState<string[]>([]);
  const classes = useStyles();
  const theme = useTheme();
  const { children } = props;
  const noNotification = 2;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const openPopOver = Boolean(anchorEl);
  const popOverId = openPopOver ? 'simple-popover' : undefined;
  const notificationList = [
    {
      title: 'Sketch',
      content: 'Introducing Material-UI for Sketch. Today, we’re excited to introduce the Sketch symbols 💎 for Material-UI.',
      date: new Date(1589053235710).toLocaleDateString('EN', { year: 'numeric', month: 'long', day: 'numeric' }),
      action: '',
      id: 'asdsadksad',
    }, {
      title: 'Twitter',
      content: 'You can follow us on Twitter to receive exclusive tips and updates about Material-UI and the React ecosystem.',
      date: new Date(1588952235710).toLocaleDateString('EN', { year: 'numeric', month: 'long', day: 'numeric' }),
      action: '/about',
      id: 'asdsdasd',
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setProfileMenu(['All mail', 'Trash', 'Spam']);
      setMainMenu(['Inbox', 'Starred', 'Send email', 'Drafts']);
    }, 1000);
  }, []);

  const handleDrawerOpen = (): void => {
    if (!loading) {
      setOpen(true);
    }
  };

  const handleDrawerClose = (): void => {
    if (!loading) {
      setOpen(false);
    }
  };

  const handlePopOverClose = (): void => {
    setAnchorEl(null);
  };

  const handlePopOverClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Price Tracking
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-describedby={popOverId} onClick={handlePopOverClick} aria-label="show new notifications" color="inherit">
              <Badge badgeContent={noNotification} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Button to="/" component={Link} className={classes.tileNav}>Price Tracking</Button>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {mainMenu.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {profileMenu.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
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
        {notificationList.map((notification, i): JSX.Element => (
          <Card key={notification.id}>
            {i !== 0 ? <Divider /> : null}
            <Typography variant="subtitle1" className={classes.notificationHeading}>{notification.title}</Typography>
            <Typography variant="subtitle2" className={classes.notificationContent}>{notification.content}</Typography>
            <Typography variant="caption" className={classes.notificationDate}>{notification.date}</Typography>
          </Card>
        ))}
      </Popover>
    </div>
  );
};

export default NavBar;
