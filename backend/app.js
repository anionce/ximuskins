var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var fearToFailRouter = require("./routes/feartofail");
<<<<<<< HEAD:backend/app.js
var foodRouter = require("./routes/food");
=======
var silentHeroRouter = require('./routes/silenthero');
>>>>>>> 1e875ed0a1b7e81e2c4e330b269c68d5c24ee631:app.js

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
<<<<<<< HEAD:backend/app.js
app.use("/users", fearToFailRouter);
app.use("/food", foodRouter);
=======
app.use("/feartofail", fearToFailRouter);
app.use('/silenthero', silentHeroRouter);

>>>>>>> 1e875ed0a1b7e81e2c4e330b269c68d5c24ee631:app.js

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
