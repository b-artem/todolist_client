'use strict';

import 'angular';
import ngRoute from 'angular-route';
import ngTokenAuth from 'ng-token-auth';
import ngCookie from 'angular-cookie';

import logo from 'images/logo.svg';
import 'scss/application.scss';

import config from 'app.config'
import projectList from 'project-list/project-list.module';
import login from 'login/login.module'

export const apiUrl = 'http://localhost:3000/api/v1/';

export default angular.module('todolistApp', [
  ngRoute,
  ngTokenAuth,
  ngCookie,
  projectList,
  login
  // 'ngAnimate',
  // 'core',
  // 'phoneDetail',
  // 'phoneList'
])
.config(config)
.name;
