import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import UserIcon from "./UserIcon";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "0.5rem 0",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameIcons: {
    display: "flex",
    alignItems: "center",

    "&  h6": {
      marginLeft: "1rem",
    },
  },
});

export default function ListItem({ name = "Expense", totalAmount, details }) {
  const currUserId = "5fa12ec376800e48644b82aa";

  const classes = useStyles();

  // find and store user object with details like paid and toPay
  const currUserObject = details.find((item) => item.user._id === currUserId);
  const isDue = currUserObject.paid === 0;
  let user = "";

  if (isDue) {
    user += details.find((item) => item.paid > 0).user.name;
  } else {
    const users = details
      .filter((item) => item.user._id !== currUserId)
      .map((item) => item.user.name);

    user += users.join(", ");
  }

  return (
    <>
      <Card
        key={currUserObject._id}
        className={classes.root}
        variant="outlined"
      >
        <CardContent className={classes.card}>
          <Box className={classes.nameIcons}>
            <UserIcon name={name || "Expense"} />
            <Box>
              <Typography component="h6">{name || "Expense"}</Typography>
              <Typography component='h6'>{user}</Typography>
            </Box>
          </Box>
          <Box>
            {isDue ? (
              <Typography style={{ color: "red" }}>
                You owe ${currUserObject.toPay}
              </Typography>
            ) : (
              <Typography style={{ color: "green" }}>
                Owes you $ {totalAmount - currUserObject.toPay}
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
