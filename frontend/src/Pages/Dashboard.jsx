import { Box } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListExpenses from "../Components/ListExpenses";
import UserCard from "../Components/UserCard";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    Axios.get("http://localhost:8000/api")
      .then(({ data }) => {
        const { expenses, ...remaining } = data;
        setExpenses(expenses);
        setUserDetails(remaining);
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div style={{ margin: "2rem 0" }}>
      <UserCard {...userDetails} />
      <ListExpenses data={expenses} />
      <Box textAlign="center">
        <Link to="/add">Add More</Link>
      </Box>
    </div>
  );
};

export default Dashboard;
