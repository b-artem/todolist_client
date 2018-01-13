'use strict';

import angular from 'angular';

import template from './comments.template.html';

export default function() {
  return {
    bindings: {
      projectId: '<',
      taskId: '<',
      comments: '<'
    },
    templateUrl: template,
    controller: CommentsCtrl
  }
}

class CommentsCtrl {
  constructor(Comment, $uibModal) {
    this.commentService = Comment;
    this.$uibModal = $uibModal;
  }

  $onInit() {
    if (!this.comments) this.comments = [];
    this.newComment = new this.commentService({
      project_id: this.projectId,
      task_id: this.taskId
    });
  }

  show() {
    var self = this;
    this.commentModal().result.then(function(commentText) {
      self.newComment.text = commentText;
      self.newComment.$save(function(comment) {
        self.comments.push(comment);
      }, function(response) {
        console.log(response.data.error);
      });
      }, function() {
    });
  }

  commentModal() {
    var self = this;
    return this.$uibModal.open({
      component: 'commentModal',
      resolve: {
        headerText: function() { return 'Add Comment' },
        comments: function() { return self.comments }
      }
    });
  }
}

CommentsCtrl.$inject = ['Comment', '$uibModal'];
