import React from "react";
import ContactForm from "../components/specific-components/ContactForm";
import Reveal from "../animation/Reveal";

function Contact() {
  return (
    <div className="mt-16">
      <Reveal>
      <ContactForm />
      </Reveal>
    </div>
  );
}

export default Contact;
