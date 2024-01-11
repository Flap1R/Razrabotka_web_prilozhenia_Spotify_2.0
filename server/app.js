const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = 5001;
require("./db");

app.use(express.json());
app.use(cors());

app.use("/api/user", require("./routes/user"));
app.use("/api/playlist", require("./routes/playlist"));
app.use("/api/album", require("./routes/album"));
app.use("/api/artist", require("./routes/artist"));
app.use("/api/profile", require("./routes/profile"));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
