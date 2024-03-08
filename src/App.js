import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';

// 2 - reaproveitamento de estrutura
import { Outlet } from 'react-router-dom';

// 4 - navegando entre paginas
import Sidebar from './components/Sidebar';
import Container from './pages/Container/Container';
import Card from './pages/Home/Card';

function App() {
  return (
      <div className='App'>
        <Sidebar />
        <Outlet />
      </div>
  );
}

export default App;
