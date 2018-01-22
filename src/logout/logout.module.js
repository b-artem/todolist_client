'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs/release/angular-ui-router';

import logoutComponent from './logout.component';

export default angular.module('todoList.logout', [uiRouter]).
  component('logout', logoutComponent()).
  name;
