import React from "react";
import Container from "./components/Container";
import ImageContainer from "./components/ImageContainer";
import Card from "./components/Card";
import ContactContainer from "./components/ContactContainer";
import ContactForm from "./components/ContactForm";
import SubmitButton from "./components/SubmitButton";

function App() {
  return (
    <Container heading="LET'S CONNECT">
      <ImageContainer>
        <Card
          imageLocation="image/location.png"
          heading="OUR MAIN OFFICE"
          content="SoHo 94 Broadway St New York, NY 1001"
        />
        <Card
          imageLocation="image/call.png"
          heading="PHONE NUMBER"
          content="234-9876-5400 888-0123-4567 (Toll Free)"
        />
        <Card
          imageLocation="image/fax.png"
          heading="FAX"
          content="1-234-567-8900"
        />
        <Card
          imageLocation="image/email.png"
          heading="MAIL"
          content="hello@theme.com"
        />
      </ImageContainer>
      <ContactContainer>
        <ContactForm />
        <SubmitButton />
      </ContactContainer>
    </Container>
  );
}

export default App;
