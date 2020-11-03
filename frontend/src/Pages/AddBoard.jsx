import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Axios from "axios";
import SelectUserField from "../Components/SelectUserField";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #c4c4c4",
    width: "600px",
    margin: "2rem auto",
    borderRadius: "5px",
    padding: "0 1rem",

    "& > *": {
      margin: "1rem 0",
    },
  },
}));

const AddBoard = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [fields, setFields] = useState([
    { id: "5fa12ec376800e48644b82aa", paid: 0, toPay: 0 },
  ]);

  const history = useHistory();

  useEffect(() => {
    Axios.get("http://localhost:8000/api/users")
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (indx, user, paid, toPay) => {
    fields[indx] = {
      ...fields[indx],
      id: user,
      paid: Number(paid),
      toPay: Number(toPay),
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalAmount = fields.reduce((a, field) => a + Number(field.paid), 0);

    Axios.post(
      "http://localhost:8000/api",
      {
        totalAmount,
        name,
        details: fields.map((item) => ({
          paid: item.paid,
          toPay: item.toPay,
          user: item.id,
        })),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.root}>
        <Typography align="center" variant="h2">
          Add
        </Typography>

        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Name"
          variant="outlined"
          required
        />

        {fields.map((item, i) => (
          <SelectUserField
            key={i}
            options={users}
            onChange={(user, paid, toPay) => handleChange(i, user, paid, toPay)}
          />
        ))}

        <Box display="flex" justifyContent="flex-end">
          <Button
            onClick={() => {
              setFields([...fields, { id: "", paid: 0, toPay: 0 }]);
            }}
            variant="contained"
            style={{ backgroundColor: "green", color: "white" }}
          >
            Add More User+
          </Button>
        </Box>

        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>
    </>
  );
};

export default AddBoard;
