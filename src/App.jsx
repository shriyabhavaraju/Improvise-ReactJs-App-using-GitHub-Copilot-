import React from "react";

const siteProps = {
  name: "Eric",
  role: "UI Developer",
  organization: "XYZ Corporation",
  welcomeMessage: "Welcome to my portfolio website!",
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com", icon: "🔗" },
    { name: "GitHub", url: "https://github.com", icon: "🐙" },
    { name: "Twitter", url: "https://twitter.com", icon: "🐦" }
  ]
};

export default function App() {
  return (
    <div className="container">
      <h1>{siteProps.welcomeMessage}</h1>
      <h2>{siteProps.name} - {siteProps.role}</h2>
      <h3>{siteProps.organization}</h3>
      <div className="social-icons">
        {siteProps.socialLinks.map((link) => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="icon">
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
