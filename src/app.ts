import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
//  import router from './app/routes';
import httpStatus from "http-status";
import router from "./app/routes";

app.use(cors());

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", router);

// Api Error Route Handler
app.use((req: Request, res: Response, next: NextFunction) => {
	res.status(httpStatus.NOT_FOUND).json({
		success: false,
		message: "Not Found",
		errorMessage: [
			{
				path: req.originalUrl,
				message: "API Not Found",
			},
		],
	});
	next();
});

export default app;
