import { Outlet, useLocation } from 'react-router-dom';
import Container from './App.styled';
import AppBar from '../AppBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/notes/notes-actions';
import { STATUS, ROUTES } from '../../utils/constants';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { pathname } = location;

  useEffect(() => {
    const filter =
      pathname === ROUTES.ARCHIVE ? STATUS.ARCHIVED : STATUS.ACTIVE;

    dispatch(changeFilter(filter));
  }, [dispatch, pathname]);

  return (
    <Container>
      <AppBar />
      <Outlet />
    </Container>
  );
};

export default App;
