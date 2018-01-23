'use strict';

import angular from 'angular';

import createProjectFormComponent from './create-project-form.component';
import projectService from 'core/project/project.module';

export default angular.module('todoList.createProjectForm', [projectService]).
  component('createProjectForm', createProjectFormComponent()).
  name;
