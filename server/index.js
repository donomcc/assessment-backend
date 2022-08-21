const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getFortune,
  getFood,
  getMonsters,
  createMonster,
  deleteMonster,
} = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/foods", getFood);
app.get("/api/monsters", getMonsters);
app.post("/api/monsters", createMonster);
app.delete("/api/monsters/:id", deleteMonster);

app.listen(4000, () => console.log("Server running on 4000"));
