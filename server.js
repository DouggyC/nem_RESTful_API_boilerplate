require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const model = require("./routes/models");

const connectDB = require("./config/db");
connectDB();

const app = express();
app.use(express.json());

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use("/api/v1/models", models);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on PORT: ${PORT}`));
