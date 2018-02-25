'use strict';

import comment from './comment.module';
import { apiUrl } from 'app.config';

describe('Service Comment', function() {
  var $httpBackend;
  var Comment;
  var commentsData = [
    { name: 'the first comment', id: 1 },
    { name: 'the second comment', id: 2 },
    { name: 'the third comment', id: 3 }
  ];

  beforeEach(angular.mock.module(comment));
  beforeEach(inject(function(_$httpBackend_, _Comment_) {
    $httpBackend = _$httpBackend_;
    Comment = _Comment_;
  }));
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('fetches the comments data from `/projects/:project_id/tasks/:task_id/comments`',
  function() {
    $httpBackend.expectGET(apiUrl + '/projects/1/tasks/2/comments').respond(commentsData);
    var comments = Comment.query({ project_id: 1, task_id: 2 });
    expect(comments).toEqual([]);
    $httpBackend.flush();
    expect(comments).toEqual(commentsData);
  });

  it('creates a new comment at `/projects/:project_id/tasks/:task_id/comments`',
  function() {
    var newComment = { name: 'a new comment', project_id: 2, task_id: 4 };
    var createdComment;
    $httpBackend.expectPOST(apiUrl + '/projects/2/tasks/4/comments', newComment)
      .respond(newComment);
    Comment.save(newComment, function(createdCom) {
      createdComment = createdCom;
    });
    expect(createdComment).toBeUndefined();
    $httpBackend.flush();
    expect(createdComment).toEqual(newComment);
  });

  it('deletes the comment at `/projects/:project_id/tasks/:task_id/comments/:id`',
  function() {
    var commentToDelete = { name: 'Comment 8', id: 8, project_id: 3, task_id: 5 };
    var deletedComment;
    $httpBackend.expectDELETE(apiUrl + '/projects/3/tasks/5/comments/8')
      .respond(commentToDelete);
    Comment.delete({ project_id: 3, task_id: 5, id: 8 }, function(deletedCom) {
      deletedComment = deletedCom;
    });
    expect(deletedComment).toBeUndefined();
    $httpBackend.flush();
    expect(deletedComment).toEqual(commentToDelete);
  });
});
