'use strict';

import angular from 'angular';

import taskListComponent from './task-list.component';
import taskComponent from 'task/task.module';
import createTaskComponent from 'create-task-form/create-task-form.module';

export default angular.module('todoList.taskList', [taskComponent, createTaskComponent]).
  component('taskList', taskListComponent()).
  name;
