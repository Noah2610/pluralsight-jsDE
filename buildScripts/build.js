/* eslint-disable no-console */

import webpack from "webpack";
import webpackConfig from "../webpack.config.prod";
import chalk from "chalk";

// tell node we're running this in production mode
process.env.NODE_ENV = "production";

console.log(chalk.blue("Generating minified bundle for production. This will take a moment..."));

webpack(webpackConfig).run((err, stats) => {
	if (err) {  // fatal error occured, stop here
		console.log(chalk.red(err));
		return 1;
	}

	const jsonStats = stats.toJson();

	// display any errors that occur
  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

	// display any warnings that occur
  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }

	// display stats
  console.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded.
  console.log(chalk.green('Your app has been built for production and written to /dist!'));

	return 0;
});
