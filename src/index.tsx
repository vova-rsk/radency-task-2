import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import {store} from './redux/store';
import ActiveNotesPage from './pages/ActiveNotesPage';
import ArchivePage from './pages/ArchivePage';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<ActiveNotesPage />} />
            <Route path="active-notes" element={<ActiveNotesPage />} />
            <Route path="archive" element={<ArchivePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>        
  </React.StrictMode>,
  document.getElementById('root')
);

