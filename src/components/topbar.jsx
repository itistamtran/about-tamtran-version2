import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DarkModeIcon from "@mui/icons-material/DarkMode";

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
        backgroundColor: "black",
        color: "white",
        boxShadow: "none",
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
            color: "white",
            "&:hover": { color: "#FFB6C1" },
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
                color: "white",
                backdropFilter: "blur(10px)",
                fontWeight: "bold",
                "&:hover": { color: "#FFB6C1" }, 
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
            sx={{
              transition: "0.3s",
              "&:hover": { color: "#FFB6C1" }, 
            }}
          >
            <LinkedInIcon />
          </IconButton>
          
          <IconButton
            color="inherit"
            component="a"
            href="https://github.com/itistamtran"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              transition: "0.3s",
              "&:hover": { color: "#FFB6C1" },
            }}
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            color="inherit"
            sx={{
              transition: "0.3s",
              "&:hover": { color: "#FFB6C1" }, 
            }}
          >
            <DarkModeIcon />
          </IconButton>

          {/* Shown on Small Screens */}
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
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent black
            backdropFilter: "blur(20px)", // Background blur
            paddingY: 2,
            width: "50%",
            height: "37%",
            margin: "auto",
            borderRadius: "15px",  
            transition: "backdrop-filter 0.3s ease-in-out",
            zIndex: 2000,
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem button key={item.label} component="a" href={item.link} onClick={handleDrawerToggle}>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: "bold", 
                  textAlign: "center", 
                  color: "white", 
                  sx: { "&:hover": { color: "#FFB6C1" } }, 
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
