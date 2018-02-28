'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs/release/angular-ui-router';
import ngTokenAuth from 'ng-token-auth';

import loginComponent from './login.component';

export default angular.module('todoList.login', [uiRouter, ngTokenAuth]).
  component('login', loginComponent()).
  name;
