import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";

const EmployeeList = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await EmployeeService.getEmployees();
        setEmployeeList(res.data);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading == true) {
    return <div>Loading...</div>;
  }

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res) => {
      if (employeeList) {
        setEmployeeList((prev) => {
          return prev.filter((employee) => employee.id !== id);
        });
      }
    });
  };

  return (
    <>
      <div className="container mx-auto my-8">
        <div className="h-12">
          <Link
            to="/add-employee"
            className="rounded bg-slate-600 text-white px-6 py-2 font-semibold border"
          >
            Add Employee
          </Link>
        </div>
        <div className="flex shadow border-b">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  First Name
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Last Name
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Email
                </th>
                <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {employeeList.map((employee, id) => (
                <Employee
                  key={id}
                  deleteEmployee={deleteEmployee}
                  employee={employee}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
