import "./App.css";
import AddEmployee from "./components/AddEmployee";
import Navbar from "./components/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        {/* <Route path="" element={<EmployeeList />} /> */}
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/edit-employee/:id" element={<UpdateEmployee />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
