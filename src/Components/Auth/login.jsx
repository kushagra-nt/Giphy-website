import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase-config";
import { useNavigate } from "react-router-dom";

const Login = ({ user, setUser }) => {
  const [loginForm, setLoginForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loginForm) {
      //login
      try {
        const currentUser = await signInWithEmailAndPassword(auth, email, password);
        // setUser(currentUser);
        navigate("/");
      } catch (err) {
        setErrorMessage("failed to login");
        console.log(err);
      }
    } else {
      // sign in
      try {
        const currentUser = await createUserWithEmailAndPassword(auth, email, password);
        setUser(currentUser);
        navigate("/");
      } catch (err) {
        setErrorMessage("failed to signin");
        console.log(err);
      }
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          {loginForm ? "Login" : "Signup"}
        </h2>

        <p className="text-center text-red-500 mt-5">{errorMessage}</p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                className="block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                vals={password}
                className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSubmit}
            >
              {loginForm ? "Login" : "Signup"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-md text-gray-500">
          {loginForm ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => {
              setLoginForm(!loginForm);
            }}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            {loginForm ? "Signup" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
