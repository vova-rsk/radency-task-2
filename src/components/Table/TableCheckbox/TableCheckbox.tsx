import Checkbox from '@mui/material/Checkbox';

interface IProps { 
  handleSwitchNoteSelection: () => void;
}

const TableCheckbox = ({handleSwitchNoteSelection}:IProps) => {

  return (
    <Checkbox
      onChange={e=>handleSwitchNoteSelection()}
      inputProps={{ 'aria-label': 'controlled' }}
      sx={{ padding: '2px', marginLeft: 'auto', marginRight: 'auto' }}
    />
  );
};

export default TableCheckbox
