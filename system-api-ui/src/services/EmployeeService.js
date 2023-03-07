/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8082/api/v1";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(`${EMPLOYEE_API_BASE_URL}/employee`, employee);
  }

  getEmployees() {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/employees`);
  }

  deleteEmployee(id) {
    return axios.delete(`${EMPLOYEE_API_BASE_URL}/employee/` + id);
  }

  getEmployeeById(id) {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/employee/` + id);
  }

  updateEmployee(employee, id) {
    return axios.put(`${EMPLOYEE_API_BASE_URL}/employee/` + id, employee);
  }
}

export default new EmployeeService();
