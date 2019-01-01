angular
    .module('homer')
    .controller('OrderDriverCompleteCtrl', function($scope, OrderService) {
        var self = this;

        self.init = function() {
            OrderService.driverCompleted(function(data) {
                $scope.orders = data;
            });
        };

        self.init();
    });
