import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail = ({ name, email, message }: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission</Preview>
      <Body style={{ fontFamily: "sans-serif", backgroundColor: "#f9fafb" }}>
        <Container style={{ padding: "20px", backgroundColor: "#fff" }}>
          <Section>
            <Text style={{ fontSize: "18px", fontWeight: "bold" }}>
              New Contact Form Submission
            </Text>
            <Text><strong>Name:</strong> {name}</Text>
            <Text><strong>Email:</strong> {email}</Text>
            <Text><strong>Message:</strong></Text>
            <Text>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;
