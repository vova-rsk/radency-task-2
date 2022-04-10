import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import usePortal from '../../../hooks/usePortal';

interface IProps { 
  id: string;
  children?: ReactNode;
}

const Portal = ({ id, children }:IProps) => {
  const target = usePortal(id);
  
  return createPortal(children, target);
};

export default Portal;
