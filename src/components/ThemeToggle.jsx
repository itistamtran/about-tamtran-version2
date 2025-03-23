import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  return (
    <IconButton
        color="inherit"
        onClick={() => setIsLight((prev) => !prev)}
        sx={{
            transition: "0.3s",
            "&:hover": { color: "var(--hover-color)" },
            "&:focus": {
                outline: "none",
                boxShadow: "none",
            },
        }}
    >
        {isLight ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>

  );
};

export default ThemeToggle;
