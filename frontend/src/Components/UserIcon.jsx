import React from "react";
import { Avatar } from "@material-ui/core";

const UserIcon = ({ name }) => {
  return (
    <Avatar aria-label="recipe" style={{ backgroundColor: "red" }}>
      {name[0].toUpperCase()}
    </Avatar>
  );
};

export default UserIcon;
