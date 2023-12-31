const Express = require("express");
const mongoose = require("mongoose");
const app = Express();
const jsonRoute = require("./models/jsonData");
const cors = require("cors");

const MONGODB = `mongodb://127.0.0.1:27017/jsondata`;
app.use(cors());

app.use(Express.json());

mongoose
  .connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb Connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/api/jsondata", jsonRoute);

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});
