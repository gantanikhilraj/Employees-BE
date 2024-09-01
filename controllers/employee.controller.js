import { deleteEmployee, CreateNewEmployee, getEmployeeById, getEmployees, updateEmployeeDetails } from "../services/employee.service.js";
import { v4 as uuidv4 } from 'uuid';

async function getEmployeesCtr(req, res) {
    try {
        const employees = await getEmployees();
        res.status(200).send(employees.data);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

async function getEmployeeByIdCtr(req, res) {
    try {
        const { id } = req.params;
        const employee = await getEmployeeById(id);
        res.status(200).send(employee.data);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

async function CreateNewEmployeeCtr(req, res) {
    try {
        const data = req.body;
        const addEmployee = {
            ...data,
            id: uuidv4(),
          };
        // console.log(addEmployee);
        await CreateNewEmployee(addEmployee);
        res.status(200).send(addEmployee);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

async function updateEmployeeDetailsCtr(req, res) {
    const { id } = req.params;
        const { employeeName, employeeLocation, employeeCode, employeeDepartment, employeeEmail } = req.body;
        const existing = await getEmployeeById(id);
        const updateData = { employeeName, employeeLocation, employeeCode, employeeDepartment, employeeEmail };
    try {
        await updateEmployeeDetails(existing, updateData);
        res.status(200).send({ id, ...updateData });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

async function deleteEmployeeCtr(req, res) {
    const { id } = req.params;
    getEmployeeById(id);
    try {
        await deleteEmployee(id);
        res.status(200).send({ message: "Employee deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export { getEmployeesCtr, getEmployeeByIdCtr, CreateNewEmployeeCtr, updateEmployeeDetailsCtr, deleteEmployeeCtr };