'use strict';

import commentModal from './comment-modal.module';

describe('Component commentModal', function() {
  var bindings;
  var ctrl;
  var closeSpy = jasmine.createSpy('close');
  var dismissSpy = jasmine.createSpy('dismiss');
  var commentService;

  beforeEach(angular.mock.module(commentModal));
  beforeEach(inject(function($componentController, Comment) {
    commentService = Comment;
    bindings = {
      resolve: {
        headerText: 'Comments',
        comments: { text: 'the first comment' },
        projectId: 47
      },
      close: closeSpy,
      dismiss: dismissSpy
    };
    ctrl = $componentController('commentModal', null, bindings);
  }));

  describe('CommentModalCtrl', function() {
    it('sets bindings properly', function() {
      expect(ctrl.close).toEqual(closeSpy);
      expect(ctrl.dismiss).toEqual(dismissSpy);
    });

    it('sets `resolve` data properly', function() {
      ctrl.$onInit();
      expect(ctrl.headerText).toEqual(bindings.resolve.headerText);
      expect(ctrl.comments).toEqual(bindings.resolve.comments);
      expect(ctrl.projectId).toEqual(bindings.resolve.projectId);
    });

    it('sets default values properly', function() {
      expect(ctrl.commentData).toEqual({});
      expect(ctrl.orderProp).toBe('-created_at');
    });

    it('calls $uibModal.close() method with comment data in ok()', function() {
      var commentData = { text: 'a new comment' };
      ctrl.commentData = commentData;
      expect(ctrl.close.calls.count()).toEqual(0);
      ctrl.ok();
      expect(ctrl.close.calls.count()).toEqual(1);
      expect(ctrl.close).toHaveBeenCalledWith({ $value: commentData });
    });

    it('calls $uibModal.dismiss() method with `false` value in cancel()', function() {
      expect(ctrl.dismiss.calls.count()).toEqual(0);
      ctrl.cancel();
      expect(ctrl.dismiss.calls.count()).toEqual(1);
      expect(ctrl.dismiss).toHaveBeenCalledWith({ $value: false });
    });

    it('calls resource $delete() method in deleteComment()', function() {
      spyOn(commentService.prototype, '$delete');
      expect(commentService.prototype.$delete.calls.count()).toEqual(0);
      ctrl.deleteComment();
      expect(commentService.prototype.$delete.calls.count()).toEqual(1);
    });
  });
});
