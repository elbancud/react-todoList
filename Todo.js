import React from "react";
import "./App.css";
import "./Subtodo";

import DeleteIcon from "@material-ui/icons/Delete";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { makeStyles } from "@material-ui/core/styles";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import App from "./App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "@material-ui/core/Icon";
import { green } from "@material-ui/core/colors";

import { Button } from "@material-ui/core";

import "./index.css";
import Subtodo from "./Subtodo";

function Todo(props) {
  let change = 0;

  return (
    <div className="mid-left-align">
      <div>
        <h3>{props.text}</h3>
      </div>

      <div className="btn-align-center">
        <div>
          <DeleteIcon
            className="btn-hover"
            style={{ fontSize: 28 }}
            onClick={() => {
              return console.log(props.event);
            }}
          />
          <PostAddIcon className="btn-hover" style={{ fontSize: 28 }} />
          <AssignmentTurnedInIcon
            className="btn-hover"
            style={{ fontSize: 28 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Todo;
