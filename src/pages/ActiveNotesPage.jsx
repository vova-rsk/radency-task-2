import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NotesTable from '../components/Tables/NotesTable';
import { STATUS } from '../utils/constants';
import { changeFilter } from '../redux/notes/notes-actions';

function ActiveNotesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFilter(STATUS.ACTIVE));
  }, [dispatch]);

  return (
    <div>
      <NotesTable />
    </div>
  );
}

export default ActiveNotesPage;
