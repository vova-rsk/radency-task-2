import { useSelector } from 'react-redux';
import { TableBody as Body } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import StyledTableCell from './TableBody.styled';
import CategoryIcon from '../CategoryIcon';
import BodyControlButtons from '../BodyControlButtons';
import { TABLE_TYPE } from '../../../utils/constants';
import {
  getFilteredNotes,
  getSummary,
} from '../../../redux/notes/notes-selectors';

export default function TableBody(props) {
  const notesList = useSelector(getFilteredNotes);
  const summaryList = useSelector(getSummary);

  const { tableType, isControlButtonsShow, handleSwitchNoteSelection } = props;
  const isNotesTable = tableType === TABLE_TYPE.NOTES;
  const tableData = isNotesTable ? notesList : summaryList;

  return (
    <Body>
      {tableData &&
        tableData.map(item => {
          const keys = Object.keys(item);
          const rowMarkup = keys.map((key, idx) =>
            idx === 0 ? (
              <StyledTableCell key={idx} idx={idx} type={tableType}>
                <CategoryIcon categoryName={item.category} />
              </StyledTableCell>
            ) : (
              <StyledTableCell key={idx} idx={idx} type={tableType}>
                {item[key]}
              </StyledTableCell>
            ),
          );

          return (
            <TableRow
              key={item.id}
              sx={{
                backgroundColor: 'rgba(187, 230, 230, 0.2)',
              }}
            >
              {rowMarkup}
              {isNotesTable && (
                <StyledTableCell key="CtrlBtns">
                  <BodyControlButtons
                    noteId={item.id}
                    isCtrlButtonsShow={isControlButtonsShow}
                    handleSwitchNoteSelection={handleSwitchNoteSelection}
                  />
                </StyledTableCell>
              )}
            </TableRow>
          );
        })}
    </Body>
  );
}
