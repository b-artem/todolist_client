'use strict';

import angular from 'angular';

import logoutComponent from 'logout/logout.component';

export default angular.module('logout.module', []).
  component('logout', logoutComponent()).
  name;
