import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./css/sidebar.css";
import Sidebaroptions from "./Sidebaroptions";
import InboxIcon from "@mui/icons-material/Inbox";
import {
  Delete,
  Drafts,
  ExpandMore,
  FindInPage,
  Keyboard,
  Label,
  LabelImportant,
  Send,
  StarRate,
  Videocam,
  WatchLater,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon />}
        className="compose__btn"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <Sidebaroptions
        Icon={InboxIcon}
        title="Inbox"
        number="224"
        isactive={true}
      />
      <Sidebaroptions Icon={StarRate} title="Starred" number={500} />
      <Sidebaroptions Icon={WatchLater} title="Snoozed" number={300} />
      <Sidebaroptions Icon={LabelImportant} title={"Important"} number={452} />
      <Sidebaroptions Icon={Send} title={"Sent"} number={254} />
      <Sidebaroptions Icon={Drafts} title={"Drafts"} number={254} />
      <Sidebaroptions Icon={Label} title="Category" number={254} />
      <Sidebaroptions Icon={Delete} title="[Map]/Trash" number={254} />
      <Sidebaroptions Icon={FindInPage} title="Documents" number={254} />
      <Sidebaroptions Icon={ExpandMore} title="More" number={254} />

      <hr />

      <h3 className="sidebarOptions__heading">Meet</h3>

      <Sidebaroptions Icon={Videocam} title={"New Meeting"} number={254} />
      <Sidebaroptions Icon={Keyboard} title="Join a Meeting" number={254} />
    </div>
  );
};

export default Sidebar;
