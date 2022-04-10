import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TableButton from '../TableButton';
import TableArchiveButton from '../TableArchiveButton';
import ControlledCheckbox from '../TableCheckbox';
import { STATUS, ROUTES } from '../../../utils/constants';
import UniversalModal from '../../Modal/UniversalModal';
import {
  removeNote,
  updateNote,
  changeButtonsLockStatus,
  changeCreationBarVisibility,
} from '../../../redux/notes/notes-actions';

interface IProps { 
  noteId: string;
  isCtrlButtonsShow:boolean;
  handleSwitchNoteSelection: (id:string) => void;
}

const BodyControlButtons = (props:IProps) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [isModalShow, setIsModalShow] = useState(false);

  const { noteId, isCtrlButtonsShow, handleSwitchNoteSelection } = props;

  const newStatus =
    location.pathname === ROUTES.ACTIVE ? STATUS.ARCHIVED : STATUS.ACTIVE;

  const handleChangeModalStatus = () => {
    setIsModalShow(!isModalShow);
    dispatch(changeButtonsLockStatus());
  };

  const handleEditBtnClick = () => {
    handleChangeModalStatus();
    dispatch(changeCreationBarVisibility());
  };

  return (
    <>
      {isCtrlButtonsShow ? (
        <Stack direction="row" sx={{ justifyContent: 'end' }}>
          <TableButton icon={<EditIcon />} handleClick={handleEditBtnClick} />
          <TableArchiveButton
            handleClick={() =>
              dispatch(updateNote({ id: noteId, status: newStatus }))
            }
          />
          <TableButton
            icon={<DeleteIcon />}
            handleClick={() => dispatch(removeNote(noteId))}
          />
        </Stack>
      ) : (
        <Stack direction="row">
          <ControlledCheckbox
            handleSwitchNoteSelection={() => handleSwitchNoteSelection(noteId)}
          />
        </Stack>
      )}
      {isModalShow && (
        <UniversalModal
          noteId={noteId}
          handleModalClose={handleChangeModalStatus}
        />
      )}
    </>
  );
};

export default BodyControlButtons;
