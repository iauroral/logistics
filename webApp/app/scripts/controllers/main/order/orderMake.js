/**
 * 登录控制器
 */
angular
    .module('homer')
    .controller('OrderMakeCtrl', function($scope, $state, CommonService, VehicleService) {
        var self = this;

        
        $scope.submit = self.submit;

        self.init();
    });