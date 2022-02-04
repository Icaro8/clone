import React, { useState, createContext, useContext } from "react";
import { useSession, signOut } from "next-auth/react";
const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState();
  const { data: session } = useSession();

  return <UserContext>{children}</UserContext>;
}
