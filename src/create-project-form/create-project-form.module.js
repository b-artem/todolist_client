'use strict';

import angular from 'angular';

import createProjectFormComponent from './create-project-form.component';
import projectCore from 'core/project/project.module';

export default angular.module('todoList.createProjectForm', [projectCore]).
  component('createProjectForm', createProjectFormComponent()).
  name;
