import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton, Link } from "@mui/material";

const Contracts = () => {
  return (
    <div>
      <div className="bg-black p-1 fixed bottom-40 p-2 rounded-r-lg z-50">
        <div className="grid grid-col-3 gap-2 box-content">
          <IconButton color="primary">
            <Link href="https://github.com/chuwong35122" color="inherit">
              <GitHubIcon fontSize="large" />
            </Link>
          </IconButton>
          <IconButton color="primary">
            <Link
              href="https://www.linkedin.com/in/chuwong-kulrattanarak-b001251ab/"
              color="inherit"
            >
              <LinkedInIcon fontSize="large" />
            </Link>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Contracts;
