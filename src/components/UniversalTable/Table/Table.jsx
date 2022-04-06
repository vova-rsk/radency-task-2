import { useState } from 'react';
import { useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '../TableRow';
import { TABLE_HEAD_CAPTIONS } from '../../../utils/constants';
import { getFilteredContacts } from '../../../redux/notes/notes.selectors';

function NotesTable({ tableType = 'notesTable' }) {
  const notesList = useSelector(getFilteredContacts);
  const [isCtrlButtonsShow, setIsCtrlButtonsShow] = useState(true);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow
            type="header"
            captionList={TABLE_HEAD_CAPTIONS}
            tableType={tableType}
            isCtrlButtonsShow={isCtrlButtonsShow}
            handleSwitchButtons={() => setIsCtrlButtonsShow(!isCtrlButtonsShow)}
          />
        </TableHead>
        <TableBody>
          {notesList.map(note => (
            <TableRow
              key={note.id}
              note={note}
              tableType={tableType}
              isCtrlButtonsShow={isCtrlButtonsShow}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default NotesTable;
