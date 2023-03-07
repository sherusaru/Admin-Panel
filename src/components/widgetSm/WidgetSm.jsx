import { Visibility } from "@material-ui/icons";
import React from "react";
import "./widgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John Doe</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John Doe</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John Doe</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John Doe</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John Doe</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
