import express, {Express} from 'express';
import router from "./routes/router";

const app: Express = express();

app.use(express.json());

// bind routes
app.use(router)

// TODO: bind fallback route

export default app;