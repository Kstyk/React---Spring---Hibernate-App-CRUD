package com.example.employeesystemapi.services;

import com.example.employeesystemapi.entity.EmployeeEntity;
import com.example.employeesystemapi.model.Employee;
import com.example.employeesystemapi.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceimpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    public EmployeeServiceimpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();

        BeanUtils.copyProperties(employee, employeeEntity);

        employeeRepository.save(employeeEntity);

        return employee;
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<EmployeeEntity> employeeEntities = employeeRepository.findAll();

        List<Employee> employees = employeeEntities.stream().map(emp ->
                new Employee(emp.getId(), emp.getFirstName(), emp.getLastName(), emp.getEmailId())).collect(Collectors.toList());
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity employee = employeeRepository.findById(id).get();
        employeeRepository.delete(employee);
        return true;
    }

    @Override
    public Employee getEmployeeById(Long id) {
        EmployeeEntity employee = employeeRepository.findById(id).get();

        Employee employee1 = new Employee();

        BeanUtils.copyProperties(employee, employee1);

        return employee1;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
        employeeEntity.setEmailId(employee.getEmailId());
        employeeEntity.setFirstName(employee.getFirstName());
        employeeEntity.setLastName(employee.getLastName());

        employeeRepository.save(employeeEntity);
        return employee;
    }
}
