import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ThemeToggle from "./ThemeToggle";

const Topbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Projects", link: "/projects" },
    { label: "Resume", link: "/resume" },
    { label: "ForSale", link: "/forsale" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        paddingX: 2,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left: Clickable Name */}
        <Typography
          variant="h6"
          fontWeight="bold"
          component="a"
          href="/"
          sx={{
            textDecoration: "none",
            color: "var(--text-color)",
            "&:hover": { color: "var(--hover-color)" },
          }}
        >
          Tam Tran
        </Typography>

        {/* Center: Navigation Links (Hidden on Small Screens) */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {navItems.map((item) => (
            <Typography
              key={item.label}
              variant="body1"
              component="a"
              href={item.link}
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                color: "var(--text-color)",
                fontWeight: "bold",
                "&:hover": { color: "var(--hover-color)" },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>

        {/* Right Menu */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            color="inherit"
            component="a"
            href="https://www.linkedin.com/in/tamtran-/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ transition: "0.3s", "&:hover": { color: "var(--hover-color)" } }}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            color="inherit"
            component="a"
            href="https://github.com/itistamtran"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ transition: "0.3s", "&:hover": { color: "var(--hover-color)" } }}
          >
            <GitHubIcon />
          </IconButton>

          <ThemeToggle />

          <IconButton
            color="inherit"
            sx={{ display: { md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Drawer (Mobile Menu) */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
            backdropFilter: "blur(20px)",
            paddingY: 2,
            width: "50%",
            height: "37%",
            margin: "auto",
            borderRadius: "15px",
            zIndex: 2000,
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.label}
              component="a"
              href={item.link}
              onClick={handleDrawerToggle}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: "bold",
                  textAlign: "center",
                  sx: {
                    color: "var(--text-color)",
                    "&:hover": { color: "var(--hover-color)" },
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Topbar;
