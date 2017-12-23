'use strict';

import angular from 'angular';

import projectComponent from './project.component';

export default angular.module('todoList.project', []).
  component('project', projectComponent()).
  name;
