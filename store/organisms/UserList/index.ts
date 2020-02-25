import { IUser } from "../../../types/User";
import { useState, useCallback } from "react";
import { fetch_user_request } from "../../../utils/apis/fetch_user_request";

export const useUserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = useCallback(async () => {
    const users = await fetch_user_request();
    setUsers(users);
  }, []);

  return { users, getUsers };
};
