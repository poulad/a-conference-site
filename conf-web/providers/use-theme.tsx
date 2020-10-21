import React, { useContext, useState, useEffect } from "react";

const ThemeContext = React.createContext(
  null as {
    theme: string;
    setTheme: (theme: string) => void;
  }
);

function getInitialTheme(): string {
  let initialTheme = "light";
  // TODO read from local storage

  return initialTheme;
}

export function ThemeProvider(props) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;

    const updateThemeForUserPreference = (isChangedToDark: boolean) => {
      if (isChangedToDark && theme !== "dark") {
        setTheme("dark");
      } else if (!isChangedToDark && theme !== "light") {
        setTheme("light");
      }
    };

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    updateThemeForUserPreference(prefersDarkScheme.matches);

    const colorSchemeQueryListener = (ev: MediaQueryListEvent) => {
      updateThemeForUserPreference(ev.matches);
    };
    prefersDarkScheme.addEventListener("change", colorSchemeQueryListener);

    return () =>
      prefersDarkScheme.removeEventListener("change", colorSchemeQueryListener);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(`ThemeContext.Provider is not defined`);
  }
  return context;
}
