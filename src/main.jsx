import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import Jobs from './components/Jobs/Jobs';
import Layout from './components/Layout/Layout';
import ErrorPage from './components/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
        loader: ()=> fetch('jobCategory')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/jobs',
        element:<Jobs></Jobs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
