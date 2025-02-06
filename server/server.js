import http from "http";
import dotenv from 'doenv';
import app from "./index"

dotenv.config()

const server = http.createServer(app)

const PORT = process.env.PORT || 4000

server.listen(PORT|| 4000,Console.log(`Server listening on Port:${PORT}`))