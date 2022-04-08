import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { STATUS } from '../../../utils/constants';
import { getNoteById } from '../../../redux/notes/notes-selectors';
import { addNote, updateNote } from '../../../redux/notes/notes-actions';
import getCurrentFormatedDate from '../../../utils/getCurrentFormatedDate';
import getDateIntervalFromContent from '../../../utils/getDateIntervalFromContent';
import ModalForm from '../ModalForm';
import Portal from '../Portal';

export default function UniversalModal(props) {
  const { noteId = null, handleModalClose } = props;

  const noteToEdit = useSelector(getNoteById(noteId));
  const dispatch = useDispatch();
  const [category, setCategory] = useState(noteId ? noteToEdit.category : '');
  const [name, setName] = useState(noteId ? noteToEdit.name : '');
  const [content, setContent] = useState(noteId ? noteToEdit.content : '');

  const isNewNote = !Boolean(noteId);
  const handleInputChange = e => {
    e.preventDefault();

    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'content':
        setContent(value);
        break;
      default:
        console.log('oops something went wrong');
    }
  };

  const handleApplyBtnClick = () => {
    if (!name || !category || !content) {
      return;
    }

    let noteData = {
      id: nanoid(7),
      name,
      created: getCurrentFormatedDate(),
      category,
      content,
      dates: getDateIntervalFromContent(content),
      status: STATUS.ACTIVE,
    };

    if (!isNewNote) {
      const { id, created, status } = noteToEdit;
      noteData = { ...noteData, id, created, status };
    }

    const action = isNewNote ? addNote : updateNote;

    dispatch(action(noteData));
    handleModalClose();
  };

  const handleCloseBtnClick = () => {
    handleModalClose();
    return;
  };
  console.log(noteId);
  return (
    <>
      {noteId ? (
        <Portal id={'edit-portal'}>
          <ModalForm
            name={name}
            category={category}
            content={content}
            handleInputChange={handleInputChange}
            handleApplyBtnClick={handleApplyBtnClick}
            handleCloseBtnClick={handleCloseBtnClick}
          />
        </Portal>
      ) : (
        <ModalForm
          name={name}
          category={category}
          content={content}
          handleInputChange={handleInputChange}
          handleApplyBtnClick={handleApplyBtnClick}
          handleCloseBtnClick={handleCloseBtnClick}
        />
      )}
    </>
  );
}
