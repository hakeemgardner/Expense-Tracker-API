const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const db = process.env.DB;

mongoose
  .connect(db)
  .then(() => {
    console.log("DB connection succesful");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
