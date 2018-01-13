'use strict';

import angular from 'angular';

import commentsComponent from './comments.component';
import commentService from 'core/comment/comment.module';
import commentModal from 'comment-modal/comment-modal.module';

export default angular.module('todoList.comments',
  [commentService, commentModal]).
  component('comments', commentsComponent()).
  name;
