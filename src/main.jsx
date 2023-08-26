import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ResetStyle from './style/ResetStyle.jsx'
import GlobalStyle from './style/GlobalStyle.jsx'
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ResetStyle />
      <GlobalStyle />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
