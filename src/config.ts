import * as dotenv from "dotenv";
dotenv.config();
export const CONFIG = {
	port: process.env.PORT ?? 3000,
	dbName: process.env.DB_NAME ?? "sqlite::memory:",
	dbUserName: process.env.DB_USERNAME ?? "",
	dbPassword: process.env.DB_PASSWORD ?? "",
	dbHost: process.env.DB_HOST ?? "localhost",
	dbPort: process.env.DB_PORT ?? 5432,
	dbDialect: process.env.DB_DIALECT ?? "sqlite",
} as const;
