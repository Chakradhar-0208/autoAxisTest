import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined); 

  useEffect(() => {
    fetch("http://localhost:3000/check-login", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "User Logged in false") {
          console.log("User Logged out, redirecting to prot /login");
          setIsLoggedIn(false);
        } else {
          console.log("User logged in from Prot");
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        console.error("Login check failed:", err);
        setIsLoggedIn(false); 
      });
  }, []);

  if (isLoggedIn === undefined) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
