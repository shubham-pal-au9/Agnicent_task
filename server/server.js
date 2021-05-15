const mongoose = require("mongoose");
const http = require("http");
const app = require("./app");

require("dotenv").config();

const port = process.env.PORT || 3002;
const server = http.createServer(app);


// Connecting to the DB
mongoose.promise = global.Promise;
DB = "mongodb+srv://Shubham:shubhampal@cluster0.zrvpy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
  }) 
  .then(() => {
    console.log("Database connected");
  })
  .catch(err => console.log(err));

server.listen(port, () => {
  console.log(`listening on ${port}`);
});
