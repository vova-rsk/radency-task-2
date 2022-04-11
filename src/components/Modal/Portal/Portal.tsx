import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IProps { 
  id: string;
  children?: ReactNode;
}

const Portal = ({ id, children }:IProps) => {
  const target = document.querySelector(id);
  const portal = target && createPortal(children, target);
  
  return portal;
};

export default Portal;
