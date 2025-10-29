import express from "express";
import "dotenv/config";
import cors from "cors";
import { Sequelize } from "sequelize";
import router from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT ??  3000;
app.listen(PORT, ()=> {`Server is listening on port ${PORT}`});



app.get("/",(req, res) => {
    res.send("Welcome to the API");
});

export default app;
