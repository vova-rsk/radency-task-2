import Table from '../components/UniversalTable/Table';
import { TABLE_TYPE } from '../utils/constants';

export default function ArchivePage() {
  return (
    <div>
      <Table tableType={TABLE_TYPE.NOTES} />
    </div>
  );
}
