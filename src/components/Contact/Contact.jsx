import React from "react";
import {
  Section,
  ContactContainer,
  ContactTitle,
  ContactDescription,
  PhoneContainer,
  PhoneLabel,
  PhoneNumber,
} from "./Contact.styled";

const Contact = ({ t }) => {
  return (
    <Section id="contact">
      <ContactContainer>
        <ContactTitle>{t("contact.title")}</ContactTitle>
        <ContactDescription>{t("contact.description")}</ContactDescription>

        <PhoneContainer>
          <PhoneLabel>{t("contact.phone", "Phone")}</PhoneLabel>
          <PhoneNumber>+381 64 123 4567</PhoneNumber>
        </PhoneContainer>
      </ContactContainer>
    </Section>
  );
};

export default Contact;
