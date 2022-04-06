import { TableRow as Row } from '@mui/material';
import TableCell from '../TableCell';
import HeadControlButtons from '../HeadControlButtons';
import BodyControlButtons from '../BodyControlButtons';
import CategoryIcon from '../CategoryIcon';

function TableRow(props) {
  const {
    note,
    summary,
    captionList,
    tableType,
    isCtrlButtonsShow,
    handleSwitchButtons,
  } = props;
  const targetElem = captionList || note || summary;
  const targetKeys = Object.keys(targetElem);
  const isNotesTable = tableType === 'notesTable';

  return (
    <Row>
      {targetKeys.map((key, idx) =>
        idx === 0 ? (
          <TableCell key={idx}>
            <CategoryIcon categoryName={!captionList && targetElem.category} />
          </TableCell>
        ) : (
          <TableCell key={idx}>{targetElem[key]}</TableCell>
        ),
      )}

      {isNotesTable && captionList && (
        <TableCell key="CtrlBtns" cellType="header">
          <HeadControlButtons
            isCtrlButtonsShow={isCtrlButtonsShow}
            handleSwitchButtons={handleSwitchButtons}
          />
        </TableCell>
      )}

      {isNotesTable && note && (
        <TableCell key="CtrlBtns" cellType="body" noteId={note.id}>
          <BodyControlButtons isCtrlButtonsShow={isCtrlButtonsShow} />
        </TableCell>
      )}
    </Row>
  );
}

export default TableRow;
