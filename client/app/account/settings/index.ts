'use strict';
const angular = require('angular');
import SettingsController from './settings.controller';

export default angular.module('ng2FullstackApp.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
