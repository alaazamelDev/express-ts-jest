import express, {Express} from 'express';
import router from "./routes/router";
import {LoggerMiddleware} from "./middlewares/logger.middleware";

const app: Express = express();

app.use(express.json());

// bind the logger middleware
app.use(LoggerMiddleware)

// bind routes
app.use(router)

// TODO: bind fallback route

export default app;