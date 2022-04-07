import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TableButton from '../TableButton';
import TableArchiveButton from '../TableArchiveButton';
import ControlledCheckbox from '../TableCheckbox';

export default function BodyControlButtons(props) {
  const { noteId, isCtrlButtonsShow } = props;

  // const handleCheck = () => {
  //     console.log('check');
  // };

  return (
    <>
      {isCtrlButtonsShow ? (
        <Stack direction="row" sx={{ justifyContent: 'end' }}>
          <TableButton
            icon={<EditIcon />}
            handleClick={() => console.log('edit')}
          />
          <TableArchiveButton handleClick={() => console.log('archive')} />
          <TableButton
            icon={<DeleteIcon />}
            handleClick={() => console.log('delete')}
          />
        </Stack>
      ) : (
        <Stack direction="row">
          <ControlledCheckbox />
        </Stack>
      )}
    </>
  );
}
