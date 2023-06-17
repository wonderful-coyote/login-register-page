import React from 'react';

export default function RegisterSuccess(props) {
  const handleLogout = () => {
    props.onLogout();
  };

  return (
    <>
      <div className="auth-form-container">
        <h2>Welcome aboard, {props.username}!</h2>
        <p>We're excited to have you join us. Get ready for an incredible journey!</p>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}
