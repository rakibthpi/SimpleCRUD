import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DataInsert from './components/DataInsert.jsx';
import FindData from './components/FindData';
import Main from './layout/Main';
import Update from './components/Update';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <DataInsert></DataInsert>,
      },
      {
        path: 'datafind',
        element: <FindData></FindData>,
        loader: async () =>
          fetch('http://localhost:5000/users')
      },
      {
        path: 'update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
      }
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
