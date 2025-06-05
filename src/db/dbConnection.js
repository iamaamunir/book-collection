import mongoose from "mongoose";
import CONFIG from "../config/config.js";

function DbConnection() {
  mongoose.connect(CONFIG.MONGODB_URL);
  mongoose.connection.on("connected", () => {
    console.log("Connection to MongoDB is successful");
  });
  mongoose.connection.on("error", (err) => {
    console.log("Unable to Connect to MongoDB", err);
  });
}

export default DbConnection;
