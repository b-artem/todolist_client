'use strict';

import modal from './modal.module';

describe('Component modal', function() {
  var bindings;
  var ctrl;
  var closeSpy = jasmine.createSpy('close');
  var dismissSpy = jasmine.createSpy('dismiss');

  beforeEach(angular.mock.module(modal));
  beforeEach(inject(function($componentController) {
    bindings = {
      resolve: {
        headerText: 'Delete the task',
        mainText: 'Do you really want to delete this task?'
      },
      close: closeSpy,
      dismiss: dismissSpy
    };
    ctrl = $componentController('modal', null, bindings);
  }));

  describe('ModalCtrl', function() {
    it('sets bindings properly', function() {
      expect(ctrl.close).toEqual(closeSpy);
      expect(ctrl.dismiss).toEqual(dismissSpy);
    });

    it('sets `resolve` data properly', function() {
      ctrl.$onInit();
      expect(ctrl.headerText).toEqual(bindings.resolve.headerText);
      expect(ctrl.mainText).toEqual(bindings.resolve.mainText);
    });

    it('calls $uibModal.close() method with `true` value in ok()', function() {
      expect(ctrl.close.calls.count()).toEqual(0);
      ctrl.ok();
      expect(ctrl.close.calls.count()).toEqual(1);
      expect(ctrl.close).toHaveBeenCalledWith({ $value: true });
    });

    it('calls $uibModal.dismiss() method with `false` value in cancel()', function() {
      expect(ctrl.dismiss.calls.count()).toEqual(0);
      ctrl.cancel();
      expect(ctrl.dismiss.calls.count()).toEqual(1);
      expect(ctrl.dismiss).toHaveBeenCalledWith({ $value: false });
    });
  });
});
