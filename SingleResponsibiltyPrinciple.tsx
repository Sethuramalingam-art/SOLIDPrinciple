import React, { useEffect, useState, useReducer } from "react";

interface initialSate {
  isLoading: Boolean;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
const intialState: initialSate = {
  isLoading: true,
};

//Comples State Managment

function reducer(state: any, action: any) {
  switch (action.type) {
    case "LOADING":
      return { isLoading: true };
    case "FINISHED":
      return { isLoading: false };
    default:
      return state;
  }
}

const SingleResponsibiltyPrinciple = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [state, dispatch] = useReducer(reducer, intialState);

  return <div>SingleResponsibiltyPrinciple</div>;
};

export default SingleResponsibiltyPrinciple;
