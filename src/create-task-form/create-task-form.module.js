'use strict';

import angular from 'angular';

import createTaskFormComponent from './create-task-form.component';
import taskService from 'core/task/task.module';

export default angular.module('todoList.createTaskForm', [taskService]).
  component('createTaskForm', createTaskFormComponent()).
  name;
