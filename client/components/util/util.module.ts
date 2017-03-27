'use strict';
const angular = require('angular');
import {UtilService} from './util.service';

export default angular.module('ng2FullstackApp.util', [])
  .factory('Util', UtilService)
  .name;
