import React from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { IconButton, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";

import "./css/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <ReorderIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt="logo"
        />
      </div>
      <div className="header__middle">
        <div className="search_mail">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search Mail" />
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
      <div className="header__right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>

        <Avatar src="https://octodex.github.com/images/topguntocat.png" />
      </div>
    </div>
  );
};

export default Header;
