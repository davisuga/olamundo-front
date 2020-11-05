import React, { useState } from "react";
import { Input, Container, Title, Button } from "../RegisterForm/styles";
function Form({ action }) {
  return (
    <Container>
      <Title>Login</Title>
      <Input placeholder="email"></Input>
      <Input placeholder="senha" />
      <Button onClick={() => action}>Entrar</Button>
    </Container>
  );
}

export default Form;
