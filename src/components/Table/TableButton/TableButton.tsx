import IconButton from '@mui/material/IconButton';
import ButtonLocker from '../../ButtonLocker/ButtonLocker';

interface IProps { 
  icon:JSX.Element,
  handleClick: () => void;
}

const TableButton = ({ icon, handleClick }:IProps) => {
  return (
    <ButtonLocker>
      <IconButton
        aria-label="delete"
        size="large"
        sx={{ width: '30px', height: '30px' }}
        onClick={handleClick}
      >
        {icon}
      </IconButton>
    </ButtonLocker>
  );
}

export default TableButton;