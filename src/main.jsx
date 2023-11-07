import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import AuthContextProvider from './Context/AuthContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={Routes} />
    </AuthContextProvider>
  //  </React.StrictMode>
)
