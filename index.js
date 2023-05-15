const express = require("express");
const app = express();
const PORT = 3000;
// HTTP Methods
// CRUD, create, read, update, destroy
//Typically our routes need a http method so that it only triggers when you use that method.

//A route is a path on your server to something
app.get("/hello", (req, res) => {
  res.send("Hello DC Students");
});
app.get("/get_username", (req, res) => {
  res.send("justincodesstuff");
});
app.get("/get_students", (req, res) => {
  const students = [
    {
      name: "daniel",
    },
    {
      name: "kim",
    },
    {
      name: "ashley",
    },
  ];

  res.json(students);
});
app.get("/family", (req, res) => {
  const family = [
    {
      name: "Justin",
    },
    {
      name: "Celese",
    },
    {
      name: "Kacie",
    },
    {
      name: "Wes",
    },
    {
      name: "Kerrigan",
    },
    {
      name: "Frankie",
    },
  ];

  res.json(family);
});
app.put("/put_stuff", (req, res) => {
  res.send("you did a put command");
});
app.delete("/adios", (req, res) => {
  res.send("FATAL - All files deleted!");
});
app.post("/postman", (req, res) => {
  res.send("you did a post request");
});
app.post("/sum", (req, res) => {
  const sum = 2 + 2;
  res.send(`${sum}`);
});
app.listen(PORT, console.log(`listening on port ${PORT}`));
