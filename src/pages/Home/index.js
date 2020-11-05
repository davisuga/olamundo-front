import React from "react";
import Form from "../../components/RegisterForm";
import { Container, Header, Content, Presentation } from "./styles";
function Home() {
  const registerUser = (email, name, password) => {
    console.log(email);
  };
  return (
    <div className="Home">
      <Header />
      <Container>
        <Content>
          <Presentation />
          <Form onSubmit={registerUser} />
        </Content>
      </Container>
    </div>
  );
}

export default Home;
