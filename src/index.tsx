import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import {store} from './redux/store';
import ActiveNotesPage from './pages/ActiveNotesPage/ActiveNotesPage';
import ArchivePage from './pages/ArchivePage/ArchivePage';
import NotFoundPage from './pages/NotFoundPage';
import { ROUTES } from './utils/constants';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<ActiveNotesPage />} />
            <Route path={ ROUTES.ACTIVE } element={<ActiveNotesPage />} />
            <Route path={ ROUTES.ARCHIVE } element={<ArchivePage />} />
          </Route>
        <Route path="*" element={<NotFoundPage />} />  
        </Routes>
      </BrowserRouter>
    </Provider>        
  </React.StrictMode>,
  document.getElementById('root')
);

