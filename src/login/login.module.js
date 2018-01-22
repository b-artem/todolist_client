'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs/release/angular-ui-router';

import loginComponent from './login.component';

export default angular.module('todoList.login', [uiRouter]).
  component('login', loginComponent()).
  name;
