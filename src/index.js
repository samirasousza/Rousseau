import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact';
import Login from './pages/Login/Login'


// const router = createBrowserRouter([
//   {
//     element:<Home/>,
//     path:'/'
//   },
//   {
//     element:<Contact/>,
//     path:'/contact'
//   }

// ])

const router = createBrowserRouter([
  {
    element:<App/>,
    path:'/',
    children: [
      //  {
      //  element:<Login />,
      //  path:'/login'
      // },
      {
        element:<Home />,
        path:'/home'
      },
      {
        element:<Contact />,
        path:'/contact'
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
