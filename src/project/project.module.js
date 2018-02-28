'use strict';

import angular from 'angular';

import projectComponent from './project.component';
import projectService from 'core/project/project.module';
import taskListComponent from 'task-list/task-list.module';
import modal from 'modal/modal.module';

export default angular.module('todoList.project',
  [projectService, taskListComponent, modal]).
  component('project', projectComponent()).
  name;
