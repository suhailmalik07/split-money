import { Box, Typography } from "@material-ui/core";
import React from "react";
import UserIcon from "./UserIcon";

const UserCard = ({ name = "Suhail Malik", youOwe = 0, oweYou = 0 }) => {
  return (
    <Box display="flex">
      <Box>
        <UserIcon name={name} />
      </Box>
      <Box>
        <Typography variant="caption">Owes You</Typography>
        <Typography variant="subtitle1" color="textPrimary">
          {oweYou}
        </Typography>
      </Box>
      <Box>
        <Typography variant="caption"> You Owe</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {youOwe}
        </Typography>
      </Box>
      <Box>
        <Typography variant="caption"> Balance</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {oweYou - youOwe}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserCard;
