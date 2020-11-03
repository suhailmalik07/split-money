import { Box } from "@material-ui/core";
import React from "react";
import ListItem from "./ListItem";

const ListExpenses = ({ data }) => {
  return (
    <Box width="600px" margin="0 auto">
      {data.map((expense) => (
        <ListItem key={expense._id} {...expense} />
      ))}
    </Box>
  );
};

export default ListExpenses;
