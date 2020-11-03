import { Box, Card, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import UserIcon from "./UserIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 600,
    margin: "2rem auto",
    padding: "1rem",
  },
  items: {
    "& > *": {
      width: "25%",
    },
    "& p": {
      fontSize: "1.5rem",
    },
    "& h4": {
      fontSize: "1.6rem",
    },
  },
}));

const UserCard = ({ name = "Suhail Malik", youOwe = 0, owesYou = 0 }) => {
  const classes = useStyles();

  const balance = owesYou - youOwe;
  return (
    <Card className={classes.root}>
      <Box display="flex" className={classes.items}>
        <Box>
          <UserIcon name={name} />
        </Box>
        <Box>
          <Typography component="h4" variant="caption">
            Owes You
          </Typography>
          <Typography
            component="p"
            style={{ color: "green" }}
            variant="subtitle1"
          >
            {owesYou}
          </Typography>
        </Box>
        <Box>
          <Typography component="h4" variant="caption">
            You Owe
          </Typography>
          <Typography
            component="p"
            variant="subtitle1"
            style={{ color: "red" }}
          >
            {youOwe}
          </Typography>
        </Box>
        <Box>
          <Typography component="h4" variant="caption">
            {" "}
            Balance
          </Typography>
          {balance > 0 ? (
            <Typography
              component="p"
              variant="subtitle1"
              style={{ color: "green" }}
            >
              +{balance}
            </Typography>
          ) : (
            <Typography
              component="p"
              variant="subtitle1"
              style={{ color: "red" }}
            >
              -{balance}
            </Typography>
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default UserCard;
