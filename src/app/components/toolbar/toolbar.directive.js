(function() {
  'use strict';

  angular
    .module('poppyGP')
    .directive('gpToolbar', gpToolbar);

  /** @ngInject */
  function gpToolbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/toolbar/toolbar.html',
      controller: ToolbarController,
      controllerAs: 'vc'
    };

    return directive;
  }

  /** @ngInject */
  function ToolbarController($log) {
    var vm = this;

    vm.buttons = [{
      id: 'btn-twitter',
      label: 'View on Twitter',
      val: 'twitter',
      icon: '&#xf099;'
    }, {
      id: 'btn-github',
      label: 'View on GitHub',
      val: 'github',
      icon: '&#xf09b;'
    }, {
      id: 'btn-bitcoin',
      label: 'Donate Bitcoin',
      val: 'bitcoin',
      icon: '&#xf15a;'
    }, {
      id: 'btn-paypal',
      label: 'Donate PayPal',
      val: 'paypal',
      icon: '&#xf1ed;'
    }];
  
  }

})();