import IconButton from '@mui/material/IconButton';

function TableButton({ icon, handleClick }) {
  return (
    <IconButton
      aria-label="delete"
      size="large"
      sx={{ width: '30px', height: '30px' }}
      onClick={handleClick}
    >
      {icon}
    </IconButton>
  );
}

export default TableButton;
