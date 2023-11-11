import { type ReactNode } from 'react'
import { useThemeContext } from '../context/ThemeContext'

export default function Toggle (): ReactNode {
  const {
    theme: { background, color },
    toggleTheme,
    currentTheme
  } = useThemeContext()
  return (
    <nav className={`p-4 border-b-2 ${background} ${color}`}>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={currentTheme === 'dark'}
          className="sr-only peer"
          onClick={toggleTheme}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
        <span className="ms-3 text-sm font-medium text-inherit">
          Current theme: <b>{currentTheme}</b>
        </span>
      </label>
    </nav>
  )
}
