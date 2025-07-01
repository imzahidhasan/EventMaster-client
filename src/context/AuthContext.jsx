import { createContext, useContext, useState, useEffect } from "react";
import api from "../utilities/axiosInstance";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { name, photoURL }
  const [loading, setLoading] = useState(true);

  // Optional: Get user info on page refresh
  useEffect(() => {

    const fetchUser = async () => {
      try {
        //get user info from the server
        const response = await api.get("/auth/me");
        //set user info in context
        setUser(response.data);

      } catch (error) {
        console.log(error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
