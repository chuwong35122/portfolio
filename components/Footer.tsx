import React from "react";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="container bg-gray-800 p-4 ">
      <div className="grid grid-cols-2 justify-items-center">
        <div className="text-gray-200 gap-4">
          <EmailIcon fontSize="large" />
          Contracts me: chuwong35122@gmail.com
        </div>

        <div className="font-gray-200 font-size-md text-white mx-auto">
          Copyright @ChuChuwi2021
        </div>
      </div>
    </div>
  );
};

export default Footer;
