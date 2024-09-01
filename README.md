# Employee Management Backend

This project is a backend application for managing employee data using Express.js and ElectroDB. It provides RESTful APIs to create, read, update, and delete employee records.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js, used to build the server and handle routing.
- **ElectroDB**: A library for managing DynamoDB tables with a structured and type-safe approach.
- **AWS SDK for JavaScript**: Used for interacting with AWS services.
- **UUID**: Library to generate unique identifiers for new employee records.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.

## Project Structure

- `app.js`: Main application file that sets up the Express server.
- `routes/employee.route.js`: Defines the API endpoints for employee operations.
- `controllers/employee.controller.js`: Contains controller functions to handle API requests.
- `entities/employee.entity.js`: Defines the Employee entity using ElectroDB.
- `services/employee.service.js`: Provides service functions to interact with the database.

## Prerequisites

- Node.js and npm installed on your machine.
- AWS account with DynamoDB table named `employee`.
- Environment variables set up for AWS credentials and DynamoDB configuration.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/employee-management-backend.git
cd employee-management-backend
```

# Install Dependencies
```bash
 npm install
```

#Set Up Environment Variables
```bash
PORT=4000
AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-access-key
AWS_REGION=your-region
```
```bash
#Run the Application
- npm start
```