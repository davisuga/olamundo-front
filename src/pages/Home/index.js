import React from "react";
import Form from "../../components/RegisterForm";
import { Container, Header, Content, Presentation } from "./styles";
function Home() {
  return (
    <div className="Home">
      <Header />
      <Container>
        <Content>
          <Presentation />
          <Form />
        </Content>
      </Container>
    </div>
  );
}

export default Home;
