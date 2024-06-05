import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  auth,
} from "./components/firebase";

const AuthPage = ({ onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const toggleAuthMode = () => {
    setIsRegistering((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        setShowAlert(true);
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (userCredential.user) {
          onLogin(userCredential.user);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isFormComplete = formData.email && formData.password;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isRegistering ? "Register" : "Login"}
        </h2>
        {showAlert && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">
              Registration successful! Please go to the login page to log in.
            </span>
          </div>
        )}
        <form onSubmit={handleSubmit} autoComplete="off">
          {isRegistering && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="form-input mt-1 block w-full outline-none"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="form-input mt-1 block w-full outline-none"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="form-input mt-1 block w-full outline-none"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className={`${
              isFormComplete ? "bg-blue-500 cursor-pointer" : "bg-gray-400"
            } text-white px-4 py-2 rounded-md`}
            disabled={!isFormComplete}
          >
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>
        <button
          className="mt-4 text-blue-500 hover:text-blue-700 text-sm"
          onClick={toggleAuthMode}
        >
          {isRegistering
            ? "Already have an account? Login"
            : "Don't have an account? Register"}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
