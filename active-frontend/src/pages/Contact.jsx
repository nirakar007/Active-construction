import React, { useEffect } from "react";
import ContactForm from "../components/specific-components/ContactForm";
import Reveal from "../animation/Reveal";

function Contact() {
  useEffect(() => {
    window.scrollTo(0,0);
  },[])
  return (
    <div className="mt-16">
      <Reveal>
        <div className="flex justify-evenly gap-10">
          <ContactForm />
          {/* <span className="mt-16"><MeetingForm /></span> */}
        </div>
      </Reveal>
    </div>
  );
}

export default Contact;
