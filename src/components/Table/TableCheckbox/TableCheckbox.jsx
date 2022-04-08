import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function TableCheckbox(props) {
  const [checked, setChecked] = useState(false);

  const { handleSwitchNoteSelection } = props;

  const handleChange = e => {
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
}
