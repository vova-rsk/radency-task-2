import styled from '@emotion/styled';

const Container = styled.div`
  padding: 40px 0;
  
  & > div:nth-of-type(2) {
    display: flex;
    justify-content: end;
    margin-top: 20px;
    min-height:74px;
  }

  & > div:last-of-type {
    margin-top: 60px;
  }
`;

export default Container;
