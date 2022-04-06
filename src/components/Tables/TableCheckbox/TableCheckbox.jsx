import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function TableCheckbox() {
  const [checked, setChecked] = useState(false);

  const handleChange = event => {
    // if checked - in redux add new id to array, if unchecked - remove id from array
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      sx={{ padding: '2px' }}
    />
  );
}
