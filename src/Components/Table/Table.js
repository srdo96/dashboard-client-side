import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import useAdmin from "../../useAdmin";
import fetcher from "../axiosInstance";
import CustomTableBody from "./CustomTableBody";
import CustomTableHead from "./CustomTableHead";

const Table = () => {
  const [users, setUsers] = useState([]);
  const [user, userLoading, error] = useAuthState(auth);
  const [isAdmin, role, adminLoading] = useAdmin(user);
  const { data, isLoading, refetch } = useQuery("allUsers", () =>
    fetcher.get("/users")
  );

  if (isLoading || adminLoading) {
    return <p>Loading ...</p>;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <CustomTableHead label="#" />
              <CustomTableHead label="Name" />
              <CustomTableHead label="Email" />
              <CustomTableHead label="Role" />
              <CustomTableHead label="Update" />
              {isAdmin && <CustomTableHead label="Delete" />}
            </tr>
          </thead>
          <tbody>
            {data?.data?.map(({ name, email, role, _id }, index) => (
              <CustomTableBody
                key={index}
                name={name}
                email={email}
                role={role}
                num={index}
                id={_id}
                refetch={refetch}
                isAdmin={isAdmin}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
