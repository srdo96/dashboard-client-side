import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import ReqAuth from "./Components/ReqAuth";
// import Admin from "./Components/Admin";
// import Editor from "./Components/Editor";
import Create from "./Components/Create";
import Read from "./Components/Read";
// import Update from "./Components/Update";
// import Delete from "./Components/Delete";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route
          path="dashboard"
          element={
            <ReqAuth>
              <Dashboard />
            </ReqAuth>
          }
        >
          <Route path="create" element={<Create />} />
          <Route path="read" element={<Read />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
