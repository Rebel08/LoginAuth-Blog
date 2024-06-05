// import { useState, useEffect } from "react";
import React, { useEffect, useState } from "react";
import { auth} from "./firebase";
// import AuthPage from "./AuthPage";
import "../App.css";
import Home from "./Home";
import Left from "./Left";
import Center from "./Center";
import Right from "./Right";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    localStorage.setItem("user", JSON.stringify(loggedInUser));
  };

  // const handleLogout = () => {
  //   setUser(null);
  //   localStorage.removeItem("user");
  // };
  
  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <>
      {/* {user ? (
        
      ) : (
        <AuthPage onLogin={handleLogin} />
      )} */}
      <div className="grid place-items-center mt-10">
          <div className="flex gap-10">
            <Left onLogout={handleLogout} />
            <Center />
            <Right />
          </div>
        </div>
    </>
  );
}

export default App;
