import * as http from "http";
import app from "./src/app.js";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
