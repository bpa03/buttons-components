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
      <Row>
        <Button color="primary" variant="text" disabled>
          Default
        </Button>
      </Row>
      <Row>
        <Button color="secondary" variant="text">
          Default
        </Button>
      </Row>
      <Row>
        <Button color="danger" variant="text">
          Default
        </Button>
      </Row>
    </Container>
  );
};
