import { useContext, type ReactNode } from 'react'
import './App.css'
import { ThemeContext } from './context/ThemeContext'
import Toggle from './components/Toggle'
import List from './components/List'

function App (): ReactNode {
  const { theme: { background, color } } = useContext(ThemeContext)
  return (
    <section className={`w-screen h-screen ${background} ${color}`}>
      <Toggle />
      <List />
    </section>
  )
}

export default App
