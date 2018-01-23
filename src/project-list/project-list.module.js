'use strict';

import angular from 'angular';

import projectListComponent from './project-list.component';
import projectComponent from 'project/project.module';
import createProjectFormComponent from 'create-project-form/create-project-form.module';

export default angular.module('todoList.projectList', [projectComponent, createProjectFormComponent]).
  component('projectList', projectListComponent()).
  name;
