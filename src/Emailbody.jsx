import React from "react";
import "./css/emaillist.css";
import {
  CheckBoxOutlineBlank,
  LabelOutlined,
  StarBorder,
} from "@mui/icons-material";

const Emailbody = (props) => {
  return (
    <div className="emailbody">
      <div className="emailbody__left">
        <CheckBoxOutlineBlank />
        <StarBorder />
        <LabelOutlined />

        <h4>{props.name}</h4>
      </div>
      <div className="emailbody__middle">
        <div className="emailbody__middle__msg">
          <p>
            <b>{props.subject}</b> {props.message}
          </p>
        </div>
      </div>
      <div className="emailbody__right">
        <p>{props.time}</p>
      </div>
    </div>
  );
};

export default Emailbody;
