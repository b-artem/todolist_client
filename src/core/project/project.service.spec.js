'use strict';

import project from './project.module';
import { apiUrl } from 'app.config';

describe('Service Project', function() {
  var $httpBackend;
  var Project;
  var projectsData = [
    { name: 'the first project', id: 1 },
    { name: 'the second project', id: 2 },
    { name: 'the third project', id: 3 }
  ];

  beforeEach(angular.mock.module(project));
  beforeEach(inject(function(_$httpBackend_, _Project_) {
    $httpBackend = _$httpBackend_;
    Project = _Project_;
  }));
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('fetches the projects data from `/projects`', function() {
    $httpBackend.expectGET(apiUrl + '/projects').respond(projectsData);
    var projects = Project.query();
    expect(projects).toEqual([]);
    $httpBackend.flush();
    expect(projects).toEqual(projectsData);
  });

  it('creates a new project at `/projects`', function() {
    var newProject = { name: 'a new project' };
    var updatedProject;
    $httpBackend.expectPOST(apiUrl + '/projects', newProject).respond(newProject);
    Project.save(newProject, function(savedPrj) {
      updatedProject = savedPrj;
    });
    expect(updatedProject).toBeUndefined();
    $httpBackend.flush();
    expect(updatedProject).toEqual(newProject);
  });

  it('updates the project at `/projects/:id`', function() {
    var projectToUpdate = { name: 'updated project', id: 3 };
    var updatedProject;
    $httpBackend.expect('PATCH', apiUrl + '/projects/3', projectToUpdate).respond(projectToUpdate);
    Project.update(projectToUpdate, function(updatedPrj) {
      updatedProject = updatedPrj;
    });
    expect(updatedProject).toBeUndefined();
    $httpBackend.flush();
    expect(updatedProject).toEqual(projectToUpdate);
  });

  it('deletes the project at `/projects/:id`', function() {
    var projectToDelete = { name: 'Project to delete', id: 2 };
    var deletedProject;
    $httpBackend.expectDELETE(apiUrl + '/projects/2').respond(projectToDelete);
    Project.delete({ id: 2 }, function(delPrj) {
      deletedProject = delPrj;
    });
    expect(deletedProject).toBeUndefined();
    $httpBackend.flush();
    expect(deletedProject).toEqual(projectToDelete);
  });
});
