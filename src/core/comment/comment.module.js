'use strict';

import angular from 'angular';
import ngResource from 'angular-resource';

import commentService from './comment.service';

export default angular.module('todoList.core.comment', [ngResource]).
  service('Comment', commentService).
  name;
