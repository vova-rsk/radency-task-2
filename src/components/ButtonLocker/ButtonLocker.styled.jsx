import styled from '@emotion/styled';

const Container = styled.div`
  pointer-events: ${props => (props.block ? 'none' : 'all')};
`;

export default Container;
