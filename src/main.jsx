import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/user/user.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[{
      path:"/",
      element:<Home/>
    },{
      path:"about",
      element:<About/>
    },{
      path:"contact",
      element:<Contact/>
    },
    {
      path:"user/:userid",
      element:<User/>
    }]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
