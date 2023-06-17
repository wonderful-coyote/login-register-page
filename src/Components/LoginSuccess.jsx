import React from 'react';

export default function LoginSuccess(props) {
  const handleLogout = () => {
     props.onFormSwitch();
  };

  return (
    <>
      <div className="auth-form-container">
        <h2>Welcome back, {props.username}!</h2>
        <p>We're thrilled to have you back with us. Enjoy your experience!</p>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}
