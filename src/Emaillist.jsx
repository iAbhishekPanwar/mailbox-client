import React from "react";
import "./css/emaillist.css";
import EmailListSetting from "./EmailListSetting";
import Emailtype from "./Emailtype";
const Emaillist = () => {
  return (
    <div className="emaillist">
      <EmailListSetting />
      <Emailtype />
    </div>
  );
};

export default Emaillist;
