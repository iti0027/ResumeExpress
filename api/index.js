import express from "express";
import "dotenv/config";
import cors from "cors";
import { Sequelize } from "sequelize";
import router from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", router.user);
app.use("/certifications", router.certifications);
app.use("/workExperience", router.workExperience);

const PORT = process.env.PORT ??  3000;
app.listen(PORT, ()=> {`Server is listening on port ${PORT}`});



app.get("/",(req, res) => {
    res.send("Welcome to the API");
});

export default app;
