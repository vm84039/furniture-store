import React, { createContext, useContext, useState } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

// AuthContextProvider component
export default function AuthContextProvider({ children }) { // Add default keyword here
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulated login function
  const login = () => {
    setIsLoggedIn(true);
  };

  // Simulated logout function
  const logout = () => {
    setIsLoggedIn(false);
  };

  // Context value to provide to consumers
  const contextValue = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}
