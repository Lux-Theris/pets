import "dotenv/config";
import "express-async-errors";
import express, { json } from "express";
import { errorHandler } from "./middlewares/errorMidleware";
import sequelize from "./config/database";
import { petsRouter } from "./routes/petRoutes";

export const app = express();
const port = 3000;

app.use(json());
app.use(petsRouter);
app.use(errorHandler);

if (require.main === module) {
  sequelize.sync({ force: true }).then(() => {
    console.log("Database is synced");
    app.listen(port, () =>
      console.log(`Listening at http://localhost:${port}`),
    );
  });
}
