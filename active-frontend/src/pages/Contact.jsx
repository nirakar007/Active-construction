import React, { useEffect } from "react";
import ContactForm from "../components/specific-components/ContactForm";
import Footer from "../components/specific-components/Footer";
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
      <div className="mt-32">
      <Footer/>
      </div>
    </div>
  );
}

export default Contact;
