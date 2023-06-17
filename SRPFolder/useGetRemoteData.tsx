import React, { useEffect, useState, useReducer } from "react";
import { useHTTPRequest } from "./useHTTPRequest";

const REMOTE_URL = "https://jsonplaceholder.typicode.com/users";

export const useGetRemoteData = () => {
  const { users, filteredUsers, setFilteredUsers, dispatch, isLoading } =
    useHTTPRequest(REMOTE_URL);
  const [filterText, setFilterText] = useState<string>("");

  // filtering
  useEffect(() => {
    dispatch({ type: "LOADING" });
    const filteredUser = users.filter((item) => {
      return item.name.indexOf(filterText) >= 0;
    });
    dispatch({ type: "FINSIHED" });
    setFilteredUsers(filteredUser);
  }, [filterText]);

  return {
    users,
    filteredUsers,
    setFilterText,
    filterText,
    isLoading: isLoading,
  };
};
