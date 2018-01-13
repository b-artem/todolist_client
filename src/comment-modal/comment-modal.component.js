'use strict';

import angular from 'angular';

import template from './comment-modal.template.html';

export default function() {
  return {
    templateUrl: template,
    controller: CommentModalCtrl,
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    }
  }
}

class CommentModalCtrl {
  constructor() {
    // this.popupDate = { opened: false };
    // this.dateOptions = {
    //   startingDay: 1,
    //   formatYear: 'yy',
    //   maxDate: new Date(2050, 12, 31),
    //   minDate: new Date(2017, 1, 1),
    //   showWeeks: false
    // };
  }

  $onInit() {
    this.headerText = this.resolve.headerText;
  }

  ok() {
    this.close({ $value: true });
  }

  cancel() {
    this.dismiss({ $value: false });
  }
}
