import app from './app';
import {configDotenv} from "dotenv";
import {RateLimiterMiddleware} from "./middlewares/rate-limiter.middleware";

// configure
configDotenv()

// load the port
const port: string = process.env.PORT ?? '3000';

app.listen(port, () => {
    console.log(`Server is running on port:${port}`)
})