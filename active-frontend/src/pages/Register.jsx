import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Reveal from "../animation/Reveal";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [fieldsFilled, setFieldsFilled] = useState(true);
  const [registrationError, setRegistrationError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState("");

  const navigate = useNavigate();
  const jwtToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDk2MjA4MDksImV4cCI6MTcwOTYyMjI0OX0.Bg2VeBKf-KNcro98dmYJXVkcrshLDmWxu4Wh53fFB6I";

  const handleClick = (path) => {
    navigate(path);
  };

  const handleRegister = async () => {
    try {
      // Reset error messages
      setRegistrationError(null);
      setFieldsFilled(true);
      setPasswordsMatch(true);

      // Check if all fields are filled
      if (!email || !password || !confirmPassword) {
        setFieldsFilled(false);
        return;
      }

      // Check if passwords match before sending the registration request
      if (password !== confirmPassword) {
        setPasswordsMatch(false);
        return;
      }

      const response = await axios.post(
        "http://localhost:8080/auth/register",
        {
          email,
          password,
          confirmPassword,
          role,
        },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`, 
          },
        }
      );

      if (response.status === 201) {
          // Assuming the new token is returned in the login response
      const newToken = loginResponse.data.token;

      // Store the new token securely, for example, in localStorage
      localStorage.setItem(jwtToken, newToken)
        handleClick("/login");
        console.log("Registration successful");
        alert("Registration Successful.");
      } else {
        // Check if the response body is not empty before parsing it as JSON
        const responseBody = await response.text();
        const isJson = responseBody && responseBody.trim().startsWith("{");

        if (isJson) {
          const data = JSON.parse(responseBody);
          setRegistrationError(data.message || "Failed to register");
        } else {
          setRegistrationError("Failed to register. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // Clean up the timer if the component unmounts or the error state changes
    const timerId = setTimeout(() => {
      setFieldsFilled(true);
      setPasswordsMatch(true);
    }, 5000);

    return () => clearTimeout(timerId);
  }, [fieldsFilled, passwordsMatch]);

  return (
    <div className="p-5">
      <Reveal>
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-jost text-2xl m-5 mb-10">Register</h2>
          <form className="flex flex-col justify-center gap-2">
            <label className="flex flex-col items-center opacity-60 pt-4">
              Email:
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="m-3 text-lg font-jost p-3 bg-transparent focus:bg-white focus:border-sky-500 border-b-2 focus:outline-none focus:border-b-2 h-[5vh]"
              />
            </label>
            <label className="flex flex-col items-center opacity-60 pt-5">
              Password:
              <span className="flex">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mx-3 text-lg p-3 font-jost bg-transparent focus:bg-white focus:border-sky-500 border-b-2 focus:outline-none focus:border-b-2 h-[5vh]"
                />
                {/* Show Password Button */}
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => setShowPassword(false)}
                    className="cursor-pointer ml-2"
                  />
                ) : (
                  <FaEye
                    onClick={() => setShowPassword(true)}
                    className="cursor-pointer ml-2"
                  />
                )}
              </span>
            </label>
            <label className="flex flex-col items-center opacity-60 pt-5">
              Confirm Password:
              <span className="mt-2 flex">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mx-3 text-lg p-3 font-jost bg-transparent focus:bg-white focus:border-sky-500 border-b-2 focus:outline-none focus:border-b-2 h-[5vh]"
                />
                {showConfirmPassword ? (
                  <FaEyeSlash
                    onClick={() => setShowConfirmPassword(false)}
                    className="cursor-pointer ml-2"
                  />
                ) : (
                  <FaEye
                    onClick={() => setShowConfirmPassword(true)}
                    className="cursor-pointer ml-2"
                  />
                )}
              </span>
            </label>
            <label className="flex gap-16 items-center opacity-60">
              Role:
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="m-3 text-sm font-jost bg-transparent focus:bg-white focus:border-sky-500 border-b-2 focus:outline-none focus:border-b-2 h-[5vh]"
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </label>
            {!passwordsMatch && (
              <p className="text-red-700 text-sm font-jost flex justify-center opacity-70">
                Passwords do not match.
              </p>
            )}
            {!fieldsFilled && (
              <p className="p-2 text-red-700 text-sm font-jost flex justify-center opacity-70">
                All fields must be filled.
              </p>
            )}
            {registrationError && (
              <p className="p-2 text-red-700 text-sm font-jost flex justify-center opacity-70">
                {registrationError}
              </p>
            )}
            <button
              type="button"
              onClick={handleRegister}
              className="mt-4 shadow bg-sky-400 hover:bg-blue-400 p-3 rounded-md text-white font-semibold transition duration-200 ease-in-out"
            >
              Register
            </button>
            <span className="flex justify-center gap-2 mt-2">
              <p className="font-jost text-sm">Already have an account?</p>
              <p
                className="font-jost text-sm hover:text-green-500 hover:font-semibold transition duration-200 ease-in-out cursor-pointer"
                onClick={() => handleClick("/login")}
              >
                Login
              </p>
            </span>
          </form>
        </div>
      </Reveal>
    </div>
  );
}

export default Register;
