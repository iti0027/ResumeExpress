import express from "express";
import "dotenv/config";
import cors from "cors";
import router from "./routes/index.js";
import models, { sequelize } from "./models/index.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(async (req, res, next) => {
  req.context = {
    models,
  };
  next()
});

app.use("/user", router.user);
app.use("/certifications", router.certifications);
app.use("/workExperience", router.workExperience);

const PORT = process.env.PORT ??  3000;

app.get("/",(req, res) => {
    res.send("Welcome to the API");
});

const eraseDatabase = process.env.ERASE_DATABASE === 'true';
sequelize.sync({force: eraseDatabase}).then(async () => {
    if(eraseDatabase) {
        console.log("Database synchronized with force: true");
    }
    app.listen(PORT, ()=> {console.log(`Server is listening on port ${PORT}`)});
});



export default app;
