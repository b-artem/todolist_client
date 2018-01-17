'use strict';

import angular from 'angular';
import ngFileUpload from 'ng-file-upload';

import commentsComponent from './comments.component';
import commentService from 'core/comment/comment.module';
import commentModal from 'comment-modal/comment-modal.module';

export default angular.module('todoList.comments',
  [commentService, commentModal, ngFileUpload]).
  component('comments', commentsComponent()).
  name;
