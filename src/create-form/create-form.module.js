'use strict';

import angular from 'angular';

import createFormComponent from './create-form.component';

export default angular.module('todoList.createForm', []).
  component('createForm', createFormComponent()).
  name;
