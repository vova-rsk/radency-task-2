import Table from '../../components/Table/UniversalTable';
import { TABLE_TYPE } from '../../utils/constants';
import Container from './ArchivePage.styled';

export default function ArchivePage() {
  return (
    <Container>
      <Table tableType={TABLE_TYPE.NOTES} />
    </Container>
  );
}
