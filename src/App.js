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
        <h1>React Router</h1>
        <Container>
          <Home name='001- Administração' temp='25' umid='40' />
        </Container>
        <Outlet />
        <p>Footer</p>
      </div>
  );
}

export default App;
