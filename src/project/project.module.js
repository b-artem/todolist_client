'use strict';

import angular from 'angular';

import projectComponent from './project.component';
import modal from 'modal/modal.module';

export default angular.module('todoList.project', [modal]).
  component('project', projectComponent()).
  name;
