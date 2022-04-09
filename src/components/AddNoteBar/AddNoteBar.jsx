import { useState } from 'react';
import Button from '@mui/material/Button';
import UniversalModal from '../Modal/UniversalModal';
import Container from './AddNoteBar.styled';

export default function AddNoteBar() {
  const [isModalShow, setIsModalShow] = useState(false);

  return (
    <Container>
      {isModalShow && (
        <UniversalModal handleModalClose={() => setIsModalShow(!isModalShow)} />
      )}

      {!isModalShow && (
        <Button
          variant="contained"
          onClick={() => setIsModalShow(!isModalShow)}
        >
          Create Note
        </Button>
      )}
    </Container>
  );
}
