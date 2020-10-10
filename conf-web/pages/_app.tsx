import React, { useEffect, useState } from "react"
import { AppProps } from "next/app"
import "../styles/globals.css"

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void
}

export const ThemeContext = React.createContext({} as ThemeContextType)

function MyApp({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState("light")
  const themeContextValue: ThemeContextType = { theme, setTheme }

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return

    const updateThemeForUserPreference = (isChangedToDark: boolean) => {
      if (isChangedToDark && theme !== 'dark') {
        setTheme('dark')
      } else if (!isChangedToDark && theme !== 'light') {
        setTheme('light')
      }
    }

    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
    updateThemeForUserPreference(prefersDarkScheme.matches)

    const colorSchemeQueryListener = (ev: MediaQueryListEvent) => {
      updateThemeForUserPreference(ev.matches)
    }
    prefersDarkScheme.addEventListener('change', colorSchemeQueryListener)

    return () => prefersDarkScheme.removeEventListener('change', colorSchemeQueryListener)
  }, [])

  return <ThemeContext.Provider value={themeContextValue}>
    <Component {...pageProps} />
  </ThemeContext.Provider>
}

export default MyApp
