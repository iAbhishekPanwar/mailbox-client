import React from "react";
import "./css/compose.css";
import {
  ArrowDropDown,
  AttachFile,
  Close,
  Create,
  Delete,
  FormatColorText,
  Height,
  InsertEmoticon,
  MoreVert,
  NoteAdd,
  PhonelinkLock,
  Photo,
  Remove,
} from "@mui/icons-material";
import { Link } from "@mui/material";
const Compose = () => {
  return (
    <div className="compose">
      <div className="compose__header">
        <div className="compose__header__left">
          <span>New Message</span>
        </div>
        <div className="compose__header__right">
          <Remove />
          <Height />
          <Close />
        </div>
      </div>
      <div className="compose__body">
        <div className="compose__bodyForm">
          <input type="email" placeholder="Recipients" />
          <input type="text" placeholder="Subject" />
          <textarea rows="20"></textarea>
        </div>
      </div>
      <div className="compose__footer">
        <div className="compose__footerLeft">
          <button type="submit">
            Send <ArrowDropDown />
          </button>
        </div>
        <div className="compose__footerRight">
          <FormatColorText />
          <AttachFile />
          <Link />
          <InsertEmoticon />
          <NoteAdd />
          <Photo />
          <PhonelinkLock />
          <Create />
          <MoreVert />
          <Delete />
        </div>
      </div>
    </div>
  );
};

export default Compose;
