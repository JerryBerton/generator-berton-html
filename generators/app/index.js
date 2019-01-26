'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the exceptional ${chalk.red('generator-berton-html')} generator!`)
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }
  writing() {
    const arr = [
      '.gitignore',
      'webpack.config.dev.js',
      'webpack.config.prod.js',
      'package.json',
      '.babelrc',
      '.eslintignore',
      '.eslintrc.js',
      'src'
    ]
    const _this = this
    arr.forEach(function(item) {
      _this.fs.copy(
        _this.templatePath(item),
        _this.destinationPath(item)
      );
    })
  }

  install() {
    this.installDependencies();
  }
};
