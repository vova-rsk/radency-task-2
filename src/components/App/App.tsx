import { Outlet } from 'react-router-dom';
import Container from './App.styled';
import AppBar from '../AppBar';

function App() {
  return (
    <Container>
      <AppBar />
      <Outlet />
    </Container>
  );
}

export default App;
