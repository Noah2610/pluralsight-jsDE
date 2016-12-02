/* eslint-disable no-console */

import express from "express";
import path from "path";
import chalk from "chalk";
import compression from "compression";
// import open from "open";

const app = express();
const port = 4000;

app.use(compression());
app.use(express.static("dist"));

app.listen(port, function (err) {
	if (err) {
		console.log(err);
	} else {

		console.log(chalk.green.underline("Server running on port " + port));
	}
});

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "../dist/index.html"));
	// console.log(req);
	// console.log(res);
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});
