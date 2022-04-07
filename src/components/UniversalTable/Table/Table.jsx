import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Table as MuiTable } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

export default function Table({ tableData, tableType = 'notesTable' }) {
  const [isCtrlsBtnsShow, setIsCtrlsBtnsShow] = useState(true);

  const tableHeadCaptionList = Object.keys(tableData[0]);

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
            <TableHead
              tableType={tableType}
              captionList={tableHeadCaptionList}
              isControlButtonsShow={isCtrlsBtnsShow}
              handleSwitchButtons={() => setIsCtrlsBtnsShow(!isCtrlsBtnsShow)}
            />
            <TableBody
              tableType={tableType}
              tableData={tableData}
              isControlButtonsShow={isCtrlsBtnsShow}
            />
          </MuiTable>
        </TableContainer>
      )}
    </>
  );
}
