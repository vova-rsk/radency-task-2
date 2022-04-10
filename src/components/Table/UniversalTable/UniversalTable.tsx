import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Table as MuiTable } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

interface IProps { 
  tableType: string;
};

type handleSwitchFn = (id:string) => void;

const UniversalTable = ({tableType}:IProps) => {
  const [isCtrlsBtnsShow, setIsCtrlsBtnsShow] = useState(true);
  const [selectedNotesIds, setMarkedNotesIds] = useState<string[]>([]);

  const handleSwitchNoteSelection:handleSwitchFn = noteId => {
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
};

export default UniversalTable;