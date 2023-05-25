import React from "react";
import "./css/login.css";
const Login = () => {
  return (
    <div className="loginwrapper">
      <div className="login">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAswpZ3olxGke1rcfTqIhyE3c1frR7wIrS0DPqoyPeDbDX0zqhOwHgrV918VlJ05407e4&usqp=CAU"
          alt="logo"
        />
        <button className="gmail_login">Login with Gmail</button>
      </div>
    </div>
  );
};

export default Login;
