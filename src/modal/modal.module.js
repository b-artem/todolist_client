'use strict';

import angular from 'angular';
import uibModal from 'angular-ui-bootstrap/src/modal';

import modalComponent from './modal.component';

export default angular.module('todoList.modal', [uibModal]).
  component('modal', modalComponent()).
  name;
