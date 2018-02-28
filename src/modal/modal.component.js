'use strict';

import angular from 'angular';
import uibModal from 'angular-ui-bootstrap/src/modal';

import template from './modal.template.html';

export default function() {
  return {
    templateUrl: template,
    controller: ModalCtrl,
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    }
  }
}

class ModalCtrl {
  $onInit() {
    this.headerText = this.resolve.headerText;
    this.mainText = this.resolve.mainText;
  }

  ok() {
    this.close({ $value: true });
  }

  cancel() {
    this.dismiss({ $value: false });
  }
}
