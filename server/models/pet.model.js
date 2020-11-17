const mongoose = require("mongoose");

const PetSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A name is required"],
      minlength: [3, "Name must be at least 3 characters long"],
      index: true,
      unique: [true, "Name already exists in the database"],
    },
    type: {
      type: String,
      required: [true, "A type is required"],
      minlength: [3, "Type must be at least 3 characters long"],
    },
    description: {
      type: String,
      required: [true, "A description is required"],
      minlength: [3, "Description must be at least 3 characters long"],
    },
    skills: {
      type: Array,
    },
    likes: {
      type: Number,
    },
  },
  { timestamps: true }
);

PetSchema.post("save", function (error, doc, next) {
  if (error.name === "MongoError" && error.code === 11000) {
    next(new Error("Name must be unique"));
  } else {
    next(error);
  }
});

module.exports.Pet = mongoose.model("Pet", PetSchema);
