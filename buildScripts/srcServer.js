/* eslint-disable no-console */

import express from "express";
import webpack from "webpack";
import config from "../webpack.config.dev.js";
import path from "path";
import chalk from "chalk";
// import open from "open";

const app = express();
const compiler = webpack(config);
const port = 4000;

app.use(require("webpack-dev-middleware") (compiler, {
	noInfo: true,
	publicPath:config.output.publicPath
}));

app.listen(port, function (err) {
	if (err) {
		console.log(err);
	} else {

		console.log(chalk.green.underline("Server running on port " + port));
	}
});

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "../src/index.html"));
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
