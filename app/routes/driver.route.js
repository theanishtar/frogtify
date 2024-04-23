const controller = require("../controllers/driver.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  // app.get("/api/driver", controller.dangth);
  app.post("/api/driver", controller.upload);
};
