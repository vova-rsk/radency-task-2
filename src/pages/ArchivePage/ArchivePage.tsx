import Table from '../../components/Table/UniversalTable';
import { TABLE_TYPE } from '../../utils/constants';
import Container from './ArchivePage.styled';

const ArchivePage = () => {
  return (
    <Container>
      <Table tableType={TABLE_TYPE.NOTES} />
    </Container>
  );
};

export default ArchivePage;
