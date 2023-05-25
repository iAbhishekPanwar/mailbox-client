import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Emaillist from "./Emaillist";
import Compose from "./Compose";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import Emaildetail from "./Emaildetail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { selectUser } from "./features/userSlice";

function App() {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  return (
    <Router>
      {user && (
        <div className="App">
          <Header />

          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Emaillist />} />

              <Route path="/mail" element={<Emaildetail />} />
            </Routes>
          </div>
          {isMessageOpen && <Compose />}
        </div>
      )}
      : {<Login />}
    </Router>
  );
}

export default App;
