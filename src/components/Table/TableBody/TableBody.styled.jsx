import styled from '@emotion/styled';
import { TableCell } from '@mui/material';
import { TABLE_TYPE } from '../../../utils/constants';

const StyledTableCell = styled(TableCell)`
  margin: 0;
  padding: 5px 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.167;
  color: ${props => (props.idx === 1 ? '#000' : 'rgb(131, 131, 131)')};

  &:first-of-type {
    width: 40px;
  }

  &:nth-of-type(2) {
    width: ${props => (props.type === TABLE_TYPE.NOTES ? '200px' : '400px')};
  }

  &:nth-of-type(3) {
    width: ${props => (props.type === TABLE_TYPE.NOTES ? '160px' : '300px')};
  }

  &:nth-of-type(4) {
    width: ${props => (props.type === TABLE_TYPE.NOTES ? '160px' : '300px')};
  }

  &:nth-of-type(5) {
    width: ${props => (props.type === TABLE_TYPE.NOTES ? '320px' : '300px')};
  }

  &:nth-of-type(6) {
    width: '160px';
  }
`;

export default StyledTableCell;
