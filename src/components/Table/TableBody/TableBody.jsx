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
import updateNotesStructure from '../../../utils/updateNotesStructure';

export default function TableBody(props) {
  const notesList = useSelector(getFilteredNotes);
  const summaryList = useSelector(getSummary);

  const { tableType, isControlButtonsShow, handleSwitchNoteSelection } = props;
  const isNotesTable = tableType === TABLE_TYPE.NOTES;
  const tableData = isNotesTable
    ? updateNotesStructure(notesList)
    : summaryList;

  const createRowMarkup = note => {
    const keys = Object.keys(note);

    return keys.map((key, idx) =>
      idx === 0 ? (
        <StyledTableCell key={idx} idx={idx} type={tableType}>
          <CategoryIcon categoryName={note.category} />
        </StyledTableCell>
      ) : (
        <StyledTableCell key={idx} idx={idx} type={tableType}>
          {note[key]}
        </StyledTableCell>
      ),
    );
  };

  const bodyMarkup =
    tableData &&
    tableData.map(note => {
      const rowMarkup = createRowMarkup(note);

      return (
        <TableRow
          key={note.id}
          sx={{ backgroundColor: 'rgba(187, 230, 230, 0.2)' }}
        >
          {rowMarkup}
          {isNotesTable && (
            <StyledTableCell key="CtrlBtns">
              <BodyControlButtons
                noteId={note.id}
                isCtrlButtonsShow={isControlButtonsShow}
                handleSwitchNoteSelection={handleSwitchNoteSelection}
              />
            </StyledTableCell>
          )}
        </TableRow>
      );
    });

  return <Body>{bodyMarkup}</Body>;
}
