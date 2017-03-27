'use strict';
const angular = require('angular');

export default angular.module('ng2FullstackApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
