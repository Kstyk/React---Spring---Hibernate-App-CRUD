import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployee = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(employee, id)
      .then((res) => {
        nav("/");
      })
      .catch((eror) => {
        console.log(eror);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await EmployeeService.getEmployeeById(id);
        setEmployee(resp.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const reset = (e) => {
    e.preventDefault();
    nav("/");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
          <header className="font-thin text-2xl tracking-wider">
            <h1>Edit Employee</h1>
          </header>
          <div className="items-center justify-center h-14 w-full my-4">
            <label
              className="block text-gray-600 text-sm font-normal"
              htmlFor="firstName"
            >
              First name:
            </label>
            <input
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"
            />
          </div>
          <div className="items-center justify-center h-14 w-full my-4">
            <label
              className="block text-gray-600 text-sm font-normal"
              htmlFor="lastName"
            >
              Last name:
            </label>
            <input
              type="text"
              name="lastName"
              value={employee.lastName}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"
            />
          </div>
          <div className="items-center justify-center h-14 w-full my-4">
            <label
              className="block text-gray-600 text-sm font-normal"
              htmlFor="emailId"
            >
              Email:
            </label>
            <input
              type="email"
              name="emailId"
              value={employee.emailId}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"
            />
          </div>
          <div className="items-center justify-center h-14 w-full my-4">
            <button
              className="rounded text-white font-semibold bg-green-500 
     hover:bg-teal-800 py-2 px-4"
              type="submit"
            >
              Update
            </button>
            <button
              className="rounded text-white font-semibold bg-red-500 
     hover:bg-red-800 py-2 px-4 mx-4"
              onClick={(e) => reset(e)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdateEmployee;
