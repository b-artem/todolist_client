'use strict';

import angular from 'angular';
import ngFlash from 'angular-flash-alert';
import uiRouter from '@uirouter/angularjs/release/angular-ui-router';
import ngTokenAuth from 'ng-token-auth';

import signupComponent from './signup.component';

export default angular.module('todoList.signup', [ngFlash, uiRouter, ngTokenAuth]).
  component('signup', signupComponent()).
  name;
