'use strict';

import angular from 'angular';

import taskComponent from './task.component';
import commentsComponent from 'comments/comments.module';
import taskService from 'core/task/task.module';
import modal from 'modal/modal.module';
import deadlineModal from 'deadline-modal/deadline-modal.module';
import commentModal from 'comment-modal/comment-modal.module';

export default angular.module('todoList.task',
  [commentsComponent, taskService, modal, deadlineModal, commentModal]).
  component('task', taskComponent()).
  name;
