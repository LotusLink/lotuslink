import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-logo">My App</p>
        <div className="footer-links">
          <a
            href="https://github.com/PBillingsby/create-permaweb-app/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
          <a
            href="https://cookbook.arweave.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the Arweave Cookbook
          </a>
          {/* Add more links here as needed */}
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} My App. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
