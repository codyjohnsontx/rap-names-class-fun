const { request } = require("express");
const express = require("express");
const app = express();
const PORT = 5500;

const rappers = {
  "21 savage": {
    age: 29,
    birthName: "Sheyaa Bin Abraham-Joseph",
    birthLocation: "London, England",
  },
  "chance the rapper": {
    age: 29,
    birthName: "Chancelor Bennett",
    birthLocation: "Chicago, Illinois",
  },
  dylan: {
    age: 29,
    birthName: "Dylan",
    birthLocation: "Dylan",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapperName", (req, res) => {
  const rappersName = req.params.rapperName.toLowerCase();
  if (rappers[rappersName]) {
    res.json(rappers[rappersName]);
  } else {
    res.json(rappers["dylan"]);
  }
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}. Better go catch it`);
});
