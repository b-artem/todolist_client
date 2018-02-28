'use strict';

import angular from 'angular';

import template from './deadline-modal.template.html';

export default function() {
  return {
    templateUrl: template,
    controller: DeadlineModalCtrl,
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    }
  }
}

class DeadlineModalCtrl {
  constructor() {
    this.popupDate = { opened: false };
    this.dateOptions = {
      popupPlacement: 'right',
      startingDay: 1,
      formatYear: 'yyyy',
      maxDate: new Date(2050, 12, 31),
      minDate: new Date(2017, 1, 1),
      showWeeks: false
    };
  }

  $onInit() {
    this.headerText = this.resolve.headerText;
    this.deadline = Date.parse(this.resolve.deadline) || new Date(new Date().setHours(12,0));
  }

  ok() {
    this.close({ $value: this.deadline });
  }

  cancel() {
    this.dismiss({ $value: false });
  }

  openDate() {
    this.popupDate.opened = true;
  }
}
