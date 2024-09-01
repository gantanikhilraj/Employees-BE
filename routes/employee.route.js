import express from 'express';
import { getEmployeesCtr, CreateNewEmployeeCtr, deleteEmployeeCtr, getEmployeeByIdCtr, updateEmployeeDetailsCtr } from '../controllers/employee.controller.js';
const router = express.Router();


router.route("/").get(getEmployeesCtr).post(CreateNewEmployeeCtr);

router.route("/:id").get(getEmployeeByIdCtr).put(updateEmployeeDetailsCtr).delete(deleteEmployeeCtr);


export default router;
