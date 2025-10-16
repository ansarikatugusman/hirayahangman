import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Analytics } from "@vercel/analytics/next"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
   <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
            <Analytics />
            <App />
        </BrowserRouter>
   </GoogleOAuthProvider>
)