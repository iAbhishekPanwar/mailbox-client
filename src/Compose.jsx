import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
// import { db } from "./firebase";
import { db } from "./firebase.js";
import firebase from "firebase/compat/app";

// import firebase from "firebase";

const Compose = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    if (to === "") {
      alert("To is required");
    }
    if (subject === "") {
      alert("Subject is required");
    }
    if (message === "") {
      alert("Message is required");
    }
    db.collection("emails").add({
      to,
      subject,
      message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTo("");
    setSubject("");
    setMessage("");
    alert("Email sent successfully");
    dispatch(closeSendMessage());
  };

  return (
    <div className="compose">
      <div className="compose__header">
        <div className="compose__header__left">
          <span>New Message</span>
        </div>
        <div className="compose__header__right">
          <Remove />
          <Height />
          <Close onClick={() => dispatch(closeSendMessage())} />
        </div>
      </div>
      <form onSubmit={formSubmit}>
        <div className="compose__body">
          <div className="compose__bodyForm">
            <input
              type="email"
              placeholder="Recipients"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea rows="20" onChange={(e) => setMessage(e.target.value)}>
              {message}
            </textarea>
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
      </form>
    </div>
  );
};

export default Compose;
