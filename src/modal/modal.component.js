'use strict';

import angular from 'angular';
// import uibModal from 'angular-ui-bootstrap/src/modal';

import template from './modal.template.html';

export default function() {
  return {
    templateUrl: template,
    controller: ModalCtrl,
    bindings: {
      close: '&',
      dismiss: '&'
      // onCreate: '&'
    }
  }

  // var modalInstance = this.$uibModal.open({
  //   // animation: true,
  //   ariaLabelledBy: 'modal-title',
  //   ariaDescribedBy: 'modal-body',
  //   templateUrl: template,
  //   // size: size,
  //   // appendTo: parentElem,
  //   // resolve: {
  //   //   items: function () {
  //   //     return $ctrl.items;
  //   //   }
  //   // }
  // });
  //
  // return
  //   modalInstance.result.then(function(selectedItem) {
  //     // $ctrl.selected = selectedItem;
  //     console.log('YES');
  //   }, function () {
  //     console.log('NO!!!');
  //     // $log.info('Modal dismissed at: ' + new Date());
  //   });

}

class ModalCtrl {
  constructor() {
    // this.$uibModal = $uibModal;
    // this.confirm = false;
  }

  ok() {
    this.close({ $value: true });
  }

  cancel() {
    this.dismiss({ $value: false });
  }

  // open() {
  //   // var self = this;
  //   var modalInstance = this.$uibModal.open({
  //     // animation: true,
  //     ariaLabelledBy: 'modal-title',
  //     ariaDescribedBy: 'modal-body',
  //     templateUrl: template,
  //     // size: size,
  //     // appendTo: parentElem,
  //     // resolve: {
  //     //   items: function () {
  //     //     return $ctrl.items;
  //     //   }
  //     // }
  //   });
  //
  //   modalInstance.result.then(function(selectedItem) {
  //     // $ctrl.selected = selectedItem;
  //     console.log('YES');
  //   }, function () {
  //     console.log('NO!!!');
  //     // $log.info('Modal dismissed at: ' + new Date());
  //   });
  // }
}

// ModalCtrl.$inject = ['$uibModal'];
