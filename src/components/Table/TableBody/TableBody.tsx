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

interface IProps { 
  tableType: string;
  isControlButtonsShow: boolean;
  handleSwitchNoteSelection:(id:string) => void;
}

interface ISummary { 
  id: string;
  category: string;
  active: number;
  archived: number;
}

interface INote { 
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
}

type RowData = ISummary | INote;

const TableBody = (props:IProps) => {
  const notesList = useSelector(getFilteredNotes);
  const summaryList = useSelector(getSummary);

  const { tableType, isControlButtonsShow, handleSwitchNoteSelection } = props;
  const isNotesTable = tableType === TABLE_TYPE.NOTES;
  const tableData = isNotesTable
    ? updateNotesStructure(notesList)
    : summaryList;

  const createRowMarkup = (rowData:RowData) => {
    return Object.values(rowData).map((value:string|number, idx) =>
      idx === 0 ? (
        <StyledTableCell key={idx} index={idx} type={tableType}>
            <CategoryIcon categoryName={rowData.category} />
        </StyledTableCell>
      ) : (
        <StyledTableCell key={idx} index={idx} type={tableType}>
              {value}
        </StyledTableCell>
      ),
    );
  };

  const bodyMarkup =
    tableData &&
    tableData.map((rowData) => {
      const rowMarkup = createRowMarkup(rowData);

      return (
        <TableRow
          key={rowData.id}
          sx={{ backgroundColor: 'rgba(217, 204, 255, 0.3)' }}
        >
          {rowMarkup}
          {isNotesTable && (
            <StyledTableCell key="CtrlBtns">
              <BodyControlButtons
                noteId={rowData.id}
                isCtrlButtonsShow={isControlButtonsShow}
                handleSwitchNoteSelection={handleSwitchNoteSelection}
              />
            </StyledTableCell>
          )}
        </TableRow>
      );
    });

  return <Body>{bodyMarkup}</Body>;
};

export default TableBody;
