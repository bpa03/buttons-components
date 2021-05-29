import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  height: auto;
  padding: 3em 0;
  margin: 0 auto;

  @media only screen and (min-width: 930px) {
    width: 90;
  }

  @media only screen and (min-width: 1100px) {
    & {
      width: 80%;
    }
  }
`

export const Title = styled.h1`
  font-size: 1.6em;
  font-weight: 500;
  font-style: normal;
  color: #4F4F4F;

  @media only screen and  (max-width: 930px) {
    & {
      text-align: center;
      font-size: 1.9em;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  margin: 30px 0;

  @media only screen and (min-width: 850px) {
    & {
      flex-direction: row;
    }
  }

  @media only screen and (max-width: 730px) {
    & {
      margin: 20px 0;
      flex-wrap: wrap;
    }
  }

  @media only screen and (min-width: 930px) {
    & {
      justify-content: initial;
      flex-direction: row;
    }
  }
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

  @media screen and (max-width: 730px) {
    margin: 20px 0;
  }

  @media screen and (max-width: 930px) {
    & {
      flex-basis: 45%;
    }
    & button {
      margin: 0 auto;
    }
    & p {
      text-align: center;
    }
  }
`;

export const BoxTitle = styled.p`
  font-size: .92em;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 12px;
  color: rgba(51, 51, 51, 1);
`;