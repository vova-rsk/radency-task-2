import { useSelector } from 'react-redux';
import { getButtonLockStatus } from '../../redux/notes/notes-selectors';
import Container from './ButtonLocker.styled';

export default function ButtonLocker({ children }) {
  const isButtonLocked = useSelector(getButtonLockStatus);

  return <Container block={isButtonLocked}>{children}</Container>;
}
