import React, { useState } from 'react';
import propTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Badge,
  withStyles,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GetAppIcon from '@material-ui/icons/GetApp';
import SrcAvatar from '../../assets/avatar.png';

const drawerWidth = 240;

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  topBar: {
    boxShadow: 'none',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

function TopBar({ title }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar className={classes.topBar} position="fixed" color="inherit">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <StyledBadge
              onClick={() => {
                window.location.href = 'https://api.whatsapp.com/send?phone=5521980044029&text=Oi,%20gostaria%20de%20contratar.';
              }}
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              variant="dot"
            >
              <Avatar
                width="100"
                alt={title}
                src={SrcAvatar}
                onClick={() => {
                  window.location.href = 'https://api.whatsapp.com/send?phone=5521980044029&text=Oi,%20gostaria%20de%20contratar.';
                }}
              />
            </StyledBadge>
          </Typography>
          <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit">
            <LinkedInIcon
              onClick={() => {
                window.location.href = 'https://www.linkedin.com/in/christian-possidonio/';
              }}
            />
          </IconButton>
          <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit">
            <GitHubIcon
              onClick={() => {
                window.location.href = 'https://github.com/christian-de-ornellas';
              }}
            />
          </IconButton>
          <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit">
            <WhatsAppIcon
              onClick={() => {
                window.location.href = 'https://api.whatsapp.com/send?phone=5521980044029&text=Oi,%20gostaria%20de%20contratar.';
              }}
            />
          </IconButton>
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
          <IconButton onClick={handleDrawerClose}>{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => {
              window.location.href = 'https://docs.google.com/document/d/1kwJsRjsvaXI3JNWC0XXSLUxOJlTsz_l70ksJSCBuIwo/edit?usp=sharing';
            }}
          >
            <ListItemIcon>
              <GetAppIcon />
            </ListItemIcon>
            <ListItemText primary="Meu CV" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => {
              window.location.href = 'https://www.linkedin.com/in/christian-possidonio/';
            }}
          >
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText primary="Linkedin" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              window.location.href = 'https://github.com/christian-de-ornellas';
            }}
          >
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="Github" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              window.location.href = 'https://api.whatsapp.com/send?phone=5521980044029&text=Oi,%20gostaria%20de%20contratar.';
            }}
          >
            <ListItemIcon>
              <WhatsAppIcon />
            </ListItemIcon>
            <ListItemText primary="Whatsapp" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default TopBar;

TopBar.defaultProps = {
  title: 'Christian',
};

TopBar.propTypes = {
  title: propTypes.string,
};
