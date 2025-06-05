import * as http from "http";
import app from "./src/app.js";
import DbConnection from "./src/db/dbConnection.js";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
DbConnection();
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
