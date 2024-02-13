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
      const userData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        meetingDate: formData.meetingDate,
      };

      // Add user
      const addUserResponse = await axios.post(
        "http://localhost:8080/user/add",
        userData
      );
      console.log("User added successfully: ", addUserResponse.data);

      // Get user ID
      const userId = addUserResponse.data.userId;

      if (!userId) {
        console.error("User ID is undefined or missing in the response.");
        return;
      }

      // Upload image
      const imageFormData = new FormData();
      imageFormData.append("file", formData.file);

      const uploadImageResponse = await axios.post(
        `http://localhost:8080/user/uploadImage/${userId}`,
        imageFormData
      );
      console.log("Image uploaded successfully: ", uploadImageResponse.data);
      console.log("Form submitted successfully");
      alert("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting the form", error);
      alert("Error submitting the form");
    }
  };

  return (
    <div className="flex justify-evenly items-center">
      <div className="flex items-center gap-1">
        <TextAnimation text="Questions or Feedback?" />
      </div>
      <div className="flex justify-between items-center p-3 bg-sky-50 rounded-md w-[50%] shadow-sm mt-5">
        <form onSubmit={handleSubmit} className="flex">
          <div>
            <div className="flex flex-col gap-2 mb-2 p-7">
              <label className="w-full">
                <h3 className="text-xs mb-1 font-medium">Name:</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="text-sm p-2 bg-white rounded-sm focus:border-sky-500 focus:outline-none focus:bg-white h-[5vh]"
                />
              </label>
              <br />

              <label>
                <h3 className="text-xs mb-1 font-medium">Email:</h3>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="text-sm p-2 bg-white rounded-sm border-sky-900 focus:border-sky-500 focus:outline-none focus:bg-white h-[5vh]"
                />
              </label>
              <br />

              <label>
                <h3 className="text-xs mb-1 font-medium">Phone:</h3>
                <input
                  type="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="text-sm p-2 bg-white rounded-sm border-sky-900 focus:border-sky-500 focus:outline-none focus:bg-white h-[5vh]"
                />
              </label>
              <br />

              <label>
                <h3 className="text-xs mb-1 font-medium">Meeting Date:</h3>
                <DatePicker
                  name="meetingDate"
                  placeholderText="Set Date"
                  selected={formData.meetingDate}
                  onChange={(date) =>
                    handleChange({
                      target: { name: "meetingDate", value: date },
                    })
                  }
                  showTimeSelect
                  dateFormat="Pp"
                  className="text-sm p-2 bg-white rounded-sm border-sky-900 focus:border-sky-500 focus:outline-none focus:bg-white h-[5vh]"
                />
              </label>
              <br />
            </div>
            <br />
          </div>

          <div className="border-l px-2 w-[300px]">
            <label>
              <h3 className="text-xs">Message</h3>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full h-[30vh] mt-2 p-2 focus:outline-none rounded-sm"
              ></textarea>
            </label>
          </div>

          <div className="border-l-2 px-2 flex flex-col gap-2 overflow-hidden">
            <label>
              <h3 className="text-sm font-medium mb-2">
                Upload Reference Images
              </h3>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                accept="image/*"
                className="text-xs text-gray-400"
                max="5000000"
              />
            </label>
            <br />

            {formData.filePreview && (
              <img
                src={formData.filePreview}
                alt="Preview"
                className="p-2 rounded-md"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-sky-500 p-3 rounded-md text-sm font-semibold text-white hover:bg-sky-400"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
