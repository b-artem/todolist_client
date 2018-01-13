'use strict';

import angular from 'angular';

import template from './comment-modal.template.html';
import { formatDate } from 'utils/datetime';

export default function() {
  return {
    templateUrl: template,
    controller: CommentModalCtrl,
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    }
  }
}

class CommentModalCtrl {
  constructor() {
    this.commentText = '';
  }

  $onInit() {
    this.headerText = this.resolve.headerText;
    this.comments = this.resolve.comments;
  }

  ok() {
    this.close({ $value: this.commentText });
  }

  cancel() {
    this.dismiss({ $value: false });
  }

  formatDate(datetime) {
    return formatDate(datetime);
  }
}
