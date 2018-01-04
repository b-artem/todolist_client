'use strict';

import angular from 'angular';

import createTaskFormComponent from './create-task-form.component';

export default angular.module('todoList.createTaskForm', []).
  component('createTaskForm', createTaskFormComponent()).
  name;
