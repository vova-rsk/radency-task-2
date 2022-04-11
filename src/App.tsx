import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Container from './App.styled';
import AppBar from './components/AppBar';
import { changeFilter } from './redux/notes/notes-actions';
import { STATUS, ROUTES } from './utils/constants';
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
       />
        <AppBar />
        <Outlet />
      
    </Container>
  );
};

export default App;
