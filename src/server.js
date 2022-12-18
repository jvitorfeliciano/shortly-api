import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());

const port = process.env.PORT;
server.listen(port, () => console.log(`Server running in port: ${port}`));
