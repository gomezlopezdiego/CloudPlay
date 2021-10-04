import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

const app = express();

//CONEXION A BASE DE DATOS 
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/musicapp';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

// Or using promises
mongoose.connect(uri, options).then(
  () => {
    console.log("Conectado a DB");
  },
  (err) => {
    console.log(err);
  }
);

//MIDDLEWARE
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));

//RUTAS
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// Middleware para Vue.js router modo history
const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

//PUERTO
// app.listen(3000, function () {
//   console.log("Example app listening on port 3000!");
// });
app.set("puerto", process.env.PORT || 3000);
app.listen(app.get("puerto"), function () {
  console.log("Example app listening on port" + app.get("puerto"));
});
