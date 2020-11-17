const { Pet } = require("../models/Pet.model");

module.exports.createPet = (req, res) => {
  Pet.create(req.body)
    .then((createdPet) => res.json(createdPet))
    .catch((err) => res.json(err));
};

module.exports.getPets = (req, res) => {
  Pet.find({}, null, { sort: { type: 1 } })
    .then((Pets) => res.json(Pets))
    .catch((err) => res.json(err));
};

module.exports.getPet = (req, res) => {
  Pet.find({ _id: req.params.id })
    .then((Pet) => res.json(Pet))
    .catch((err) => res.json(err));
};

module.exports.updatePet = (req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPet) => res.json(updatedPet))
    .catch((err) => res.json(err));
};

module.exports.deletePet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then((deletedPet) => res.json(deletedPet))
    .catch((err) => res.json(err));
};
