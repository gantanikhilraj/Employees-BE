import express from "express"; 
import cors from "cors";
import emp from "./routes/employee.route.js";

const app = express();

const PORT =  process.env.PORT | 4000;

app.use(cors());
app.use(express.json());

app.use("/employee", emp);

app.get("/", function (request, response) {
  response.send("BackEnd With Express 👨‍💻");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
