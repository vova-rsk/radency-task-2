import Table from '../components/UniversalTable/Table';
import { TABLE_TYPE } from '../utils/constants';

export default function ActiveNotesPage() {
  return (
    <>
      <div>
        <Table tableType={TABLE_TYPE.NOTES} />
      </div>
      <div>Блок модалки</div>
      <div>
        <Table tableType={TABLE_TYPE.SUMMARY} />
      </div>
    </>
  );
}
