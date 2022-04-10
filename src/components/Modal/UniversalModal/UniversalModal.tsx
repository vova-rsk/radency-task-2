import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { STATUS } from '../../../utils/constants';
import { getNoteById } from '../../../redux/notes/notes-selectors';
import ModalForm from '../ModalForm';
import Portal from '../Portal';
import getCurrentFormatedDate from '../../../utils/getCurrentFormatedDate';
import getDateIntervalFromContent from '../../../utils/getDateIntervalFromContent';
import {
  addNote,
  updateNote,
  changeCreationBarVisibility,
} from '../../../redux/notes/notes-actions';

interface IProps { 
  noteId?: string;
  handleModalClose: () => void;
}

interface INote { 
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: [string, string] | null;
  status: string;
}

const UniversalModal = (props:IProps) => {
  const { noteId, handleModalClose } = props;

  const noteToEdit = useSelector(getNoteById(noteId));
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (noteToEdit) { 
      const { category, name, content } = noteToEdit;

      setName(name);
      setCategory(category);
      setContent(content);
    }
  }, [noteToEdit]);

  const handleInputChange = (name:string, value:string) => {
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

    let noteData:INote = {
      id: nanoid(7),
      name,
      created: getCurrentFormatedDate(),
      category,
      content,
      dates: getDateIntervalFromContent(content),
      status: STATUS.ACTIVE,
    };

    if (noteToEdit) {
      const { id, created, status } = noteToEdit;
      noteData = { ...noteData, id, created, status };
    }

    const action = noteToEdit ? updateNote : addNote;

    dispatch(action(noteData));
    noteToEdit && dispatch(changeCreationBarVisibility());
    handleModalClose();
  };

  const handleCloseBtnClick = () => {
    noteToEdit && dispatch(changeCreationBarVisibility());
    handleModalClose();
    return;
  };

  return (
    <>
      {noteId ? (
        <Portal id={'edit-note-container'}>
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
};

export default UniversalModal;
