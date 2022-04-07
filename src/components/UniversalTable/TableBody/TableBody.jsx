import { useSelector } from 'react-redux';
import { TableBody as Body } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import TableCell from '../TableCell';
import CategoryIcon from '../CategoryIcon';
import BodyControlButtons from '../BodyControlButtons';
import { TABLE_TYPE } from '../../../utils/constants';
import {
  getFilteredNotes,
  getSummary,
} from '../../../redux/notes/notes.selectors'; ////

export default function TableBody(props) {
  const notesList = useSelector(getFilteredNotes);
  const summaryList = useSelector(getSummary);

  const { tableType, isControlButtonsShow } = props;
  const isNotesTable = tableType === TABLE_TYPE.NOTES;
  const tableData = isNotesTable ? notesList : summaryList;

  return (
    <Body>
      {tableData.map(item => {
        const keys = Object.keys(item);
        const rowMarkup = keys.map((key, idx) =>
          idx === 0 ? (
            <TableCell key={idx} cellType="body">
              <CategoryIcon categoryName={item.category} />
            </TableCell>
          ) : (
            <TableCell key={idx} cellType="body">
              {item[key]}
            </TableCell>
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
