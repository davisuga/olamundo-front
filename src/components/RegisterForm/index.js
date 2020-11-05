import React from "react";
import { Input, Container, Title, Button } from "./styles";

function Form() {
  return (
    <Container>
      <Title>Registrar</Title>
      <Input placeholder="email"></Input>
      <Input placeholder="nome completo" />
      <Input placeholder="senha" />
      <Input placeholder="confirme sua senha" />
      <Button>Comece agora</Button>
    </Container>
  );
}

export default Form;
