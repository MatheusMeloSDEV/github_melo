import express from "express";
import cors from "cors"
import { addUser, deleteUser, getUsers, updateUser } from "./controllers/userContainer.js";
import { addUserMov, deleteUserMov, getUsersMov, updateUserMov } from "./controllers/userMovimentacoes.js";
import { getUsersRelatorio } from "./controllers/userRelatorio.js";

const app = express();

app.use(express.json())
app.use(cors())

app.get('/container', getUsers)

app.post("/container", addUser)

app.put("/container:id", updateUser)

app.delete("/container:id", deleteUser)

app.get('/movimentacoes', getUsersMov)

app.post("/movimentacoes", addUserMov)

app.put("/movimentacoes:id", updateUserMov)

app.delete("/movimentacoes:id", deleteUserMov)

app.get('/relatorio', getUsersRelatorio)

app.listen(8801)

//localhost:8800/..