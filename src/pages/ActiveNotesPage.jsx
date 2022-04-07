import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '../components/UniversalTable/Table';
import { STATUS } from '../utils/constants';
import { changeFilter } from '../redux/notes/notes-actions';
import { getFilteredNotes, getSummary } from '../redux/notes/notes.selectors';

function ActiveNotesPage() {
  const dispatch = useDispatch();
  const notesList = useSelector(getFilteredNotes);
  const summary = useSelector(getSummary);
  console.log(summary);

  useEffect(() => {
    dispatch(changeFilter(STATUS.ACTIVE));
  }, [dispatch]);

  return (
    <>
      <div>
        <Table tableData={notesList} tableType="notesTable" />
      </div>
      <div>Блок модалки</div>
      <div>
        <Table tableData={null} tableType="summaryTable" />
      </div>
    </>
  );
}

export default ActiveNotesPage;
