const DriversControlller = require("../controllers/driversController");
module.exports = (app) => {
  app.get("/api", DriversControlller.greeting);
  app.post("/api/drivers", DriversControlller.create);
  app.put("/api/drivers/:id", DriversControlller.edit);
  app.delete("/api/drivers/:id", DriversControlller.delete);

  app.get("/api/drivers", DriversControlller.index);
};
