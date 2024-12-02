import React, { useState } from "react";
import TopNavBar from "../components/TopNavBar";

const AccountSettings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [preferredNoiseLevel, setPreferredNoiseLevel] = useState("Quiet");
  const [preferredProximityToFood, setPreferredProximityToFood] = useState("Close");

  const handleSaveSettings = (e) => {
    e.preventDefault();
    // Handle save settings logic here
    console.log("Settings saved:", { 
      name, 
      email, 
      currentPassword, 
      newPassword, 
      notifications, 
      preferredNoiseLevel, 
      preferredProximityToFood 
    });
  };

  return (
    <div className="p-4">
      <div className="mt-4 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
        
        {/* Profile Information */}
        <form onSubmit={handleSaveSettings}>
          <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Change Password */}
          <h3 className="text-xl font-semibold mb-4">Change Password</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Notification Preferences */}
          <h3 className="text-xl font-semibold mb-4">Notification Preferences</h3>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={notifications}
              className="mr-2"
            />
            <label className="text-gray-700">Receive email notifications</label>
          </div>

          {/* Preferred Study Spot Attributes */}
          <h3 className="text-xl font-semibold mb-4">Preferred Study Spot Attributes</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Noise Level</label>
            <select
              value={preferredNoiseLevel}
              onChange={(e) => setPreferredNoiseLevel(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Quiet">Quiet</option>
              <option value="Moderate">Moderate</option>
              <option value="Loud">Loud</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Proximity to Food</label>
            <select
              value={preferredProximityToFood}
              onChange={(e) => setPreferredProximityToFood(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Close">Close</option>
              <option value="Moderate">Moderate</option>
              <option value="Far">Far</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-primary text-white p-2 rounded hover:bg-primary-dark w-full"
          >
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;