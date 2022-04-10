import { useSelector } from 'react-redux';
import { TableHead as Head } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import HeadControlButtons from '../HeadControlButtons';
import StyledTableCell from './TableHead.styled';
import captionsCapitalization from '../../../utils/captionsCapitalization';
import {
  TABLE_TYPE,
  NOTES_HEAD_CAPTIONS,
  SUMMARY_HEAD_CAPTIONS,
} from '../../../utils/constants';
import { getFilteredNotes } from '../../../redux/notes/notes-selectors';

interface IProps { 
  tableType: string;
  selectedNotesIds: string[];
  isControlButtonsShow: boolean;
  handleSwitchButtons: () => void;
  handleResetSelectedNotesIds: () => void;
}

const TableHead = (props:IProps) => {
  const notesList = useSelector(getFilteredNotes);

  const {
    tableType,
    selectedNotesIds,
    isControlButtonsShow,
    handleSwitchButtons,
    handleResetSelectedNotesIds,
  } = props;
  const isNotesTable = tableType === TABLE_TYPE.NOTES;
  const isShowButtons = isNotesTable && notesList.length > 0;
  const captionList = isNotesTable
    ? NOTES_HEAD_CAPTIONS
    : SUMMARY_HEAD_CAPTIONS;
  const capitalizedCaptionList = captionsCapitalization(captionList, tableType);

  return (
    <Head>
      <TableRow sx={{ backgroundColor: 'rgb(168, 165, 165)' }}>
        {capitalizedCaptionList.map((caption, idx) => (
          <StyledTableCell key={idx}>{idx > 0 && caption}</StyledTableCell>
        ))}

        {isShowButtons && (
          <StyledTableCell key="CtrlBtns">
            <HeadControlButtons
              selectedNotesIds={selectedNotesIds}
              isCtrlButtonsShow={isControlButtonsShow}
              handleSwitchButtons={handleSwitchButtons}
              handleResetSelectedNotesIds={handleResetSelectedNotesIds}
            />
          </StyledTableCell>
        )}
      </TableRow>
    </Head>
  );
}

export default TableHead;