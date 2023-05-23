import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Emaillist from "./Emaillist";
import Compose from "./Compose";
import { useSelector } from "react-redux";

function App() {
  const isMessageOpen = useSelector();
  return (
    <div className="App">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Emaillist />
      </div>
      {isMessageOpen && <Compose />}
    </div>
  );
}

export default App;
