import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import AuthContextProvider from './Context/AuthContextProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <QueryClientProvider client={client}>
      <RouterProvider router={Routes} />
    </QueryClientProvider>
  </AuthContextProvider>
  //  </React.StrictMode>
)
