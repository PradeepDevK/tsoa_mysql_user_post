import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger/swagger.json";
import { RegisterRoutes } from "./routes/routes";

const app = express();
app.use(express.json());

RegisterRoutes(app);

app.get("/", (req: Request, res: Response) => {
    res.send("TSOA + Prisma + MySQL API");
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/docs`);
});