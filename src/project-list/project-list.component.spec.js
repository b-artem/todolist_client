'use strict';

import projectList from './project-list.module';

describe('Component projectList', function() {
  var bindings;
  var ctrl;

  beforeEach(angular.mock.module(projectList));
  beforeEach(inject(function($componentController) {
    bindings = { projects: [ { name: 'Initial project' } ] };
    ctrl = $componentController('projectList', null, bindings);
  }));

  describe('ProjectListCtrl', function() {
    it('sets bindings properly', function() {
      expect(ctrl.projects.length).toBe(1);
      expect(ctrl.projects).toEqual(bindings.projects);
    });

    it('sets a default value for the `orderProp` to `created_at`', function() {
      expect(ctrl.orderProp).toBe('created_at');
    });

    it('creates a project', function() {
      expect(ctrl.projects.length).toBe(1);
      var newProject = { name: 'My second project' };
      ctrl.createProject(newProject);
      expect(ctrl.projects.length).toBe(2);
      expect(ctrl.projects[1]).toEqual(newProject);
    });

    it('deletes a project', function() {
      expect(ctrl.projects.length).toBe(1);
      var project = bindings.projects[0];
      ctrl.deleteProject(project);
      expect(ctrl.projects.length).toBe(0);
    });
  });
});
