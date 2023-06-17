import React, { useState } from 'react';
import "./App.css";
import { SignIn } from "./Components/Login";
import { Register } from "./Components/Register";
import LoginSuccess from "./Components/LoginSuccess";
import RegisterSuccess from './Components/RegisterSucccess';

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const handleLoginSuccess = (userData) => {
    setUserData(userData);
    setIsLoggedIn(true);
  };

  const handleRegisterSuccess = (userData) => {
    setUserData(userData);
    setIsLoggedIn(true);
    setCurrentForm("registersuccess");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentForm("login");
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          {currentForm === "loginsuccess" ? (
            <LoginSuccess username={userData.username} onLogout={handleLogout} />
          ) : (
            <RegisterSuccess username={userData.username} onLogout={handleLogout} />
          )}
        </>
      ) : (
        <>
          {currentForm === "register" ? (
            <Register
              onFormSwitch={toggleForm}
              onFormSubmit={handleRegisterSuccess}
            />
          ) : (
            <SignIn
              onFormSwitch={toggleForm}
              onFormSubmit={handleLoginSuccess}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
