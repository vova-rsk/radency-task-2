import styled from '@emotion/styled';

export const Text = styled.span`
  color: ${props => (props.idx === 1 ? '#000' : 'rgb(131, 131, 131)')};
`;
