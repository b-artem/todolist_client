'use strict';

import angular from 'angular';

import loginComponent from 'login/login.component';

export default angular.module('login.module', []).
  component('login', loginComponent()).
  name;
