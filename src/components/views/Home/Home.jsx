import React from "react";


import { Title, Container, Row, Wrapper } from "./Styles";
import { Button } from '../../common/Button/Button.jsx';

export const Home = () => {
  return (
    <Container>
      <Title>Buttons</Title>
      <Row>
        <Button>
          Default
        </Button>
      </Row>
    </Container>
  );
};
