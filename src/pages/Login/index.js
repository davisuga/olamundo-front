import React from "react";
import Form from "../../components/LoginForm";
import { Container, Header, Content } from "./styles";

function Login() {
  return (
    <div className="Login">
      <Header />
      <Container>
        <Content>
          <Form />
        </Content>
      </Container>
    </div>
  );
}

export default Login;
