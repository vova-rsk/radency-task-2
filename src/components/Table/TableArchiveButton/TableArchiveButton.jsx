import { useLocation } from 'react-router-dom';
import ArchiveIcon from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import TableButton from '../TableButton';
import { ROUTES } from '../../../utils/constants';

export default function TableArchiveButton(props) {
  const location = useLocation();

  const { color, handleClick } = props;
  const archivePathname = `${ROUTES.ARCHIVE}`;
  const archiveButtonIcon =
    location.pathname === archivePathname ? (
      <UnarchiveIcon sx={{ color }} />
    ) : (
      <ArchiveIcon sx={{ color }} />
    );

  return <TableButton icon={archiveButtonIcon} handleClick={handleClick} />;
}
