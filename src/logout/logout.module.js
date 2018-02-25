'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs/release/angular-ui-router';
import ngTokenAuth from 'ng-token-auth';

import logoutComponent from './logout.component';

export default angular.module('todoList.logout', [uiRouter, ngTokenAuth]).
  component('logout', logoutComponent()).
  name;
