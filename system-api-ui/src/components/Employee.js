import React from "react";
import { Link } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
  return (
    <tr>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.emailId}</div>
      </td>
      <td className="text-right py-4 whitespace-nowrap font-medium text-sm">
        <Link
          to={`/edit-employee/${employee.id}`}
          className="text-indigo-600 hover:text-indigo-800 px-4"
        >
          Edit
        </Link>
        <button
          onClick={(e, id) => deleteEmployee(e, employee.id)}
          href="#"
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Employee;
