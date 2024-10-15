import app from './app';
import {configDotenv} from "dotenv";
import {AppDataSource} from "./app-data-source";
import 'reflect-metadata';

// configure
configDotenv()

// establish database connection
AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")

        // load the port
        const port: string = process.env.PORT ?? '3000';

        app.listen(port, () => {
            console.log(`Server is running on port:${port}`)
        })

    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

