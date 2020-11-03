import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    "& > *": {
      margin: "0 0.5rem",
    },
  },
  selector: {
    width: "120px",
  },
}));

const SelectUserField = ({ options, disabled, onChange }) => {
  const classes = useStyles();
  const [state, setState] = useState({ selected: "", paid: 0, toPay: 0 });

  const handleChange = async (e) => {
    const { value, name } = e.target;

    await setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    onChange(state.selected, state.paid, state.toPay);
    // console.log()
  }, [state, onChange]);

  return (
    <div className={classes.root}>
      <FormControl variant="filled">
        <InputLabel id="demo-simple-select-filled-label">User</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={state.selected}
          name="selected"
          onChange={handleChange}
          variant="outlined"
          className={classes.selector}
        >
          {options.map((user) => (
            <MenuItem key={user._id} value={user._id}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        type="number"
        label="Paid"
        value={state.paid}
        name="paid"
        variant="outlined"
        onChange={handleChange}
      />

      <TextField
        type="number"
        label="To Pay"
        value={state.toPay}
        name="toPay"
        variant="outlined"
        onChange={handleChange}
      />
    </div>
  );
};

export default SelectUserField;
