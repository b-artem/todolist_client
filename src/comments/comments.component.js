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
  constructor(Comment, $uibModal, Upload) {
    this.commentService = Comment;
    this.$uibModal = $uibModal;
    this.upload = Upload;
  }

  $onInit() {
    if (!this.comments) this.comments = [];
  }

  show() {
    var self = this;
    this.commentModal().result.then(function(commentData) {
      if (commentData.attachment) {
        var upload = self.upload.base64DataUrl(commentData.attachment);
      }

      if (commentData.attachment) {
        upload.then(function(base64Url) {
          var newComment = self.newComment(commentData);
          newComment.attachment = base64Url;
          newComment.$save(function(comment) {
            self.comments.push(comment);
          }, function(response) {
            console.log(response.data.error);
          });
        }, function(errors) {
          console.log(errors);
        })
      }
    }, function() {}
    );
  }

  newComment(comment) {
    return new this.commentService({
      project_id: this.projectId,
      task_id: this.taskId,
      text: comment.text
    });
  }

  commentModal() {
    var self = this;
    return this.$uibModal.open({
      component: 'commentModal',
      resolve: {
        headerText: function() { return 'Add Comment' },
        comments: function() { return self.comments },
        projectId: function() { return self.projectId }
      }
    });
  }
}

CommentsCtrl.$inject = ['Comment', '$uibModal', 'Upload'];
