import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: auto;
  padding: 3em 0;
  margin: 0 auto;
`
export const Title = styled.h1`
  font-size: 1.6em;
  font-weight: 500;
  font-style: normal;
  color: #4F4F4F;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 38px 0;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`

export const Box = styled.div`
  display: block;
  flex-basis: 25%;
`;

export const BoxTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 12px;
  color: rgba(51, 51, 51, 1);
  font-family: 'Ubuntu Mono', var(--font-poppins);
`;