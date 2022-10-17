import { signOut } from "firebase/auth";
import { parse } from "path";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { json } from "stream/consumers";
import auth from "../firebase.init";

const AdminRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, setAdmin] = useState(false);
  const [email, setEmail] = useState("");
  setEmail(user?.email);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:3000/admin/${email}`)
        .then((res) => res.json())
        .then((data) => setAdmin(data));
    }
  }, [email]);
  const location = useLocation();
  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoute;
