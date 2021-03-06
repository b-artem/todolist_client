'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs/release/angular-ui-router';
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
  ngCookie,
  projectList,
  signup,
  login,
  logout
])
.config(config);
