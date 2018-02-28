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
  constructor(Comment, Upload) {
    this.commentService = Comment;
    this.upload = Upload;
    this.commentData = {};
    this.orderProp = '-created_at';
  }

  $onInit() {
    this.headerText = this.resolve.headerText;
    this.comments = this.resolve.comments;
    this.projectId = this.resolve.projectId;
  }

  ok() {
    this.close({ $value: this.commentData });
  }

  cancel() {
    this.dismiss({ $value: false });
  }

  formatDate(datetime) {
    return formatDate(datetime);
  }

  deleteComment(comment) {
    var self = this;
    var deleteComment = new this.commentService(comment);
    deleteComment.$delete({ project_id: self.projectId }, function() {
      var index = self.comments.indexOf(comment);
      if (index >= 0) {
        self.comments.splice(index, 1);
      }
    }, function(response) {
      console.log(response.data.error);
    });
  }
}

CommentModalCtrl.$inject = ['Comment', 'Upload'];
