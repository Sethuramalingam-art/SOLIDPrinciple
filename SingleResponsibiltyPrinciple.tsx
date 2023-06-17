import React, { useEffect, useState, useReducer } from "react";
import { useGetRemoteData } from "./SRPFolder/useGetRemoteData";

// interface initialSate {
//   isLoading: Boolean;
// }

// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
// }
// const intialState: initialSate = {
//   isLoading: true,
//};

//Comples State Managment

// function reducer(state: any, action: any) {
//   switch (action.type) {
//     case "LOADING":
//       return { isLoading: true };
//     case "FINISHED":
//       return { isLoading: false };
//     default:
//       return state;
//   }
// }

const SingleResponsibiltyPrinciple = () => {
  const { users, filteredUsers, setFilterText, filterText, isLoading } =
    useGetRemoteData();
  //   const [users, setUsers] = useState<User[]>([]);
  //   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  //   const [filterText, setFilterText] = useState<string>("");
  //   const [state, dispatch] = useReducer(reducer, intialState);

  //   const fetchResults = async () => {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const result = await response.json();
  //     console.log(result);
  //     if (result) {
  //       dispatch({ type: "FINISHED" });
  //       setUsers(result);
  //       setFilteredUsers(result);
  //     }
  //   };
  //   useEffect(() => {
  //     dispatch({ type: "LOADING" });
  //     fetchResults();
  //   }, []);

  //   useEffect(() => {
  //     dispatch({ type: "LOADING" });
  //     const filteredUser = users.filter((item) => {
  //       return item.name.indexOf(filterText) >= 0;
  //     });
  //     dispatch({ type: "FINSIHED" });
  //     setFilteredUsers(filteredUser);
  //   }, [filterText]);

  const searchUserlist = (e: React.FormEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement;
    setFilterText(target.value);
  };

  return (
    <div>
      <div>
        <span>Users list</span>
        <span>{isLoading ? "Loading" : "Success"}</span>
        <div>
          <input type="text" onChange={searchUserlist} value={filterText} />
        </div>

        {filteredUsers?.map((user) => {
          return (
            <div>
              <span>{user.name}</span>
              <span>{user.username}</span>
              <span>{user.email}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleResponsibiltyPrinciple;
