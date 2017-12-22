'use strict';

import angular from 'angular';

import logoutComponent from 'logout/logout.component';

export default angular.module('todoList.logout', []).
  component('logout', logoutComponent()).
  name;
