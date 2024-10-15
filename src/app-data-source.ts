import {DataSource} from "typeorm";

// export const AppDataSource: DataSource = new DataSource({
//     type: 'postgres',
//     host: process.env.DB_HOST,
//     port: Number(process.env.DB_PORT ?? 5432),
//     database: process.env.DB_NAME,
//     username: process.env.DB_USER,
//     password: String(process.env.DB_PASSWORD),
//     entities: ["src/entities/*.entity.ts"],
//     logging: true,
//     synchronize: true,
// });

export const AppDataSource: DataSource = new DataSource({
    type: 'postgres',
    host: "localhost",
    port: 5432,
    database: "express",
    username: "postgres",
    password: "password",
    entities: ["src/entities/*.entity.ts"],
    logging: true,
    synchronize: true,
});