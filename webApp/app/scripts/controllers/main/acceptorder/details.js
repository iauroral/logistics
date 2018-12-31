angular
    .module('homer')
    .controller('DetailsCtrl', function($scope, $state, $stateParams, CommonService, OrderService) {
        var self = this;

        self.init = function() {
            self.getOrder($stateParams.id);
        };

        self.getOrder = function(id) {
            OrderService.getOrderById(id, function(data) {
                $scope.order = data;
            });
        };

        self.init();
    });