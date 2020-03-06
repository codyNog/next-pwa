import React, { useEffect } from "react";
import { useUserList } from "../../../store/organisms/UserList";

export const UserList: React.FC = () => {
  const { users, getUsers } = useUserList();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div>
      {users.map(user => {
        return (
          <div key={user.name + user.age}>
            {user.name} {user.age}
          </div>
        );
      })}
    </div>
  );
};
