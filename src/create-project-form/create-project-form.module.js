'use strict';

import angular from 'angular';

import createProjectFormComponent from './create-project-form.component';

export default angular.module('todoList.createProjectForm', []).
  component('createProjectForm', createProjectFormComponent()).
  name;
