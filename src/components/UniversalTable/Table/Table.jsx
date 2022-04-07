import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Table as MuiTable } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

export default function Table(props) {
  const [isCtrlsBtnsShow, setIsCtrlsBtnsShow] = useState(true);

  const { tableType } = props;

  return (
    <TableContainer component={Paper}>
      <MuiTable
      // sx={{
      //     borderCollapse: 'separate',
      //     borderSpacing: '0 5px'
      // }}
      >
        <TableHead
          tableType={tableType}
          isControlButtonsShow={isCtrlsBtnsShow}
          handleSwitchButtons={() => setIsCtrlsBtnsShow(!isCtrlsBtnsShow)}
        />
        <TableBody
          tableType={tableType}
          isControlButtonsShow={isCtrlsBtnsShow}
        />
      </MuiTable>
    </TableContainer>
  );
}
