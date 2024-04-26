const controller = require("../controllers/driver.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/drivers/dat", controller.getBase64);
  app.get("/api/drivers/path", controller.getPath);
  app.post("/api/driver", controller.upload);
};
