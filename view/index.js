'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var ViewBase = require('../view-base.js');

var Generator = module.exports = function Generator() {
  ViewBase.apply(this, arguments);
  this.sourceRoot(path.join(__dirname, '../templates'));
};

util.inherits(Generator, ViewBase);

Generator.prototype.createViewFiles = function createViewFiles() {
  if (this.env.options.jade) {
    this.template(
      'common/view.jade',
      path.join(
        this.env.options.appPath,
        'views',
        this.name.toLowerCase() + '.jade'
      )
    );
  } else {
    this.template(
      'common/view.html',
      path.join(
        this.env.options.appPath,
        'views',
        this.name.toLowerCase() + '.html'
      )
    );
  }
};
