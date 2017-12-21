'use strict';

import 'angular';
import ngRoute from 'angular-route';
import ngTokenAuth from 'ng-token-auth';
import ngCookie from 'angular-cookie';

import logo from 'images/logo.svg';
import 'scss/application.scss';

import config from 'app.config';
import projectList from 'project-list/project-list.module';
import signup from 'signup/signup.module';
import login from 'login/login.module';
import logout from 'logout/logout.module';

export const apiUrl = 'http://localhost:3000/api/v1';

const app = angular.module('todolistApp', [
  ngRoute,
  ngTokenAuth,
  ngCookie,
  projectList,
  signup,
  login,
  logout
  // 'ngAnimate',
  // 'core',
  // 'phoneDetail',
  // 'phoneList'
])
.config(config);


// app.$inject = ['$rootScopeProvider'];
//
// app.run(function($rootScope) {
//   $rootScope.$on('auth:login-success', function(ev, user) {
//     alert('Welcome ' + user.email);
//   });
// });
