import express, {Express} from 'express';
import router from "./routes/router";
import {LoggerMiddleware} from "./middlewares/logger.middleware";
import {RateLimiterMiddleware} from "./middlewares/rate-limiter.middleware";

const app: Express = express();

app.use(express.json());

app.use(RateLimiterMiddleware)

// bind the logger middleware
app.use(LoggerMiddleware)

// bind routes
app.use(router)

// TODO: bind fallback route

export default app;