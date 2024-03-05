import cors from "cors";
<<<<<<< HEAD
import express, { Express } from "express";
import {exposeApp} from "@/utils";
import { envConfig } from "@/config";
import { appStrings } from "@/constants";
import { connectToDb } from "@/database/Connection";
import { authRoutes, projectRoutes, taskRoutes, userRoutes } from "@/routes";
=======
import express, {Express} from "express";

// import {exposeApp} from "@/utils";
import {envConfig} from "@/config";
import {appStrings} from "@/constants";
import {connectToDb} from "@/database";
import {initializeRoutes} from "@/routes";
>>>>>>> d8349b56b0b14319a8f7d9b7c766915e0bf56740

const app: Express = express();

// Built in middleware function in express. https://expressjs.com/en/api.html
app.use(express.json());
app.use(express.urlencoded({extended: true}));

connectToDb();

app.use(cors());

initializeRoutes(app);

try {
<<<<<<< HEAD
  app.listen(envConfig.port, () => console.log(`${appStrings.server_start_success} at port ${envConfig.port}`));

  exposeApp();
=======
  app.listen(envConfig.port, () => console.log(`${appStrings.serverStartSuccess} at port ${envConfig.port}`));

  // exposeApp();
>>>>>>> d8349b56b0b14319a8f7d9b7c766915e0bf56740
} catch (err) {
  throw new Error(`${appStrings.serverStartFailure} -> ${err}`);
}
