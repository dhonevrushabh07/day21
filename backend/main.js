const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
const { selectAllUser, addUser } = require("./src/user");
app.use(cors());

//http://localhost:4000/users

app.get("/users", async (req, res) => {
  const list = await selectAllUser();
  res.json(list);
});

//http://localhost:4000/add-user
app.post("/add-user", async (req, res) => {
  const user = req.body;
  await addUser(user);
  res.json({ message: "Record Added" });
});

app.listen(4000, () => console.log("Server Started"));
