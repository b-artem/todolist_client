'use strict';

import angular from 'angular';

import taskComponent from './task.component';
import taskService from 'core/task/task.module';
import modal from 'modal/modal.module';
import deadlineModal from 'deadline-modal/deadline-modal.module';

export default angular.module('todoList.task', [taskService, modal, deadlineModal]).
  component('task', taskComponent()).
  name;
