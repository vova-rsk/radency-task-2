import StyledCell from './TableCell.styled';

function TableCell({ cellType, children }) {
  return <StyledCell>{children}</StyledCell>;
}

export default TableCell;
