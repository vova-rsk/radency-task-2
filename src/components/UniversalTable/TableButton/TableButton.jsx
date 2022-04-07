import IconButton from '@mui/material/IconButton';

export default function TableButton(props) {
  const { icon, handleClick } = props;

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
