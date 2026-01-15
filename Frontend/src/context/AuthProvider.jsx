import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  let parsedUser = null;

  try {
    const storedUser = localStorage.getItem("Users");
    parsedUser = storedUser ? JSON.parse(storedUser) : null;
  } catch (err) {
    console.error("Invalid Users in localStorage", err);
    localStorage.removeItem("Users");
    parsedUser = null;
  }

  const [authUser, setAuthUser] = useState(parsedUser);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
