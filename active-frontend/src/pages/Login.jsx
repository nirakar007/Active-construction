import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Reveal from "../animation/Reveal";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fieldsFilled, setFieldsFilled] = useState(true);
  const [incorrectCredentials, setIncorrectCredentials] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  const handleLogin = async () => {
    try {
      // Reset error messages
      setFieldsFilled(true);
      setIncorrectCredentials(false);

      // Check if both fields are filled
      if (!username || !password) {
        setFieldsFilled(false);
        return;
      }

      const response = await axios.post("http://localhost:5000/auth/signin", {
        username,
        password,
      });

      if (response.status === 200) {
        handleClick("/");
        console.log("Login successful");
      } else {
        setIncorrectCredentials(true);
        console.error("Failed to login");

        // Set a timer to reset the error state after 5 seconds (adjust as needed)
        setTimeout(() => {
          setIncorrectCredentials(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // Clean up the timer if the component unmounts or the error state changes
    const timerId = setTimeout(() => {
      setFieldsFilled(true);
    }, 5000);

    return () => clearTimeout(timerId);
  }, [fieldsFilled]);

  return (
    <div className="mt-10">
      <Reveal>
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-jost text-2xl m-5">Login</h2>
          <form className="flex flex-col justify-center gap-2">
            <label className="flex flex-col items-center opacity-60 pt-4">
              Email:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mx-3 text-lg font-jost p-3 bg-transparent focus:bg-white focus:border-sky-500 border-b-2 focus:outline-none focus:border-b-2 h-[5vh]"
            />
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

            {!password && incorrectCredentials && (
              <p className="text-red-700 text-sm font-jost flex justify-center opacity-70">
                Incorrect Email or Password.
              </p>
            )}

            {!fieldsFilled && (
              <p className="text-red-700 text-sm font-jost flex justify-center opacity-70">
                All fields must be filled.
              </p>
            )}

            <button
              type="button"
              onClick={handleLogin}
              className="mt-4 shadow bg-sky-400 hover:bg-teal-400 p-3 rounded-md text-white font-semibold transition duration-200 ease-in-out"
            >
              Login
            </button>
            <span className="flex justify-center gap-2 mt-2">
              <p className="font-jost text-sm">Don't have an account?</p>
              <p
                className="font-jost text-sm hover:text-green-500 hover:font-semibold transition duration-200 ease-in-out cursor-pointer"
                onClick={() => handleClick("/register")}
              >
                Register
              </p>
            </span>
          </form>
        </div>
      </Reveal>
    </div>
  );
}

export default Login;
