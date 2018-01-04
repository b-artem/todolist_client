'use strict';

import angular from 'angular';

import taskComponent from './task.component';
// import modal from 'modal/modal.module';

export default angular.module('todoList.task', [/*modal*/]).
  component('task', taskComponent()).
  name;
