import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import AppBar from "@mui/material/AppBar";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useApp } from "../hooks/app";

const links = [
  {
    to: "/",
    label: "Home",
    icon: <HomeIcon />
  },
  {
    to: "/dashboard",
    label: "Dashboard",
    icon: <DashboardIcon />
  },
  {
    to: "/settings",
    label: "Config.",
    icon: <SettingsIcon />
  }
];

export const Root: React.FC = () => {
  const { pathname } = useLocation();
  const { title } = useApp();

  const [ selectedTab, setSelectedTab ] = React.useState<number>(0);

  useEffect(() => {
    const index = links.findIndex((link) => link.to === pathname);
    setSelectedTab(index);
  }, [ pathname ]);

  return (
    <Box className="bg-amber-50 w-full h-full flex flex-col">
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            {title.replace(/ \| Hermes$/, '')}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="flex-1">
        <Outlet />
      </div>
      <Paper elevation={4} className="sticky bottom-0 z-10">
        <BottomNavigation showLabels value={selectedTab}>
          {links.map(link => (
            <BottomNavigationAction
              key={link.to}
              component={NavLink}
              to={link.to}
              label={link.label}
              icon={link.icon}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
