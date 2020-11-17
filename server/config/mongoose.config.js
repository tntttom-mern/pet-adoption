const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/petdb", {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connection established"))
  .catch((err) => console.log("There was an error", err));
