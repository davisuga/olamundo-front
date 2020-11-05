import React, { useState } from "react";
import { Input, Container, Title, Button } from "./styles";

function Form({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <Container>
      <Title>Registre-se</Title>
      <Input
        onChange={({ target }) => setEmail(target.value)}
        value={email}
        placeholder="email"
      ></Input>
      <Input
        onChange={({ target }) => setName(target.value)}
        value={name}
        placeholder="nome completo"
      />
      <Input
        onChange={({ target }) => setPassword(target.value)}
        value={password}
        placeholder="senha"
        type="password"
      />
      <Input
        onChange={({ target }) => setPasswordConfirmation(target.value)}
        value={passwordConfirmation}
        placeholder="confirme sua senha"
        type="password"
        required
      />
      <Button onClick={(e) => onSubmit(email, name, password)}>
        Comece agora
      </Button>
    </Container>
  );
}

export default Form;
