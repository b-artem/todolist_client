'use strict';

import angular from 'angular';

import projectComponent from './project.component';
import taskListComponent from 'task-list/task-list.module';
import modal from 'modal/modal.module';

export default angular.module('todoList.project', [taskListComponent, modal]).
  component('project', projectComponent()).
  name;
