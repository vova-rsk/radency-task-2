import StyledCell from './TableCell.styled';

export default function TableCell(props) {
  const { cellType = 'general', children } = props;

  return <StyledCell>{children}</StyledCell>;
}
