import StyledCell from './TableCell.styled';

export default function TableCell(props) {
  const { children } = props;

  return <StyledCell>{children}</StyledCell>;
}
