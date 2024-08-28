import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import { ClerkProvider } from '@clerk/clerk-react'
import Profile from './profile'
import AddNewListing from './add-listing'
import { Toaster } from "@/components/ui/sonner"
import Search from './components/Search'
import SeachBycategory from './search/[category]'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}

const router =createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/add-listing',
    element: <AddNewListing/>
  },
  {
    path:'/search/:category',
    element:<SeachBycategory/>
  }
])
// Import  publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router}/>
    <Toaster/>
    </ClerkProvider>
  </StrictMode>
)
