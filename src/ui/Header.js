import React, { useState, Fragment, useEffect, useMemo } from "react";
import Link from "../Link";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import QueueRoundedIcon from "@material-ui/icons/QueueRounded";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  logo: {
    padding: "0.5em",
    height: "5em",
    [theme.breakpoints.down("md")]: {
      height: "4em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3.5em",
    },
  },
  toolbarMargin: {
    minHeight: 40,
  },
  tabContainer: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  tab: {
    ...theme.typography.tab,
    color: theme.palette.common.cream,
    opacity: 0.7,
    minWidth: 10,
    marginLeft: "25px",
  },
  joinButton: {
    ...theme.typography.join,
    color: theme.palette.common.cream,
    borderRadius: "50px",
    marginRight: "0.5em",
    marginLeft: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "#fff",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menu: {
    backgroundColor: theme.palette.common.orange,
    borderRadius: "10px",
    color: theme.palette.common.cream,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.8,
    "&:hover": {
      opacity: 1,
    },
  },
  title: {
    color: theme.palette.common.cream,
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawerLogo: {
    height: "3em",
    padding: "0.5em",
  },
  drawerButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: theme.palette.common.cream,
    opacity: 0.8,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerTopContainer: {
    backgroundColor: theme.palette.common.cream,
  },
  drawerItemJoin: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItemIcon: {
    color: theme.palette.common.blue,
  },
  drawerItemIconJoin: {
    color: theme.palette.common.cream,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  toolbarMarginDrawer: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("md")]: {
      marginBottom: "0.6em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.1em",
    },
  },
}));

export default function Header({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
    setSelectedIndex(index);
    setOpenMenu(false);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = useMemo(
    () => [
      { name: "Our School", link: "/school", activeIndex: 1, selectedIndex: 0 },
      { name: "Visit Us", link: "/visit", activeIndex: 1, selectedIndex: 1 },
      {
        name: "Curriculum",
        link: "/curriculum",
        activeIndex: 1,
        selectedIndex: 2,
      },
      {
        name: "Gallery",
        link: "/gallery",
        activeIndex: 1,
        selectedIndex: 3,
      },
    ],
    []
  );

  const routes = useMemo(
    () => [
      {
        name: "Home",
        link: "/",
        activeIndex: 0,
        listIcon: <HomeRoundedIcon className={classes.drawerItemIcon} />,
      },
      {
        name: "Our School",
        link: "/school",
        activeIndex: 1,
        listIcon: <SchoolRoundedIcon className={classes.drawerItemIcon} />,
        ariaOwns: anchorEl ? "lock-menu" : undefined,
        ariaPopup: anchorEl ? true : undefined,
        mouseOver: (event) => handleClick(event),
      },
      {
        name: "Admissions",
        link: "/admissions",
        activeIndex: 2,
        listIcon: <CreateRoundedIcon className={classes.drawerItemIcon} />,
      },
      {
        name: "About Us",
        link: "/about",
        activeIndex: 3,
        listIcon: <PeopleRoundedIcon className={classes.drawerItemIcon} />,
      },
      {
        name: "Contact Us",
        link: "/contact",
        activeIndex: 4,
        listIcon: <CallRoundedIcon className={classes.drawerItemIcon} />,
      },
    ],
    [anchorEl, classes.drawerItemIcon]
  );

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/join":
          if (value !== false) {
            setValue(false);
            console.log("value", value);
          }
          break;
        default:
          break;
      }
    });
  }, [value, menuOptions, selectedIndex, routes, setSelectedIndex, setValue]);

  useEffect(() => {
    console.log("value", value);
    console.log("selectedindex", selectedIndex);
  }, [value, selectedIndex]);

  const tabs = (
    <Fragment>
      <Tabs
        className={classes.tabContainer}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            label={route.name}
            href={route.link}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.joinButton}
        component={Link}
        href="/join"
        onClick={() => setValue(false)}
      >
        Join Waiting List
      </Button>
      <Menu
        disableScrollLock={true}
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        classes={{ paper: classes.menu }}
        style={{ zIndex: 1302 }}
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={option.name}
            classes={{ root: classes.menuItem }}
            component={Link}
            href={option.link}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              handleClose();
              setValue(1);
            }}
            selected={index === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        anchor="right"
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMarginDrawer} />
        <Divider />
        <List component="nav" aria-label="navigation drawer" disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              button
              divider
              component={Link}
              href={route.link}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
            >
              <ListItemIcon>{route.listIcon}</ListItemIcon>
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            className={classes.drawerItemJoin}
            onClick={() => {
              setOpenDrawer(false);
              setValue(false);
            }}
            button
            divider
            component={Link}
            href="/join"
          >
            <ListItemIcon>
              <QueueRoundedIcon className={classes.drawerItemIconJoin} />
            </ListItemIcon>
            <ListItemText className={classes.drawerItem} disableTypography>
              Join Waiting List
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        color="secondary"
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <div className={classes.root}>
          <AppBar
            position="fixed"
            color="primary"
            elevation={0}
            className={classes.appBar}
          >
            <Toolbar disableGutters>
              <Button
                component={Link}
                href="/"
                onClick={() => setValue(0)}
                className={classes.logoContainer}
                disableRipple
              >
                <img
                  src="/assets/logoIcon.svg"
                  className={classes.logo}
                  alt="company logo"
                />
              </Button>
              <Typography
                variant="h1"
                component={Link}
                href="/"
                style={{ textDecoration: "none" }}
                onClick={() => setValue(0)}
                className={classes.title}
              >
                Fox Tree Kids
              </Typography>
              <Hidden mdDown>{tabs}</Hidden>
              <Hidden lgUp>{drawer}</Hidden>
            </Toolbar>
          </AppBar>
        </div>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
}
