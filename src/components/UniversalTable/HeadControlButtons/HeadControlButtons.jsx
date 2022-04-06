import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import TableButton from '../TableButton';
import TableArchiveButton from '../TableArchiveButton';
import { OPERATION_TYPE } from '../../../utils/constants';

export default function HeadControlButtons({
  isCtrlButtonsShow,
  handleSwitchButtons,
}) {
  const handleMakeAction = operationType => {
    console.log(operationType);
    // if operationType dispatch
    console.log('need to set operationType in redux');
    handleSwitchButtons();
  };

  const handleClickApprove = () => {
    console.log('done');
    handleSwitchButtons();
  };

  const handleClickCancel = () => {
    console.log('need to uncheck selected checkboxes');
    handleSwitchButtons();
  };

  return (
    <>
      {isCtrlButtonsShow ? (
        <Stack direction="row" sx={{ justifyContent: 'end' }}>
          <TableArchiveButton
            handleClick={() => handleMakeAction(OPERATION_TYPE.ARCHIVE)}
          />
          <TableButton
            icon={<DeleteIcon />}
            handleClick={() => handleMakeAction(OPERATION_TYPE.DELETE)}
          />
        </Stack>
      ) : (
        <Stack direction="row" sx={{ justifyContent: 'end' }}>
          <TableButton icon={<DoneIcon />} handleClick={handleClickApprove} />
          <TableButton icon={<CloseIcon />} handleClick={handleClickCancel} />
        </Stack>
      )}
    </>
  );
}
