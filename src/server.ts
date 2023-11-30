import { app } from "./app";
import { populateDummyData } from "./database/database_seed";
import {CONFIG} from "./config"

const environment = process.env.NODE_ENV || "dev";
const PORT = CONFIG.port;

console.log(`🌍 Running in ${environment} environment`);

app.listen(PORT, () => {
	console.log(`🚂 Express started on port ${PORT}`);

	// Seed the database with some data
	if (environment === "dev") {
		populateDummyData();
	}
});
