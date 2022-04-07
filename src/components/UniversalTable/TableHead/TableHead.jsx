import { useSelector } from 'react-redux';
import { TableHead as Head } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import HeadControlButtons from '../HeadControlButtons';
import TableCell from '../TableCell';
import captionsCapitalization from '../../../utils/captionsCapitalization';
import { TABLE_TYPE } from '../../../utils/constants';
import {
  getFilteredNotes,
  getSummary,
} from '../../../redux/notes/notes.selectors'; ////

export default function TableHead(props) {
  const notesList = useSelector(getFilteredNotes);
  const summaryList = useSelector(getSummary);

  const { tableType, isControlButtonsShow, handleSwitchButtons } = props;
  const isNotesTable = tableType === TABLE_TYPE.NOTES;
  const tableData = isNotesTable ? notesList : summaryList;
  const captionList = tableData && Object.keys(tableData[0]);
  const capitalizedCaptionList = captionsCapitalization(captionList);

  return (
    <Head>
      <TableRow>
        {capitalizedCaptionList.map((caption, idx) => (
          <TableCell key={idx} cellType="header">
            {idx > 0 && caption}
          </TableCell>
        ))}

        {isNotesTable && (
          <TableCell key="CtrlBtns" cellType="header">
            <HeadControlButtons
              isCtrlButtonsShow={isControlButtonsShow}
              handleSwitchButtons={handleSwitchButtons}
            />
          </TableCell>
        )}
      </TableRow>
    </Head>
  );
}
