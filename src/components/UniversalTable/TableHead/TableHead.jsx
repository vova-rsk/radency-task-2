import { TableHead as Head } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import HeadControlButtons from '../HeadControlButtons';
import TableCell from '../TableCell';

export default function TableHead(props) {
  const { captionList, tableType, isControlButtonsShow, handleSwitchButtons } =
    props;
  const isNotesTable = tableType === 'notesTable';

  return (
    <Head>
      <TableRow>
        {captionList.map((caption, idx) => (
          <TableCell key={idx}>{idx > 0 && caption}</TableCell>
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
