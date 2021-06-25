// Database connection
const mongoose = require("mongoose")

var dbURL = "mongodb+srv://dbuser:db1234@nodenuts.thkf8.mongodb.net/cropdeal_admin"
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
  .then((result) => console.log("Connected to admin database..."))
  .catch((err) => console.log('Database is not connected :', String(err)));