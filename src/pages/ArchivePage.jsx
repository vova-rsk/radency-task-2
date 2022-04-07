import { useSelector } from 'react-redux';
import Table from '../components/UniversalTable/Table';
import { getFilteredNotes } from '../redux/notes/notes.selectors';
import { TABLE_TYPE } from '../utils/constants';

export default function ArchivePage() {
  const notesList = useSelector(getFilteredNotes);

  return (
    <div>
      <Table tableData={notesList} tableType={TABLE_TYPE.NOTES} />
    </div>
  );
}
