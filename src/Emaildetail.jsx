import React from "react";
import "./css/emaillist.css";
import { Avatar, IconButton } from "@mui/material";
// import { useHistory } from "react-router-dom";
import {
  ArrowBack,
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  LabelImportant,
  Launch,
  MoreVert,
  Print,
  Refresh,
  Reply,
  Star,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectedMail } from "./features/mailSlice";

const Emaildetail = () => {
  const mail = useSelector(selectedMail);
  const navigate = useNavigate();
  return (
    <div className="emaildetail">
      <div className="emaillist__settings">
        <div className="emaillist__settingsLeft">
          <IconButton>
            <ArrowBack
              onClick={() => {
                navigate("/");
              }}
            />
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
      <div className="emaildetails__header">
        <div className="emaildetails__headerLeft">
          <h4>{mail.subject}</h4>
          <IconButton>
            <LabelImportant />
          </IconButton>
        </div>
        <div className="emaildetails__headerRight">
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <Launch />
          </IconButton>
        </div>
      </div>

      <div className="emaildetails__message">
        <div className="emaildetails__middleheader">
          <div className="emaildetails__middleheaderLeft">
            <IconButton>
              <Avatar />
            </IconButton>
            <h4>{mail.name}</h4>
            <p>{mail.email}</p>
          </div>
          <div className="emaildetails__middleheaderRight">
            <p>{mail.time}</p>
            <IconButton>
              <Star />
            </IconButton>
            <IconButton>
              <Reply />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <div className="emaildetails__body">
          <p>{mail.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Emaildetail;
