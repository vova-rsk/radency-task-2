import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Table as MuiTable } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

export default function UniversalTable(props) {
  const [isCtrlsBtnsShow, setIsCtrlsBtnsShow] = useState(true);
  const [selectedNotesIds, setMarkedNotesIds] = useState([]);

  const { tableType } = props;

  const handleSwitchNoteSelection = noteId => {
    const isExist = selectedNotesIds.includes(noteId);

    if (isExist) {
      const updatedValue = selectedNotesIds.filter(id => id !== noteId);
      setMarkedNotesIds(updatedValue);
      return;
    }

    setMarkedNotesIds([...selectedNotesIds, noteId]);
  };

  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead
          tableType={tableType}
          selectedNotesIds={selectedNotesIds}
          isControlButtonsShow={isCtrlsBtnsShow}
          handleSwitchButtons={() => setIsCtrlsBtnsShow(!isCtrlsBtnsShow)}
          handleResetSelectedNotesIds={() => setMarkedNotesIds([])}
        />
        <TableBody
          tableType={tableType}
          isControlButtonsShow={isCtrlsBtnsShow}
          handleSwitchNoteSelection={handleSwitchNoteSelection}
        />
      </MuiTable>
    </TableContainer>
  );
}
