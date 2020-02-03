# Hoisin theme for Drupal
A basic starter theme built using our starter Sass front end mini-framework Hoisin.

For information about the Hoisin grid system and its documentation, please visit the dedicated website at [Hoisin.scss](https://cyber-duck.github.io/hoisin.scss/).

## Installation
Download and put in your project?

Change the name of the root folder of the theme to match your desired theme name, and also change the filenames of the `.theme`, `.info.yml` and `.libraries.yml` and the related values within these files to also match the desired name of your theme.

## Setting build system up
This theme includes a basic Gulp build system that allows you to compile Sass to CSS, combine and compress JS files and it comes bundled with Babel and Autoprefixer.

Run `npm install` to download all the development dependencies (please note Gulp 4 is required, as well as Sass and a recent version of Node/NPM). ONce the instalation finished you'll be ready to compile assets.

The Gulpfile comes with all paths set up, but if you need to move files around, you can update the settings within the `config`  object. Also, you can add your JS files to be combined, in the `jsFiles` object.

### Build options / commands
By running `gulp` in the terminal at the root of the theme, you will start the watching task, which will check for changes on both, Sass & JS files in your theme to run the compiler.

Other options are `gulp cssDev` to only run Sass compiler once, `gulp js` to combine JS files once, and `gulp build` to compile and generate minified production ready assets.

### JavaScript notes
Please note that the build system automatically generates the start and end of the compiled JavaScript file with the Drupal behaviours attached, so everything inside will be ready to use in Drupal, please follow file structure as the sample files included (including the use of  `.once()`) to keep consistency and ensure it all works properly.
