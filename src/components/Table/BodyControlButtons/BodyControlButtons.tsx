import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TableButton from '../TableButton';
import TableArchiveButton from '../TableArchiveButton';
import TableCheckbox from '../TableCheckbox';
import { STATUS } from '../../../utils/constants';
import UniversalModal from '../../Modal/UniversalModal';
import { getFilter } from '../../../redux/notes/notes-selectors';
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
  const dispatch = useDispatch();
  const currentStatus = useSelector(getFilter);

  const [isModalShow, setIsModalShow] = useState(false);

  const { noteId, isCtrlButtonsShow, handleSwitchNoteSelection } = props;

  const newStatus = currentStatus === STATUS.ACTIVE
    ? STATUS.ARCHIVED
    : STATUS.ACTIVE;

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
          <TableCheckbox
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
