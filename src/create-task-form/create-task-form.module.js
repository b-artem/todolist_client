'use strict';

import angular from 'angular';

import createTaskFormComponent from './create-task-form.component';
import taskCore from 'core/task/task.module';

export default angular.module('todoList.createTaskForm', [taskCore]).
  component('createTaskForm', createTaskFormComponent()).
  name;
