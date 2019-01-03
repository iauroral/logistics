angular
    .module('homer')
    .controller('OrderSelectDriverCtrl', function($scope, $state, $stateParams, CommonService, OrderService) {
        var self = this;

        self.init = function() {
            OrderService.getOrderById($stateParams.id, function(data) {
                $scope.order = data;
            });
        };

        self.submit = function() {
            CommonService.warning(function(success, error) {
                OrderService.pay($stateParams.id, $scope.driver, function() {
                    CommonService.success('选择司机成功');
                    $state.go('main.orders', {}, {reload: true});
                });
            });
        };

        $scope.submit = self.submit;

        self.init();
    });
