import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";

dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());
server.use(router)

const port = process.env.PORT;
server.listen(port, () => console.log(`Server running in port: ${port}`));
