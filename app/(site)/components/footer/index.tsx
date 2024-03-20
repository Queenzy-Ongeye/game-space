import React from "react";

const Footer = () => {
  return (
    <footer className="text-center w-full h-10 divide-y-4 text-white bg-black">
      Copyright <span className="text-red-600 mt-2">Game Space</span>{" "}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
