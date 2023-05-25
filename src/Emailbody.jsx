import React from "react";
import "./css/emaillist.css";
import {
  CheckBoxOutlineBlank,
  LabelOutlined,
  StarBorder,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMessage } from "./features/mailSlice";

const Emailbody = ({ name, subject, message, time }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setMail = () => {
    dispatch(
      openMessage({
        name,
        subject,
        message,
        time,
      })
    );
    navigate("/mail");
  };
  return (
    <div className="emailbody" onClick={setMail}>
      <div className="emailbody__left">
        <CheckBoxOutlineBlank />
        <StarBorder />
        <LabelOutlined />

        <h4>{name}</h4>
      </div>
      <div className="emailbody__middle">
        <div className="emailbody__middle__msg">
          <p>
            <b>{subject}</b> {message}
          </p>
        </div>
      </div>
      <div className="emailbody__right">
        <p>{time}</p>
      </div>
    </div>
  );
};

export default Emailbody;
