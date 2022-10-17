import React, { useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import fetcher from "./axiosInstance";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

const Create = () => {
  const [user, loading, error] = useAuthState(auth);
  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const handleCreateAcc = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const role = e.target.role.value;
    const email = e.target.email.value;
    const password = e.target.pass.value;
    const newUser = {
      name: name,
      email: email,
      role: role,
    };
    console.log(name, email, password);
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    await fetcher.put(`/users/:${email}`, newUser).then((res) => {
      if (res.status === 200) {
        document.getElementById("create-form").reset();
      }
    });
  };

  return (
    <div className="mt-5">
      <form id="create-form" onSubmit={handleCreateAcc}>
        <CustomInput type="text" id="name" placeholder="Please Enter Name" />
        <CustomInput
          type="text"
          id="role"
          className="mt-2"
          placeholder="Please Enter Role"
        />
        <CustomInput
          type="email"
          id="email"
          className="my-2"
          placeholder="Please Enter Email"
        />
        <CustomInput
          type="password"
          id="pass"
          placeholder="Please Enter Password"
        />
        <CustomButton
          //   onClick={() => createUserWithEmailAndPassword(email, password)}
          type="submit"
          label="Create New User"
          className="mt-2"
        />
      </form>
      {emailLoading && <p>Creating New User ...</p>}
      {/* {emailError && <p className="mt-2 text-red-500">{emailError.message}</p>} */}
    </div>
  );
};

export default Create;
