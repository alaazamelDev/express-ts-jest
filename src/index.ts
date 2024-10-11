import app from './app';
import {configDotenv} from "dotenv";

// configure
configDotenv()

// load the port
const port: string = process.env.PORT ?? '3000';

app.listen(port, () => {
    console.log(`Server is running on port:${port}`)
})