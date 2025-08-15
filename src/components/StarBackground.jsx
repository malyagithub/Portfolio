// StarBackground.jsx
import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setIsDarkMode(storedTheme === "dark");
    // Listen for changes in theme across components
    const handleThemeChange = () => {
      setIsDarkMode(localStorage.getItem("theme") === "dark");
    };
    window.addEventListener("themeChange", handleThemeChange);

    return () => window.removeEventListener("themeChange", handleThemeChange);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        background: isDarkMode
          ? "linear-gradient(135deg, #0f2027, #203a43, #2c5364)" // Dark gradient
          : "linear-gradient(135deg, #FFB7B2, #8CCED6, #F7BA85)", // Light gradient
        transition: "background 0.5s ease-in-out",
      }}
    />
  );
};