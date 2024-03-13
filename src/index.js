import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import Room from './pages/Room/Room';
import Alertas from './pages/Alertas/Alertas';
import Relatorios from './pages/Relatorios/Relatorios';
import Usuarios from './pages/Usuarios/Usuarios';



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
        element:<Home setor='Callidus'/>,
        path:'/home'
      },
      {
        element:<Alertas />,
        path:'/alertas'
      },
      {
        element:<Room setor='Callidus' sala='002 - Almoxarifado' />,
        path:'/salas'
      },
      {
        element:<Relatorios />,
        path: '/relatorios'
      },
      {
        element:<Usuarios />,
        path: '/usuarios'
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
