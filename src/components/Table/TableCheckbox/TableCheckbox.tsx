import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

interface IProps { 
  handleSwitchNoteSelection: () => void;
}

const TableCheckbox = ({handleSwitchNoteSelection}:IProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    handleSwitchNoteSelection();
    setChecked(e.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      sx={{ padding: '2px', marginLeft: 'auto', marginRight: 'auto' }}
    />
  );
};

export default TableCheckbox
