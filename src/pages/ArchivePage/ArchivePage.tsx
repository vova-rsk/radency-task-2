import Table from '../../components/Table/UniversalTable';
import { TABLE_TYPE } from '../../utils/constants';
import Container from './ArchivePage.styled';

const ArchivePage = () => {
  return (
    <Container>
      <div>
        <Table tableType={TABLE_TYPE.NOTES} />
      </div>
      <div id="edit-note-container"></div>
    </Container>
  );
};

export default ArchivePage;
