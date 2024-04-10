import React from 'react'
import ReactDOM from 'react-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import App from './App.jsx'
import Media from './Media.jsx';
import Zap from './Zap.jsx';
import ReB from './ReB.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/media",
    element:  <Media />,
  },
  {
    path: "/zap",
    element:  <Zap />,
  },
  {
    path: "/ReB",
    element:  <ReB />,  
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
