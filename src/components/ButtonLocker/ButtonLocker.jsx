import { useSelector } from 'react-redux';
import { getButtonLockStatus } from '../../redux/notes/notes-selectors';
import Container from './ButtonLocker.styled';

const ButtonLocker = ({ children }) => {
  const isButtonLocked = useSelector(getButtonLockStatus);

  return <Container block={isButtonLocked}>{children}</Container>;
};

export default ButtonLocker;
