import React from "react";
import Logo from "../public/assets/AGAMI White Lotus.png";

const AppNav: React.FC = () => {
  return (
    <nav className="bg-gray-950 text-white rounded-full p-1 mt-2 mx-5 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-1">
          {/* Logo Section */}
          <div>
            <img src={Logo} alt="Logo" width="35" height="35" />
          </div>

          {/* Links Section */}
          <div className="flex space-x-4" style={{ marginRight: "500px" }}>
            <a
              href="/profile"
              className="text-white hover:text-gray-400 flex items-center space-x-2"
            >
              <img
                src="path/to/profile/icon.png"
                alt="Profile Icon"
                width="15"
                height="15"
              />
              Profile
            </a>
            <a
              href="/links"
              className="text-white hover:text-gray-400 flex items-center space-x-2"
            >
              <img
                src="path/to/links/icon.png"
                alt="Links Icon"
                width="15"
                height="15"
              />
              Links
            </a>
            <span className="text-white italic flex items-center space-x-2">
              <img
                src="path/to/domain/icon.png"
                alt="Domain Icon"
                width="15"
                height="15"
              />
              Your Domain (Coming Soon)
            </span>
          </div>

          {/* Buttons Section */}
          <div className="flex space-x-4">
            <button
              className="bg-gray-600 text-white py-2 px-4 rounded-full border border-white hover:bg-gray-700"
              onClick={() => {
                // Add your connect wallet logic here
              }}
            >
              Connect Wallet
            </button>
            <a
              href="/home"
              className="bg-gray-600 text-white py-2 px-4 rounded-full border border-white hover:bg-gray-700"
            >
              Home
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNav;
