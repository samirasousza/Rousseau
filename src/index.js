import React, { useEffect, useState } from 'react';
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
import useAuth from './components/UseAuth';
import Cadastro from './pages/Cadastro/Cadastro';
import Redefinir from './pages/Redefinir/Redefinir';
import Salas from './pages/Salas/Salas';
import { apiConnection } from './config/httpConnection';

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />;
};

const router = createBrowserRouter([
  {
    element:<App/>,
    path:'/',
    children: [
      {
        element:<Login />,
        path:''
      },
      {
        element:<Cadastro />,
        path:'/cadastro'
      },
      {
        element:<Redefinir />,
        path:'/redefinir'
      },
      {
        // element:<Private Item={Home} />,
        element:<Home />,
        path:'/home'
      },
      {
        element:<Alertas />,
        path:'/alertas'
      },
      {
        // element: room.map(item => (<Room item={item} key={item.ID_SALA} />)),
        element:<Room setor='Callidus' sala='002 - Almoxarifado' />,
        path:'/sala'
      },
      {
        element:<Salas />,
        path:`/salas`
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
