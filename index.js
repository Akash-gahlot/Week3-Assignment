const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

let toDos = [
  { id: 121, title: "TV", description: "to watch movie" },
  { id: 122, title: "code", description: "to complete week3 assignment" },
  { id: 123, title: "sport", description: "to play futbool" },
];

app.use(cors());
app.get("/", (req, resp) => {
  resp.send("hit server");
});
app.get("/todo", (req, resp) => {
  resp.send(toDos);
});
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
