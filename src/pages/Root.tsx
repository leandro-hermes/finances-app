import { NavLink, Outlet, useLocation } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction, Box, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import React, { useEffect } from "react";

const links = [
  {
    to: "/",
    label: "Home",
    icon: <HomeIcon/>
  },
  {
    to: "/dashboard",
    label: "Dashboard",
    icon: <DashboardIcon/>
  },
  {
    to: "/settings",
    label: "Config.",
    icon: <SettingsIcon/>
  }
];

export const Root: React.FC = () => {
  const { pathname } = useLocation();

  const [ value, setValue ] = React.useState<number>(0);

  useEffect(() => {
    const index = links.findIndex((link) => link.to === pathname);
    setValue(index);
  }, [pathname]);

  return (
    <Box className="bg-sky-950 w-full h-full flex flex-col">
      <div className="flex-1">
        <Outlet/>
      </div>
      <Paper elevation={4}>
        <BottomNavigation showLabels value={value}>
          {links.map((link, index) => (
            <BottomNavigationAction key={index} component={NavLink} to={link.to} label={link.label} icon={link.icon}/>
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
