import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { getButtonLockStatus } from '../../redux/notes/notes-selectors';

interface IProps{ 
  children:ReactNode;
}

const ButtonLocker = ({ children }:IProps) => {
  const isButtonLocked = useSelector(getButtonLockStatus);

  return (
    <div style={{ pointerEvents: isButtonLocked ? 'none' : 'all' }}>
      { children }
    </div>);
};

export default ButtonLocker;
