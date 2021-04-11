import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Layout from './Layout'
import FillerSpeed from './Modules/FillerModule/FillerSpeed'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3b4fd2',
    },
    secondary: {
      main: '#ffffff',
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <FillerSpeed />
      </Layout>
    </ThemeProvider>
  )
}

export default App
