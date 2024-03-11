import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';

// 2 - reaproveitamento de estrutura
import { Outlet } from 'react-router-dom';

// 4 - navegando entre paginas
import Home from './pages/Home/Home';
import Container from './pages/Container/Container';
import Login from './pages/Login/Login';
import Room from './pages/Room/Room';

function App() {

  return (
      <div className='App'>
        {/* <h1>React Router</h1> */}
        <Container>
          {/* <Login /> */}
          {/* <Home setor='Callidus' />  */}
          { <Room setor='Callidus' sala='002 - Almoxarifado' /> }
          {/* <Home setor='Callidus' sala='001- Administração' temp='25' umid='40' /> */}
        </Container >
        <Outlet />
        {/* <p>Footer</p> */}
      </div>
  );
}

export default App;
