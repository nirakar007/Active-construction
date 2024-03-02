import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextAnimation from "../../animation/TextAnimation";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null,
    filePreview: null,
    meetingDate: null,
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      const selectedFile = e.target.files[0];
      setFormData({
        ...formData,
        file: selectedFile,
        filePreview: URL.createObjectURL(selectedFile),
      });
    } else if (e.target.name === "meetingDate") {
      // Handle date picker value
      setFormData({
        ...formData,
        [e.target.name]: e,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const contactFormData = new FormData();
      contactFormData.append("name", formData.name);
      contactFormData.append("email", formData.email);
      contactFormData.append("phone", formData.phone);
      contactFormData.append("message", formData.message);
      contactFormData.append("meetingDate", formData.meetingDate);
  
      // Submit contact form
      const submitContactFormResponse = await axios.post(
        "http://localhost:5000/contact/submit",
        contactFormData
      );
      console.log("Contact form submitted successfully: ", submitContactFormResponse.data);
  
      // Get user ID from the response (if needed)
      const userId = submitContactFormResponse.data.userId;
  
      if (!userId) {
        console.error("User ID is undefined or missing in the response.");
        return;
      }
  
      console.log("Form submitted successfully");
      alert("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting the form", error);
      alert("Form submitted successfully");

    }
  };

  return (
    <div className="m-5 border-black">
      <h1 className="animate-bounce textBoink font-jost text-2xl">
        Contact Us Now!{" "}
      </h1>
      <div className="flex justify-between items-center shadow-sm mt-5">
        <form
          onSubmit={handleSubmit}
          className="flex p-5 rounded-md bg-neutral-50"
        >
          {/* credentials */}
          <div className="mx-2">
            <div className="flex flex-col gap-5">
              <label className="w-full">
                <h3 className="text-xs mb-1 font-medium opacity-70 font-jost">
                  Name:
                </h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="text-lg p-2 bg-transparent focus:bg-white focus:border-sky-500 border-b-2 focus:outline-none focus:border-b-2 h-[5vh]"
                />
              </label>

              <label>
                <h3 className="text-xs mb-1 font-medium font-jost">Email:</h3>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="font-jost text-lg p-2 bg-transparent focus:bg-white focus:border-sky-500 border-b-2 focus:outline-none focus:border-b-2 h-[5vh]"
                />
              </label>

              <label>
                <h3 className="text-xs mb-1 font-medium  opacity-70 font-jost">
                  Phone:
                </h3>
                <input
                  type="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="font-jost text-lg p-2 bg-transparent focus:bg-white  focus:border-sky-500 border-b-2 focus:outline-none focus:border-b-2 h-[5vh]"
                />
              </label>
              <label>
              <h3 className="text-xs mt-2 font-jost">Request Meeting Date:</h3>
              <input
                name="meetingDate"
                selected={formData.meetingDate}
                onChange={(date) =>
                  handleChange({ target: { name: "meetingDate", value: date } })
                }
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="MMMM d, yyyy h:mm aa"
                className="w-full p-2 bg-transparent focus:bg-white focus:border-sky-500 border-b-2 focus:outline-none focus:border-b-2"
              />
            </label>
            </div>
          </div>

          <div className="mx-4 pt-1 w-[300px]">
            <label>
              <h3 className="text-xs font-jost">Message</h3>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="font-jost w-full h-[30vh] mt-2 p-2 focus:outline-none "
              ></textarea>
            </label>
            
          </div>

          <button
            type="submit"
            className="shadow bg-sky-400 hover:bg-green-400 hover:shadow-sky-400 hover:shadow-md p-3 rounded-md text-white font-semibold transition duration-200 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
