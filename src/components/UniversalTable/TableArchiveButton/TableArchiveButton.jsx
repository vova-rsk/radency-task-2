import { useLocation } from 'react-router-dom';
import ArchiveIcon from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import TableButton from '../TableButton';
import { TABLE_TYPE } from '../../../utils/constants';

function TableArchiveButton({ handleClick }) {
  const location = useLocation();

  const archivePathname = `/${TABLE_TYPE.ARCHIVE}`;
  const archiveButtonIcon =
    location.pathname === archivePathname ? <UnarchiveIcon /> : <ArchiveIcon />;

  return <TableButton icon={archiveButtonIcon} handleClick={handleClick} />;
}

export default TableArchiveButton;
