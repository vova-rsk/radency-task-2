import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '../components/UniversalTable/Table';
import { STATUS } from '../utils/constants';
import { changeFilter } from '../redux/notes/notes-actions';
import { getFilteredNotes } from '../redux/notes/notes.selectors';

function ArchivePage() {
  const dispatch = useDispatch();
  const notesList = useSelector(getFilteredNotes);

  useEffect(() => {
    dispatch(changeFilter(STATUS.ARCHIVED));
  }, [dispatch]);

  return (
    <div>
      <Table tableData={notesList} tableType="notesTable" />
    </div>
  );
}

export default ArchivePage;
