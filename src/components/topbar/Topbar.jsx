import React from "react";
import "./topbar.css";
import { NotificationsActive, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo"> Admin Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsActive />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://e0.365dm.com/22/07/1600x900/skysports-lisandro-martinez_5846996.jpg?20220727133633"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
