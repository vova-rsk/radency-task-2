import styled from '@emotion/styled';
import { TableCell } from '@mui/material';

const StyledCell = styled(TableCell)`
  height: 36px;

  &:first-of-type {
    background-color: tomato;
  }
`;

export default StyledCell;
