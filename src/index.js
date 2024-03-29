import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './state/state'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
)

reportWebVitals()
