'use strict';

import angular from 'angular';
import ngResource from 'angular-resource';

import taskService from './task.service';

export default angular.module('todoList.core.task', [ngResource]).
  service('Task', taskService).
  name;
