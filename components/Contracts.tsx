import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contracts = () => {
  return (
    <div>
      <div className="bg-black p-4 fixed bottom-20 rounded-r-lg">
        <div className="grid grid-col-3 gap-4 box-content">
          <div>
            <GitHubIcon fontSize="large" color="primary" />
          </div>
          <div>
            <LinkedInIcon fontSize="large" color="primary" />
          </div>
          <div>
            <EmailIcon fontSize="large" color="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contracts;
