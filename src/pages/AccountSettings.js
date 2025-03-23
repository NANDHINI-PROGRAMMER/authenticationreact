import React from "react";
import "../styles/Auth.css"; // Ensure this file contains proper styling

function AccountSettings() {
  return (
    <div className="account-container">
      {/* Account Settings Header */}
      <h2 className="account-title">Account Settings</h2>

      {/* Profile Section */}
      <div className="profile-card">
        <img src="/th.jpg" alt="Profile" className="profile-img" />
        <div className="profile-info">
          <h3 className="profile-name">Marry Doe</h3>
          <p className="profile-email">Marry@gmail.com</p>
        </div>
      </div>

      {/* Description Section */}
      <p className="profile-description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}

export default AccountSettings;
