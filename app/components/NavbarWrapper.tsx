"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const [user, setUser] = useState(null);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    setUser(null);
    // Add your logout logic here
    console.log("User logged out");
  };

  const handleLoginClick = () => {
    // Add your login logic here
    console.log("Login clicked");
  };

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) return null;

  return (
    <Navbar
      user={user}
      onLogout={handleLogout}
      onLoginClick={handleLoginClick}
      theme={theme}
      onThemeToggle={handleThemeToggle}
    />
  );
}
