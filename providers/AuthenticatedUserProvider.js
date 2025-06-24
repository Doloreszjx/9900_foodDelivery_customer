// import React, { useState, createContext } from 'react';

// export const AuthenticatedUserContext = createContext({});

// export const AuthenticatedUserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   return (
//     <AuthenticatedUserContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthenticatedUserContext.Provider>
//   );
// };
import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase"; 

export const AuthenticatedUserContext = createContext({ user: null });

export const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("auth state changed:", user?.email || "null");
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {loading ? null : children}
    </AuthenticatedUserContext.Provider>
  );
};
