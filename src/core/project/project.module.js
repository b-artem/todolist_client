'use strict';

import angular from 'angular';
import ngResource from 'angular-resource';

import projectService from './project.service';

export default angular.module('todoList.core.project', [ngResource]).
  service('Project', projectService).
  name;
