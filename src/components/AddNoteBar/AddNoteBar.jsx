import { useState } from 'react';
import Button from '@mui/material/Button';
import UniversalModal from '../Modal/UniversalModal';
import { Container, ButtonThumb } from './AddNoteBar.jstyled';

export default function AddNoteBar() {
  const [isModalShow, setIsModalShow] = useState(false);

  return (
    <Container>
      {isModalShow && (
        <UniversalModal handleModalClose={() => setIsModalShow(!isModalShow)} />
      )}
      <ButtonThumb>
        {!isModalShow && (
          <Button
            variant="contained"
            onClick={() => setIsModalShow(!isModalShow)}
          >
            Create Note
          </Button>
        )}
      </ButtonThumb>
    </Container>
  );
}
