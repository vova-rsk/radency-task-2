import { useSelector } from 'react-redux';
import { TableHead as Head } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import HeadControlButtons from '../HeadControlButtons';
import TableCell from '../TableCell';
import { Text } from './TableHead.styled';
import captionsCapitalization from '../../../utils/captionsCapitalization';
import {
  TABLE_TYPE,
  NOTES_HEAD_CAPTIONS,
  SUMMARY_HEAD_CAPTIONS,
} from '../../../utils/constants';
import { getFilteredNotes } from '../../../redux/notes/notes-selectors';

export default function TableHead(props) {
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
  const capitalizedCaptionList = captionsCapitalization(captionList);

  return (
    <Head>
      <TableRow
        sx={{
          height: '40px',
          backgroundColor: 'rgb(168, 165, 165)',
        }}
      >
        {capitalizedCaptionList.map((caption, idx) => (
          <TableCell key={idx} sx={{ color: '#fff' }}>
            <Text>{idx > 0 && caption}</Text>
          </TableCell>
        ))}

        {isShowButtons && (
          <TableCell key="CtrlBtns">
            <HeadControlButtons
              selectedNotesIds={selectedNotesIds}
              isCtrlButtonsShow={isControlButtonsShow}
              handleSwitchButtons={handleSwitchButtons}
              handleResetSelectedNotesIds={handleResetSelectedNotesIds}
            />
          </TableCell>
        )}
      </TableRow>
    </Head>
  );
}
