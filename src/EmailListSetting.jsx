import React from "react";
import "./css/emaillist.css";
import { IconButton } from "@mui/material";
import {
  ArrowDropDown,
  CheckBoxOutlineBlank,
  ChevronLeft,
  ChevronRight,
  MoreVert,
  Refresh,
} from "@mui/icons-material";

const EmailListSetting = () => {
  return (
    <div className="emaillist__settings">
      <div className="emaillist__settingsLeft">
        <IconButton>
          <CheckBoxOutlineBlank />
        </IconButton>
        <IconButton>
          <ArrowDropDown />
        </IconButton>
        <IconButton>
          <Refresh />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>
      <div className="emaillist__settingsRight">
        <p>1-50 0f 10,222</p>
        <IconButton>
          <ChevronLeft />
        </IconButton>
        <IconButton>
          <ChevronRight />
        </IconButton>
      </div>
    </div>
  );
};

export default EmailListSetting;
