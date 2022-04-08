import Table from '../../components/Table/UniversalTable';
import AddNoteBar from '../../components/AddNoteBar';
import { TABLE_TYPE } from '../../utils/constants';
import Container from './ActiveNotesPage.styled';

export default function ActiveNotesPage() {
  return (
    <Container>
      <div id="notes-table">
        <Table tableType={TABLE_TYPE.NOTES} />
      </div>
      <div>
        <AddNoteBar />
      </div>
      <div>
        <Table tableType={TABLE_TYPE.SUMMARY} />
      </div>
    </Container>
  );
}
