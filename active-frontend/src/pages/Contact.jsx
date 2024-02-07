import React from "react";
import ContactForm from "../components/specific-components/ContactForm";

function Contact() {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 mt-10">
        <h1 className="font-semibold text-2xl text-blue-900">
        Questions or Feedback?
        </h1>
        <h2 className="text-lg text-blue-900"> Reach out to us here!</h2>
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;
