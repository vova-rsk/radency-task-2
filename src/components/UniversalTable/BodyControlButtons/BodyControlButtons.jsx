import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TableButton from '../TableButton';
import TableArchiveButton from '../TableArchiveButton';
import ControlledCheckbox from '../TableCheckbox';
import { STATUS, ROUTES } from '../../../utils/constants';
import { removeNote, updateNote } from '../../../redux/notes/notes-actions';

export default function BodyControlButtons(props) {
  const location = useLocation();
  const dispatch = useDispatch();

  const { noteId, isCtrlButtonsShow, handleSwitchNoteSelection } = props;

  const newStatus =
    location.pathname === ROUTES.ACTIVE ? STATUS.ARCHIVED : STATUS.ACTIVE;

  return (
    <>
      {isCtrlButtonsShow ? (
        <Stack direction="row" sx={{ justifyContent: 'end' }}>
          <TableButton
            icon={<EditIcon />}
            handleClick={() => console.log('edit')}
          />
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
    </>
  );
}
