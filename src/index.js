//https://www.robinwieruch.de/node-express-server-rest-api
// import dotenv from 'dotenv'
import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

import models from "./models/index.js";
import routes from "./routes/index.js";

var HOST = "localhost";
var PORT = 3000;
var app = express();
app.listen(PORT, HOST, () => console.log(`Running on http://${HOST}:${PORT}`));

//Express built-in Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Authentication Middleware
app.use((req, res, next) => {
  console.log(req.headers);
  //console.log(req.body);
  // modify the request
  req.context = {
    models,
    user: models.users[1],
  };
  // only allow to access APIs if user is authenticated ie, req.user is not null, here we created a pseudo-authenticated user
  if (req.context.user != null) {
    next();
  }
});

//Modulars routes
app.use("/session", routes.session);
app.use("/users", routes.users);
app.use("/messages", routes.messages);


