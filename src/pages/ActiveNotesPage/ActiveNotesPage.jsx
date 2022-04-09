import { useSelector } from 'react-redux';
import Table from '../../components/Table/UniversalTable';
import AddNoteBar from '../../components/AddNoteBar';
import { TABLE_TYPE } from '../../utils/constants';
import Container from './ActiveNotesPage.styled';
import { getNoteCreationBarShowStatus } from '../../redux/notes/notes-selectors';

export default function ActiveNotesPage() {
  const isShowCreationBar = useSelector(getNoteCreationBarShowStatus);

  return (
    <Container>
      <div>
        <Table tableType={TABLE_TYPE.NOTES} />
      </div>
      <div id="edit-note-container">{isShowCreationBar && <AddNoteBar />}</div>
      <div>
        <Table tableType={TABLE_TYPE.SUMMARY} />
      </div>
    </Container>
  );
}
