import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Table from '../components/UniversalTable/Table';
import { STATUS } from '../utils/constants';
import { changeFilter } from '../redux/notes/notes-actions';

function ArchivePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFilter(STATUS.ARCHIVED));
  }, [dispatch]);

  return (
    <div>
      <Table />
    </div>
  );
}

export default ArchivePage;
