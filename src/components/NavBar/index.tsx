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
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import useStyles from './styles';
import {
  PropType,
  PopOverType,
  PopOverList,
  MenuType,
} from '../../Types';
import PopOver from '../PopOver';

const NavBar: React.FC = (props: React.Props<PropType>) => {
  const [profileMenu, setProfileMenu] = useState<MenuType[]>([]);
  const [mainMenu, setMainMenu] = useState<MenuType[]>([]);
  const classes = useStyles();
  const theme = useTheme();
  const { children } = props;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const openPopOver = Boolean(anchorEl);
  const popOverId = openPopOver ? 'simple-popover' : '';
  const [notificationList, setNotificationList] = React.useState<PopOverList[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      if (false) {
        setProfileMenu([
          {
            menuName: 'Your Profile',
            menuIcon: '',
            menuUrl: '/',
          },
          {
            menuName: 'Logout',
            menuIcon: '',
            menuUrl: '/',
          },
        ]);
      } else {
        setProfileMenu([
          {
            menuName: 'Login',
            menuIcon: <LockOutlinedIcon />,
            menuUrl: '/login',
          }, {
            menuName: 'Register',
            menuIcon: <PersonAddIcon />,
            menuUrl: '/signup',
          },
        ]);
      }
      setMainMenu([
        {
          menuName: 'Inbox',
          menuIcon: '',
          menuUrl: '/',
        },
        {
          menuName: 'Starred',
          menuIcon: '',
          menuUrl: '/',
        },
        {
          menuName: 'Send Mail',
          menuIcon: '',
          menuUrl: '/',
        },
        {
          menuName: 'Drafts',
          menuIcon: '',
          menuUrl: '/',
        },
      ]);
      setNotificationList([
        {
          title: 'Sketch',
          content:
          'Introducing Material-UI for Sketch. Today, we’re excited to introduce the Sketch symbols 💎 for Material-UI.',
          date: 1589053235710,
          action: '',
          id: '12345-01',
        },
        {
          title: 'Twitter',
          content:
          'You can follow us on Twitter to receive exclusive tips and updates about Material-UI and the React ecosystem.',
          date: 1588952235710,
          action: '/about',
          id: '12345-02',
        },
      ]);
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

  const propObj: PopOverType = {
    popOverId,
    openPopOver,
    anchorEl,
    handlePopOverClose,
    notificationList,
    setNotificationList,
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
            <IconButton
              aria-describedby={popOverId}
              onClick={handlePopOverClick}
              aria-label="show new notifications"
              color="inherit"
            >
              <Badge badgeContent={notificationList.length} color="secondary">
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
          <Button to="/" component={Link} onClick={handleDrawerClose} className={classes.tileNav}>
            Price Tracking
          </Button>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {mainMenu.map((text, index) => (
            <ListItem
              to={text.menuUrl}
              onClick={handleDrawerClose}
              component={Link}
              button
              key={text.menuName}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.menuName} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {profileMenu.map((text) => (
            <ListItem
              to={text.menuUrl}
              onClick={handleDrawerClose}
              component={Link}
              button
              key={text.menuName}
            >
              <ListItemIcon>
                {text.menuIcon}
              </ListItemIcon>
              <ListItemText primary={text.menuName} />
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
      <PopOver propObj={propObj} />
    </div>
  );
};

export default NavBar;
