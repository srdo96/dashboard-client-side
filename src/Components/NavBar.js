import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "../useAdmin";

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, role, adminLoading] = useAdmin(user);
  const navigate = useNavigate();
  let from = "/login";
  const logout = () => {
    signOut(auth);
    navigate(from, { replace: true });
    // window.location.reload();
  };
  if (loading) {
    return <p>Loading ...</p>;
  }
  console.log(user?.email);
  console.log(role);
  return (
    <div>
      <div>
        <nav className="bg-white dark:bg-gray-800  ">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between h-16">
              <div className=" flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {user && (
                      <span className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-xl font-bold">
                        {role}
                      </span>
                    )}

                    <Link
                      className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="/dashboard/read"
                    >
                      Dashboard
                    </Link>
                    {user ? (
                      <button
                        onClick={logout}
                        className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                      >
                        Logout
                      </button>
                    ) : (
                      <Link
                        className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        to="/login"
                      >
                        Login
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
