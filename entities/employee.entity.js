import { Entity } from "electrodb";
import { client } from "../util/dbconnection.js";

const Employee = new Entity(
    {
        model: {
            entity: "Employee",
            version: "1",
            service: "EmployeeService",
        },
        attributes: {
            id: {
                type: "string",
            },
            employeeName: {
                type: "string",
            },
            employeeLocation: {
                type: "string",
            },
            employeeCode: {
                type: "string",
            },
            employeeDepartment: {
                type: "string",
            },
            employeeEmail: {
                type: "string",
            },
        },
        indexes: {
            primary: {
                pk: {

                    field: "pk",
                    facets: ["id"],
                },
                sk: {

                    field: "sk",
                    facets: [],
                },
            },
        },
    },
    { client, table: "employee" }
);

export { Employee };
