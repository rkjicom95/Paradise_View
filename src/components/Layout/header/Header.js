import React, { useState } from "react";
import "./Header.css";
import Logo from "../../../images/logo.png";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { FaHome, FaHotel } from "react-icons/fa";
import { SiCompilerexplorer } from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { MdContactMail } from "react-icons/md";

const drawerWidth = 170;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Header = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm")); // Adjust breakpoint as needed
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navLinks = [
    { text: "Home", to: "/", icon: <FaHome size={25} /> },
    { text: "Explore", to: "/explore", icon: <SiCompilerexplorer size={25} /> },
    { text: "Rooms", to: "/rooms", icon: <FaHotel size={25} /> },
    { text: "About", to: "/about", icon: <DiDatabase size={25} /> },
    { text: "Contact", to: "/contact", icon: <MdContactMail size={25} /> },
  ];

  return (
    <>
      {isMobileView ? (
        <Box
          className="header-mobile-view"
          sx={{ display: "flex", marginTop: "0px", padding: "0px" }}
        >
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar
              style={{
                backgroundColor: "#7d6a46",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                style={{ fontStyle: "oblique" }}
              >
                Paradise View
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {navLinks.map((link, index) => (
                <ListItem key={link.text} disablePadding>
                  <ListItemButton
                    component={NavLink}
                    to={link.to}
                    activeClassName="active"
                  >
                    <ListItemIcon>{link.icon}</ListItemIcon>
                    <ListItemText primary={link.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Drawer>
          <Main open={open}>
            <DrawerHeader />
          </Main>
        </Box>
      ) : (
        /* Desktop View */
        <div className="header-desktop-view">
          <div className="head-item ">
            <Link to="/">
              <div className="head-logo">
                <img src={Logo} alt="" />
              </div>
            </Link>
            <div className="head-tab-name">
              <ul>
                <li>
                  <NavLink activeClassName="active" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/explore">Explore</NavLink>
                </li>
                <li>
                  <NavLink to="/rooms">Rooms</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <Button
                variant="contained"
                color="success"
                style={{ backgroundColor: "#7d6a46" }}
              >
                Success
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
