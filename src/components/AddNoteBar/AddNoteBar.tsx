import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import UniversalModal from '../Modal/UniversalModal';
import { changeButtonsLockStatus } from '../../redux/notes/notes-actions';

const AddNoteBar =()=> {
  const dispatch = useDispatch();
  const [isModalShow, setIsModalShow] = useState(false);

  const handleChangeModalStatus = () => {
    dispatch(changeButtonsLockStatus());
    setIsModalShow(!isModalShow);
  };

  return (
    <div className="flex justify-end items-center h-[60px]">
      {isModalShow && (
        <UniversalModal handleModalClose={handleChangeModalStatus} />
      )}

      {!isModalShow && (
        <Button variant="contained" onClick={handleChangeModalStatus}>
          Create Note
        </Button>
      )}
    </div>
  );
};

export default AddNoteBar;
