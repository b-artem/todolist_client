'use strict';

import deadlineModal from './deadline-modal.module';

describe('Component deadlineModal', function() {
  var bindings;
  var ctrl;
  var closeSpy = jasmine.createSpy('close');
  var dismissSpy = jasmine.createSpy('dismiss');

  beforeEach(angular.mock.module(deadlineModal));
  beforeEach(inject(function($componentController) {
    bindings = {
      resolve: {
        headerText: 'Deadline',
        deadline: '2018-01-25T10:00:23.021Z'
      },
      close: closeSpy,
      dismiss: dismissSpy
    };
    ctrl = $componentController('deadlineModal', null, bindings);
  }));

  describe('DeadlineModalCtrl', function() {
    it('sets bindings properly', function() {
      expect(ctrl.close).toEqual(closeSpy);
      expect(ctrl.dismiss).toEqual(dismissSpy);
    });

    it('sets `resolve` data properly', function() {
      ctrl.$onInit();
      expect(ctrl.headerText).toEqual(bindings.resolve.headerText);
      expect(ctrl.deadline).toEqual(Date.parse(bindings.resolve.deadline));
    });

    it('sets default values properly', function() {
      expect(ctrl.popupDate).toEqual({ opened: false });
    });

    it('calls $uibModal.close() method with deadline value in ok()', function() {
      expect(ctrl.close.calls.count()).toEqual(0);
      ctrl.$onInit();
      ctrl.ok();
      expect(ctrl.close.calls.count()).toEqual(1);
      expect(ctrl.close).toHaveBeenCalledWith({ $value:
        Date.parse(bindings.resolve.deadline) });
    });

    it('calls $uibModal.dismiss() method with `false` value in cancel()', function() {
      expect(ctrl.dismiss.calls.count()).toEqual(0);
      ctrl.cancel();
      expect(ctrl.dismiss.calls.count()).toEqual(1);
      expect(ctrl.dismiss).toHaveBeenCalledWith({ $value: false });
    });

    it('opens date popup', function() {
      expect(ctrl.popupDate.opened).toBe(false);
      ctrl.openDate();
      expect(ctrl.popupDate.opened).toBe(true);
    });
  });
});
