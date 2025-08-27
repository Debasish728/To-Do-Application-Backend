import express from "express";
import cors from "cors";
import apiRoutes from "./routes/api.js";
import errorHandler from "./utils/errorHandler.js";

const app = express();
//Middle ware needed for the application
app.use(cors());
app.use(express.json());

//Routes

app.use("/api", apiRoutes);
app.use(errorHandler);
app.get("/", (req, res) => {
	res.send("Api is Live🚀");
});
export default app;
