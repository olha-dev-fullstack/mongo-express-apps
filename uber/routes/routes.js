const DriversControlller = require("../controllers/driversController");
module.exports = (app) => {
  app.get("/api", DriversControlller.greeting);
  app.post('/api/drivers', DriversControlller.create);
};
