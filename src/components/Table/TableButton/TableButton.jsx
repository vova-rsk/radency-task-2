import IconButton from '@mui/material/IconButton';
import ButtonLocker from '../../ButtonLocker/ButtonLocker';

export default function TableButton(props) {
  const { icon, handleClick } = props;

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
