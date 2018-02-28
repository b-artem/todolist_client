'use strict';

import logout from './logout.module';

describe('Component logout', function() {
  var ctrl;
  var $auth;

  beforeEach(angular.mock.module(logout));
  beforeEach(inject(function($componentController, _$auth_) {
    $auth = _$auth_;
    ctrl = $componentController('logout', null, null);
  }));

  describe('LogoutCtrl', function() {
    it('calls $auth.signOut() method in logout()', function() {
      spyOn($auth, 'signOut').and.returnValue( { then:
        function() { return { catch: function() {} }}});
      expect($auth.signOut.calls.count()).toEqual(0);

      ctrl.logout();
      expect($auth.signOut.calls.count()).toEqual(1);
    });
  });
});
