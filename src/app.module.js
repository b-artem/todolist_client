'use strict';

import 'angular';
import 'scss/application.scss';
import logo from 'images/logo.svg';

import projectList from 'project-list/project-list.module';



export default angular.module('todolistApp', [
  projectList,
  // 'ngAnimate',
  // 'ngRoute',
  // 'core',
  // 'phoneDetail',
  // 'phoneList'
]).name;
