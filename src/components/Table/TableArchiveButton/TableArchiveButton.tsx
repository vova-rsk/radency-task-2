import { useSelector } from 'react-redux';
import ArchiveIcon from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import TableButton from '../TableButton';
import { STATUS } from '../../../utils/constants';
import ButtonLocker from '../../ButtonLocker';
import { getFilter } from '../../../redux/notes/notes-selectors';

interface IProps { 
  color?: string;
  handleClick: () => void;
}

const TableArchiveButton = ({ color, handleClick }:IProps) => {
  const currentStatus = useSelector(getFilter);

  const archiveButtonIcon =
    currentStatus === STATUS.ARCHIVED ? (
      <UnarchiveIcon sx={{ color }} />
    ) : (
      <ArchiveIcon sx={{ color }} />
    );

  return (
    <ButtonLocker>
      <TableButton icon={archiveButtonIcon} handleClick={handleClick} />
    </ButtonLocker>
  );
};

export default TableArchiveButton;
