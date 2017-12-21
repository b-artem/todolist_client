'use strict';

import angular from 'angular';

import signupComponent from 'signup/signup.component';

export default angular.module('signup.module', []).
  component('signup', signupComponent()).
  name;
