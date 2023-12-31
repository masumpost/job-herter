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
import Details from './components/Details/Details';
import dBJobsLoader from './components/DbLoader/DbLoader';



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
        path:'/details',
        element:<Details></Details>,
        // loader:({params})=>fetch(`/featuredJob.json`)
      },
      {
        path:'/details/:id',
        element:<Details></Details>,
        loader:({params})=>fetch(`/featuredJob.json`)
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
        element:<Jobs></Jobs>,
        loader:dBJobsLoader
        // loader:({params})=>fetch(`/featuredJob.json`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
