const PetController = require("../controllers/pet.controllers");

module.exports = function (app) {
  app.get("/api/pets", PetController.getPets);
  app.get("/api/pets/:id", PetController.getPet);
  app.post("/api/pets/new", PetController.createPet);
  app.put("/api/pets/:id", PetController.updatePet);
  app.delete("/api/pets/:id", PetController.deletePet);
};
