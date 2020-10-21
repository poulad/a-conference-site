import React, { useContext, useState, useEffect } from "react";

const ThemeContext = React.createContext(
  null as {
    theme: string;
    setTheme: (theme: string) => void;
  }
);

const AVAILABLE_THEMES = ["light", "dark"];
const DEFAULT_THEME = AVAILABLE_THEMES[0];
const LOCAL_STORAGE_KEY_THEME = "theme";

let initialThemeSource = "DEFAULT" as
  | "DEFAULT"
  | "LOCAL_STORAGE"
  | "MEDIA_QUERY";

function getInitialTheme(): string {
  if (typeof localStorage === "undefined") return DEFAULT_THEME;

  let initTheme = DEFAULT_THEME;
  try {
    const themeInLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY_THEME);
    if (AVAILABLE_THEMES.includes(themeInLocalStorage)) {
      initTheme = themeInLocalStorage;
      initialThemeSource = "LOCAL_STORAGE";
    } else {
      console.warn(
        `Invalid theme value "${themeInLocalStorage}" in the local storage will be cleared.`
      );
      localStorage.removeItem(LOCAL_STORAGE_KEY_THEME);
    }
  } catch (e) {
    console.warn(
      `Failed to find the initial theme value in local storage. Using default value "${initTheme}".`,
      e
    );
  }

  return initTheme;
}

export function ThemeProvider(props) {
  const [theme, _setThemeState] = useState(getInitialTheme);

  const setTheme = (value) => {
    if (theme === value) return;

    if (!AVAILABLE_THEMES.includes(value)) {
      console.error(`Theme "${value}" is invalid!`);
      return;
    }

    _setThemeState(value);

    if (typeof localStorage === "undefined") return;

    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_THEME, value);
    } catch (e) {
      console.warn(`Failed to set the theme value in local storage.`, e);
    }
  };

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
    if (initialThemeSource === "DEFAULT") {
      updateThemeForUserPreference(prefersDarkScheme.matches);
      initialThemeSource = "MEDIA_QUERY";
    }

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
