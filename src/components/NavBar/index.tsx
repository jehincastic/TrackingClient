import React, { useEffect, useState, useContext } from 'react';
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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { MuiThemeProvider } from '@material-ui/core';

import useStyles from './styles';
import {
  PropType,
  PopOverType,
  MenuType,
  ResponseType,
} from '../../Types';
import PopOver from '../PopOver';
import { getMethod } from '../../Fetch';
import { ThemeContext } from '../../Context/ThemeContext';
import lightTheme from '../../Theme/LightTeme';
import darkTheme from '../../Theme/DarkTheme';
import { UserContext } from '../../Context/UserContext';

const NavBar: React.FC = (props: React.Props<PropType>) => {
  const { userState, setUserState } = useContext(UserContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
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

  useEffect(() => {
    const fetchData = async (url: string): Promise<ResponseType> => {
      const data: ResponseType = await getMethod<ResponseType>(url);
      return Promise.resolve(data);
    };
    fetchData('https://pokeapi.co/api/v2/pokemon/ditto/').then((data) => {
      console.log(data);
      setLoading(false);
      if (userState.isLoggedIn) {
        setUserState({
          firstName: 'AAA',
          lastName: 'BBB',
          email: 'asdasda',
          isLoggedIn: true,
          notifications: [
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
          ],
        });
        setProfileMenu([
          {
            menuName: 'Your Profile',
            menuIcon: <AccountCircleIcon />,
            menuUrl: '/profile',
          },
          {
            menuName: 'Messages',
            menuIcon: <ChatIcon />,
            menuUrl: '/messages',
          },
          {
            menuName: 'Logout',
            menuIcon: <ExitToAppIcon />,
            menuUrl: '/logout',
          },
        ]);
      } else {
        setProfileMenu([
          {
            menuName: 'Login',
            menuIcon: <LockOutlinedIcon />,
            menuUrl: '/login',
          },
          {
            menuName: 'Register',
            menuIcon: <PersonAddIcon />,
            menuUrl: '/signup',
          },
        ]);
      }
      setMainMenu([
        {
          menuName: 'Inbox',
          menuIcon: <InboxIcon />,
          menuUrl: '/',
        },
        {
          menuName: 'Starred',
          menuIcon: <MailIcon />,
          menuUrl: '/',
        },
        {
          menuName: 'Send Mail',
          menuIcon: <InboxIcon />,
          menuUrl: '/',
        },
        {
          menuName: 'Drafts',
          menuIcon: <MailIcon />,
          menuUrl: '/',
        },
      ]);
    });
  }, [setUserState, userState.isLoggedIn]);

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

  const changeTheme = (): void => {
    setDarkMode(!darkMode);
  };

  const propObj: PopOverType = {
    popOverId,
    openPopOver,
    anchorEl,
    handlePopOverClose,
    userState,
    setUserState,
  };

  return (
    <MuiThemeProvider theme={darkMode ? darkTheme : lightTheme}>
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
                onClick={changeTheme}
                aria-label="Change Theme"
                color="inherit"
              >
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <IconButton
                aria-describedby={popOverId}
                onClick={handlePopOverClick}
                aria-label="show new notifications"
                color="inherit"
              >
                {
                  userState.isLoggedIn
                    ? (
                      <Badge badgeContent={userState.notifications.length} color="secondary">
                        <NotificationsIcon />
                      </Badge>
                    ) : null
                }
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
            <Button
              to="/"
              component={Link}
              onClick={handleDrawerClose}
              className={classes.tileNav}
            >
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
            {mainMenu.map((text) => (
              <ListItem
                to={text.menuUrl}
                onClick={handleDrawerClose}
                component={Link}
                button
                key={text.menuName}
              >
                <ListItemIcon>{text.menuIcon}</ListItemIcon>
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
                <ListItemIcon>{text.menuIcon}</ListItemIcon>
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
    </MuiThemeProvider>
  );
};

export default NavBar;
