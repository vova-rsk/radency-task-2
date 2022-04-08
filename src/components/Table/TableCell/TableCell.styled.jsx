import styled from '@emotion/styled';
import { TableCell } from '@mui/material';

const StyledCell = styled(TableCell)`
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.167;
  color: rgb(131, 131, 131);

  padding: 5px 10px;

  &:nth-of-type(1) {
    width: 40px;
  }

  &:nth-of-type(2) {
    width: 200px;
  }

  &:nth-of-type(3) {
    width: 140px;
  }

  &:nth-of-type(4) {
    width: 140px;
  }

  &:nth-of-type(5) {
    width: 370px;
  }

  &:nth-of-type(6) {
    width: 160px;
  }
`;

export default StyledCell;
