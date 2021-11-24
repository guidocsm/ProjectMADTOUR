// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config/session.config")(app);
require("./config")(app);

// default value for title local
const projectName = "MADTOUR";
// const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = projectName;

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const reviewRoutes = require("./routes/reviews.routes");
app.use("/reviews", reviewRoutes);

const artRoutes = require("./routes/art.routes");
app.use("/arts", artRoutes);

const entRoutes = require("./routes/ent.routes");
app.use("/ent", entRoutes);

const gastronomyRoutes = require("./routes/gastronomy.routes");
app.use("/gastronomy", gastronomyRoutes);
// 👇 Start handling routes here
const index = require("./routes/index");
app.use("/", index);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
