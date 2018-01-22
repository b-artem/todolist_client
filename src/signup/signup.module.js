'use strict';

import angular from 'angular';
import ngFlash from 'angular-flash-alert';
import uiRouter from '@uirouter/angularjs/release/angular-ui-router';

import signupComponent from './signup.component';

export default angular.module('todoList.signup', [ngFlash, uiRouter]).
  component('signup', signupComponent()).
  name;
