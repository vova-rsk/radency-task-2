import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import TableButton from '../TableButton';
import TableArchiveButton from '../TableArchiveButton';
import { OPERATION_TYPE, STATUS, ROUTES } from '../../../utils/constants';
import {
  replaceNotesList,
  removeNotesList,
} from '../../../redux/notes/notes-actions';

interface IProps {
  selectedNotesIds:string[];
  isCtrlButtonsShow:boolean;
  handleSwitchButtons:()=>void;
  handleResetSelectedNotesIds:()=>void;
}

const HeadControlButtons = (props:IProps) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [operation, setOperation] = useState<string>('');

  const {
    selectedNotesIds,
    isCtrlButtonsShow,
    handleSwitchButtons,
    handleResetSelectedNotesIds,
  } = props;

  const handleCtrlButtonClick = (operationType:string) => {
    setOperation(operationType);
    handleSwitchButtons();
  };

  const handleClickApprove = () => {
    if (selectedNotesIds.length === 0) {
      return;
    }

    if (operation === OPERATION_TYPE.DELETE) {
      dispatch(removeNotesList(selectedNotesIds));
    } else {
      const { pathname } = location;
      const status =
        pathname === ROUTES.ACTIVE ? STATUS.ARCHIVED : STATUS.ACTIVE;

      dispatch(replaceNotesList({ ids: selectedNotesIds, status }));
    }

    handleResetSelectedNotesIds();
    handleSwitchButtons();
  };

  const handleClickCancel = () => {
    handleResetSelectedNotesIds();
    handleSwitchButtons();
  };

  return (
    <>
      {isCtrlButtonsShow ? (
        <Stack direction="row" sx={{ justifyContent: 'end' }}>
          <TableArchiveButton
            color="#fff"
            handleClick={() => handleCtrlButtonClick(OPERATION_TYPE.ARCHIVE)}
          />
          <TableButton
            icon={<DeleteIcon sx={{ color: '#fff' }} />}
            handleClick={() => handleCtrlButtonClick(OPERATION_TYPE.DELETE)}
          />
        </Stack>
      ) : (
        <Stack direction="row" sx={{ justifyContent: 'end' }}>
          <TableButton
            icon={<DoneIcon sx={{ color: '#fff' }} />}
            handleClick={handleClickApprove}
          />
          <TableButton
            icon={<CloseIcon sx={{ color: '#fff' }} />}
            handleClick={handleClickCancel}
          />
        </Stack>
      )}
    </>
  );
};

export default HeadControlButtons;
