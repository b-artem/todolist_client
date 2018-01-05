'use strict';

import angular from 'angular';

import taskComponent from './task.component';
import taskService from 'core/task/task.module';
import modal from 'modal/modal.module';

export default angular.module('todoList.task', [taskService, modal]).
  component('task', taskComponent()).
  name;
