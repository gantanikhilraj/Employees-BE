import { Employee } from "../entities/employee.entity.js";

async function deleteEmployee(id) {
  return await Employee.delete({ id }).go();
}

async function updateEmployeeDetails(existing, updateData) {
  return await Employee.put({ ...existing.data, ...updateData }).go();
}

async function CreateNewEmployee(employee) {
  return await Employee.create(employee).go();
}

async function getEmployeeById(id) {
  return await Employee.get({ id }).go();
}

async function getEmployees() {
  return await Employee.scan.go();
}

export { deleteEmployee, updateEmployeeDetails, CreateNewEmployee, getEmployeeById, getEmployees };