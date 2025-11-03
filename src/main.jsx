import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './App.jsx'
import Lists from './App.jsx'
import Not_Found from './App.jsx'
import Root from "./routes/root";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Not_Found />
  },
  {
    path: "/lists",
    element: <Lists />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

