import React from "react";
import "./css/emaillist.css";
import EmailListSetting from "./EmailListSetting";
import Emailtype from "./Emailtype";
import Emailbody from "./Emailbody";
const Emaillist = () => {
  return (
    <div className="emaillist">
      <EmailListSetting />
      <Emailtype />

      <Emailbody
        name="Abhishek Panwar"
        subject="This is subject"
        message="we are learning react js"
        time="03:20PM"
      />
    </div>
  );
};

export default Emaillist;
