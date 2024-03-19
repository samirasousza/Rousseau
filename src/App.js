import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';

// 2 - reaproveitamento de estrutura
import { Outlet } from 'react-router-dom';

// 4 - navegando entre paginas
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Room from './pages/Room/Room';
import Sidebar from './components/Sidebar';
import Cadastro from './pages/Cadastro/Cadastro';
import { AuthProvider } from './components/Auth';

function App() {

  return (
    <AuthProvider>
      <Outlet />  
    </AuthProvider>
  );
}

export default App;
