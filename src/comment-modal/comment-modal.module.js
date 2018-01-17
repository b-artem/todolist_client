'use strict';

import angular from 'angular';
import uibModal from 'angular-ui-bootstrap/src/modal';
import ngFileUpload from 'ng-file-upload';

import commentModalComponent from './comment-modal.component';
import commentService from 'core/comment/comment.module';

export default angular.module('todoList.commentModal', [uibModal, commentService, ngFileUpload]).
  component('commentModal', commentModalComponent()).
  name;
