import GlobalStyle from './styles/global'
import ViewPort from './components/ViewPort'
import NavBar from './components/NavBar'

import dark from './styles/theme/dark'
import light from './styles/theme/light'
import usePersistedState from './events/usePersistedSate'
import { ThemeProvider } from 'styled-components'

function App() {
  const [theme, setTheme] = usePersistedState ('theme', dark)
  const switchTheme = () => {
    setTheme( theme.title == 'light' ? dark : light )
  }

  return (
    <ThemeProvider theme = {theme}>
        <>
          <GlobalStyle />
          <NavBar switchTheme = {switchTheme} />
          <ViewPort />
        </>
    </ThemeProvider>
  )
}

export default App
