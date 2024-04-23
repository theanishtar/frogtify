const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const bodyParser = require('body-parser');
const http = require('http'); // Import module http
const Redis = require("ioredis");
const db = require("./app/models");
const config = require('./app/config/index');
var dotent = require('dotenv');
var getIP = require('ipware')().get_ip;
const axios = require('axios');

const app = express();
const server = http.createServer(app); // Tạo server từ express app

dotent.config();
app.use(cors());
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.set('trust proxy', true); // Enable proxy trust

//---------- CONFIG SERVER  ---------------------
// set port, listen for requests
const PORT = process.env.PORT || 5152;
const mongodbURI = process.env.MONGODB_URI;
/*----------------------------------------------*/
/**--------------------- DB CONNECTIONS -------------------------*/
const connectionStatus = {
  mongoDB: false
}

db.mongoose
  .connect(mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    connectionStatus.mongoDB = true;
    console.log("Successfully connect to MongoDB." + mongodbURI);
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

/*-------------------------- ROUTES ------------------- */
app.get('/', (req, res) => {
  res.json({
    live: "Hello server is live",
    connection: connectionStatus
  });
});


require("./app/routes/countview.route")(app);
require("./app/routes/github.route")(app, axios);
require("./app/routes/blog.route")(app);
require("./app/routes/auth.route")(app);

//Thay vì sử dụng app.listen, sử dụng server.listen để sử dụng cùng một cổng cho cả express app và Socket.IO:
server.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}.`);
});
