'use strict';

import angular from 'angular';
import uibModal from 'angular-ui-bootstrap/src/modal';
import uibDatepickerPopup from 'angular-ui-bootstrap/src/datepickerPopup';
import uibTimepicker from 'angular-ui-bootstrap/src/timepicker';

import deadlineModalComponent from './deadline-modal.component';

export default angular.module('todoList.deadlineModal', [
  uibModal,
  uibDatepickerPopup,
  uibTimepicker]).
  component('deadlineModal', deadlineModalComponent()).
  name;
