'use strict';

import angular from 'angular';

import loginComponent from './login.component';

export default angular.module('todoList.login', []).
  component('login', loginComponent()).
  name;
