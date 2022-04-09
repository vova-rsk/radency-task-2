import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import UniversalModal from '../Modal/UniversalModal';
import Container from './AddNoteBar.styled';
import { changeButtonsLockStatus } from '../../redux/notes/notes-actions';

export default function AddNoteBar() {
  const dispatch = useDispatch();
  const [isModalShow, setIsModalShow] = useState(false);

  const handleChangeModalStatus = () => {
    dispatch(changeButtonsLockStatus());
    setIsModalShow(!isModalShow);
  };

  return (
    <Container>
      {isModalShow && (
        <UniversalModal handleModalClose={handleChangeModalStatus} />
      )}

      {!isModalShow && (
        <Button variant="contained" onClick={handleChangeModalStatus}>
          Create Note
        </Button>
      )}
    </Container>
  );
}
