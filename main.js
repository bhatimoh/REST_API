const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
app.get("/api/users", function (req, res) {
  res.json(users);
});
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log(id);
  const t = users.find((x) => x.id === id);
  console.log(t);
  res.json(t);
});
app.post("/api/user", (req, res) => {
  // TODO :create new user
  return res.json({ status: "pending" });
});
app.patch("/api/user/:id", (req, res) => {
  // TODO :edit the user with given id
  return res.json({ status: "pending" });
});
app.delete("/api/user/:id", (req, res) => {
  // TODO :delete the user with id
  return res.json({ status: "pending" });
});

app.listen(3000);
