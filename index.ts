import express ,{ Express,Request,Response} from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDatabase } from "./config/database";
import Task from "./models/task.model";
import { routesApi } from "./routes/client/index.route";
connectDatabase();


const app:Express = express();
const port: number | string = process.env.PORT || 3000;

routesApi(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

