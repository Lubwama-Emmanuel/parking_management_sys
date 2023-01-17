const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path: './config.env'});


const port = process.env.PORT || 4000;

const DB = process.env.DATABASE_URL.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.set('strictQuery', true)
  .connect(DB)
  .then((con) => console.log("DATABASE CONNECTED SUCCESSFULLY"))
  .catch((err) => console.log("OOOOoooops its not connected"));

app.listen(port, () => console.log(`----server running on port: ${port}`));
