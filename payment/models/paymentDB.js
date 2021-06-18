// Database connection
const mongoose = require("mongoose")

var dbURL = "mongodb+srv://dbuser:db1234@nodenuts.thkf8.mongodb.net/cropdeal_payment"
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => console.log('Connected to payment database'))
  .catch((err) => console.log(err));