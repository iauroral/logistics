angular
    .module('homer')
    .controller('OrderDriverCtrl', function($scope, $state, CommonService, OrderService) {
        var self = this;

        self.init = function() {
            OrderService.driverRunning(function(data) {
                $scope.orders = data;
            });
        };

        self.in = function(id) {
            OrderService.in(id, function() {
                CommonService.success();
                $state.reload();
            });
        };

        self.finish = function(id) {
            OrderService.finish(id, function() {
                CommonService.success();
                $state.reload();
            });
        };

        $scope.in = self.in;
        $scope.finish = self.finish;

        self.init();
    });
