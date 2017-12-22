'use strict';

import angular from 'angular';

import signupComponent from 'signup/signup.component';

export default angular.module('todoList.signup', []).
  component('signup', signupComponent()).
  name;
