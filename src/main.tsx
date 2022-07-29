import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./utils/i18n"
import theme from 'utils/theme';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
