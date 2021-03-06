import React from "react";

import { Title, Container, Row, Wrapper, Box, BoxTitle } from "./Styles";
import { Button } from "../../common/Button/Button.jsx";

export const Home = () => {
  return (
    <Container>
      <Title>Buttons</Title>
      <Wrapper>
        <Row>
          <Box>
            <BoxTitle> {"<Button/>"} </BoxTitle>
            <Button>Default</Button>
          </Box>
          <Box>
            <BoxTitle> {"&:hover, &:active"} </BoxTitle>
            <Button hover>Default</Button>
          </Box>
        </Row>
        <Row>
          <Box>
            <BoxTitle> {"<Button variant=”outline”/>"} </BoxTitle>
            <Button variant="outline" color="primary"> Default </Button>
          </Box>
          <Box>
            <BoxTitle> {"&:hover, &:active"} </BoxTitle>
            <Button variant="outline" color="primary" hover> Default </Button>
          </Box>
        </Row>
        <Row>
          <Box>
            <BoxTitle> {"<Button variant=”text”/>"} </BoxTitle>
            <Button variant="text" color="primary"> Default </Button>
          </Box>
          <Box>
            <BoxTitle> {"&:hover, &:active"} </BoxTitle>
            <Button variant="text" color="primary" hover> Default </Button>
          </Box>
          <Box>
            <BoxTitle> {"<Button disableShadow/>"} </BoxTitle>
            <Button color="primary" disableShadow > Default </Button>
          </Box>
          <Box>
            <BoxTitle> {"<Button disabled/>"} </BoxTitle>
            <Button color="primary" disabled > Default </Button>
          </Box>
        </Row>
        <Row>
          <Box style={{ flexBasis: "50%" }}>
            <BoxTitle> {"<Button startIcon=”local_grocery_store”/>"} </BoxTitle>
            <Button color="primary" startIcon="local_grocery_store" > Default </Button>
          </Box>
          <Box style={{ flexBasis: "50%" }}>
            <BoxTitle> {"<Button endIcon=”local_grocery_store”/>"} </BoxTitle>
            <Button color="primary" endIcon="local_grocery_store" > Default </Button>
          </Box>
        </Row>
        <Row>
          <Box>  
            <BoxTitle> {"<Button size=”sm”/>"} </BoxTitle>
            <Button color="primary" size="sm"> Default </Button>
          </Box>
          <Box>  
            <BoxTitle> {"<Button size=”md”/>"} </BoxTitle>
            <Button color="primary" size="md"> Default </Button>
          </Box>
          <Box>  
            <BoxTitle> {"<Button size=”lg”/>"} </BoxTitle>
            <Button color="primary" size="lg"> Default </Button>
          </Box>
        </Row>
        <Row>
          <Box>
            <BoxTitle> {"<Button/>"} </BoxTitle>
            <Button> Default </Button>
          </Box>
          <Box>
            <BoxTitle> {"<Button color=”primary”/>"} </BoxTitle>
            <Button color="primary"> Default </Button>
          </Box>
          <Box>
            <BoxTitle> {"<Button color=”secondary”/>"} </BoxTitle>
            <Button color="secondary"> Default </Button>
          </Box>
          <Box>
            <BoxTitle> {"<Button color=”danger”/>"} </BoxTitle>
            <Button color="danger"> Default </Button>
          </Box>
        </Row>
        <Row>
          <Box>
            <BoxTitle> {"&:hover, &:active"} </BoxTitle>
            <Button hover> Default </Button>
          </Box>
          <Box>
            <Button color="primary" hover> Default </Button>
          </Box>
          <Box>
            <Button color="secondary" hover> Default </Button>
          </Box>
          <Box>
            <Button color="danger" hover> Default </Button>
          </Box>
        </Row>
      </Wrapper>
    </Container>
  );
};
