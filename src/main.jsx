import React from 'react'
import ReactDOM from 'react-dom/client'
import { NewsletterApp } from './newsletterApp'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <NewsletterApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
