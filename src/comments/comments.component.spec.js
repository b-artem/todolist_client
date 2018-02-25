'use strict';

import comments from './comments.module';

describe('Component comments', function() {
  var bindings;
  var ctrl;
  var commentService;

  beforeEach(angular.mock.module(comments));
  beforeEach(inject(function($componentController, Comment) {
    bindings = {
      projectId: 2,
      taskId: 3,
      comments: [ { text: '1 comment' }, { text: '2 comment'} ]
    };
    commentService = Comment;
    ctrl = $componentController('comments', null, bindings);
  }));

  describe('CommentsCtrl', function() {
    it('sets bindings properly', function() {
      expect(ctrl.projectId).toBe(2);
      expect(ctrl.taskId).toBe(3);
      expect(ctrl.comments).toEqual(bindings.comments);
    });

    it('calls `commentModal()` in `show()`', function() {
      spyOn(ctrl, 'commentModal').and.returnValue({result: {then: function() {}}});
      expect(ctrl.commentModal.calls.count()).toEqual(0);
      ctrl.show();
      expect(ctrl.commentModal.calls.count()).toEqual(1);
    });

    it('calls `$save` service in `saveComment()`', function() {
      var newComment = jasmine.createSpyObj('newComment', ['$save']);
      expect(newComment.$save.calls.count()).toEqual(0);
      ctrl.saveComment(newComment);
      expect(newComment.$save.calls.count()).toEqual(1);
    });

    it(`creates a resource and calls 'saveComment(createdResource)' in
      'createTextOnly(commentData)'`, function() {
      var commentData = { text: 'text comment' };
      var commentResource = new ctrl.commentService({
        project_id: ctrl.projectId,
        task_id: ctrl.taskId,
        text: commentData.text
      });

      spyOn(ctrl, 'saveComment');
      expect(ctrl.saveComment.calls.count()).toEqual(0);

      ctrl.createTextOnly(commentData);
      expect(ctrl.saveComment.calls.count()).toEqual(1);
      expect(ctrl.saveComment).toHaveBeenCalledWith(commentResource);
    });
  });
});
