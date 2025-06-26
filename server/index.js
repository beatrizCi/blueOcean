const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/join", (req, res) => {
  const { email } = req.body;
  console.log("New join request:", email);
  res.send({ message: "Thank you for joining the mission!" });
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));