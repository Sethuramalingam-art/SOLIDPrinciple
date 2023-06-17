import React, { useEffect, useState, useReducer } from "react";
import { loadingReducer } from "./loadingReducer";

interface initialSate {
  isLoading: Boolean;
}

const intialState: initialSate = {
  isLoading: true,
};

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const useHTTPRequest = (url: string) => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [state, dispatch] = useReducer(loadingReducer, intialState);

  const fetchResults = async () => {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    if (result) {
      dispatch({ type: "FINISHED" });
      setUsers(result);
      setFilteredUsers(result);
    }
  };
  useEffect(() => {
    dispatch({ type: "LOADING" });
    fetchResults();
  }, []);

  return {
    users,
    filteredUsers,
    setFilteredUsers,
    dispatch,
    isLoading: state.isLoading,
  };
};
