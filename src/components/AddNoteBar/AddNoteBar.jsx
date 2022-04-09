import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import UniversalModal from '../Modal/UniversalModal';
import Container from './AddNoteBar.styled';
import { changeButtonsLockStatus } from '../../redux/notes/notes-actions';

export default function AddNoteBar() {
  const dispatch = useDispatch();
  const [isModalShow, setIsModalShow] = useState(false);

  const handleClick = () => {
    setIsModalShow(!isModalShow);
    dispatch(changeButtonsLockStatus());
  };

  return (
    <Container>
      {isModalShow && <UniversalModal handleModalClose={handleClick} />}

      {!isModalShow && (
        <Button variant="contained" onClick={handleClick}>
          Create Note
        </Button>
      )}
    </Container>
  );
}
