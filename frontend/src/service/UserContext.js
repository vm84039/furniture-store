import { createContext, useContext, useState } from "react";

// Create a UserContext
const UserContext = createContext();

// Create a custom hook to use the UserContext
export function useUser() {
  return useContext(UserContext);
}

// Create a UserProvider component to wrap your app with
export function UserProvider({ children }) {
  // Initialize state for user information
  const [user, setUser] = useState({
    id: null,
    email: "",
    firstName: "",
    lastName: "",
  });

  // Function to update user information
  const updateUser = (userData) => {
    setUser(userData);
  };
  const emptyUser = () => {
    setUser({
      id: null,
      email: "",
      firstName: "",
      lastName: "",
    });
  };
  return (
    <UserContext.Provider value={{ user, updateUser, emptyUser }}>
      {children}
    </UserContext.Provider>
  );
}
