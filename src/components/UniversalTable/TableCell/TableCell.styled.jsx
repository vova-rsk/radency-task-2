import styled from '@emotion/styled';
import { TableCell } from '@mui/material';

const StyledCell = styled(TableCell)`
  padding-top: 5px;
  padding-bottom: 5px;

  &:first-of-type {
    background-color: tomato;
  }

  &:not(:first-of-type) {
    margin-top: 5px;
  }
`;

export default StyledCell;
