import { TableBody as Body } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import TableCell from '../TableCell';
import CategoryIcon from '../CategoryIcon';
import BodyControlButtons from '../BodyControlButtons';

export default function TableBody({
  tableType,
  tableData,
  isControlButtonsShow,
}) {
  const isNotesTable = tableType === 'notesTable';

  return (
    <Body>
      {tableData.map(item => {
        const keys = Object.keys(item);
        const rowMarkup = keys.map((key, idx) =>
          idx === 0 ? (
            <TableCell key={idx}>
              <CategoryIcon categoryName={item.category} />
            </TableCell>
          ) : (
            <TableCell key={idx}>{item[key]}</TableCell>
          ),
        );

        return (
          <TableRow key={item.id}>
            {rowMarkup}

            {isNotesTable && (
              <TableCell key="CtrlBtns" cellType="body" noteId={item.id}>
                <BodyControlButtons isCtrlButtonsShow={isControlButtonsShow} />
              </TableCell>
            )}
          </TableRow>
        );
      })}
    </Body>
  );
}
