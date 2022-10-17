import { useEffect, useState } from "react";
import fetcher from "./Components/axiosInstance";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [role, setRole] = useState("");
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetcher.get(`users/${email}`).then((data) => {
        setAdmin(data?.data?.admin);
        setRole(data?.data?.role);
        setAdminLoading(false);
      });
    }
  }, [user]);
  return [admin, role, adminLoading];
};
export default useAdmin;
