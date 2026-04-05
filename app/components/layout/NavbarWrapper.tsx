"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const [user, setUser] = useState(null);
  const { theme, setTheme } = useTheme();

  const handleLogout = () => {
    setUser(null);
    // Add your logout logic here
    console.log("User logged out");
  };

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Navbar
      user={user}
      onLogout={handleLogout}
      theme={theme}
      onThemeToggle={handleThemeToggle}
    />
  );
}
