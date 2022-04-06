import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Table from '../components/UniversalTable/Table';
import { STATUS } from '../utils/constants';
import { changeFilter } from '../redux/notes/notes-actions';

function ActiveNotesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFilter(STATUS.ACTIVE));
  }, [dispatch]);

  return (
    <div>
      <Table />
    </div>
  );
}

export default ActiveNotesPage;
