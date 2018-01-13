'use strict';

import angular from 'angular';
import uibModal from 'angular-ui-bootstrap/src/modal';

import commentModalComponent from './comment-modal.component';

export default angular.module('todoList.commentModal', [uibModal]).
  component('commentModal', commentModalComponent()).
  name;
