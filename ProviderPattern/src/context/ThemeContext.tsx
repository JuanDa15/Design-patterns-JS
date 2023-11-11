import { type PropsWithChildren, createContext, type ReactNode, useState, useContext } from 'react'

interface ITheme {
  background: string
  color: string
}

interface IThemeContext {
  theme: ITheme
  currentTheme: Theme
  toggleTheme: () => void
}

type Theme = 'dark' | 'light'

const themes: Record<Theme, ITheme> = {
  light: { background: 'bg-white', color: 'text-slate-900' },
  dark: { background: 'bg-slate-900', color: 'text-white' }
}

export const ThemeContext = createContext<IThemeContext>({} as unknown as IThemeContext)

export function ThemeProvider (
  { children }: PropsWithChildren
): ReactNode {
  const [theme, setTheme] = useState<Theme>('dark')

  const toggleTheme = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{
      theme: themes[theme],
      currentTheme: theme,
      toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext (): IThemeContext {
  const theme = useContext(ThemeContext)
  if (theme === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return theme
}
