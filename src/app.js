'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs/release/angular-ui-router';
import ngTokenAuth from 'ng-token-auth';
import ngCookie from 'angular-cookie';

import logo from './images/logo.svg';
import './scss/application.scss';

import config from './app.config';
import projectList from './project-list/project-list.module';
import signup from './signup/signup.module';
import login from './login/login.module';
import logout from './logout/logout.module';

const app = angular.module('todoList', [
  uiRouter,
  ngTokenAuth,
  ngCookie,
  projectList,
  signup,
  login,
  logout
])
.config(config);


// app.$inject = ['$rootScopeProvider'];
//
// app.run(function($rootScope) {
//   $rootScope.$on('auth:login-success', function(ev, user) {
//     alert('Welcome ' + user.email);
//   });
// });
