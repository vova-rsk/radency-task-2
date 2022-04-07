import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Table as MuiTable } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '../TableRow';
import { TABLE_HEAD_CAPTIONS } from '../../../utils/constants';

export default function Table({ tableData, tableType = 'notesTable' }) {
  const [isCtrlButtonsShow, setIsCtrlButtonsShow] = useState(true);

  return (
    <>
      {tableData && (
        <TableContainer component={Paper}>
          <MuiTable
          // sx={{
          //     borderCollapse: 'separate',
          //     borderSpacing: '0 5px'
          // }}
          >
            <TableHead>
              <TableRow
                type="header"
                captionList={TABLE_HEAD_CAPTIONS}
                tableType={tableType}
                isCtrlButtonsShow={isCtrlButtonsShow}
                handleSwitchButtons={() =>
                  setIsCtrlButtonsShow(!isCtrlButtonsShow)
                }
              />
            </TableHead>
            <TableBody>
              {tableData.map(note => (
                <TableRow
                  key={note.id}
                  note={note}
                  tableType={tableType}
                  isCtrlButtonsShow={isCtrlButtonsShow}
                />
              ))}
            </TableBody>
          </MuiTable>
        </TableContainer>
      )}
    </>
  );
}
