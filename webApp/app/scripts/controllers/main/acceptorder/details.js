angular
    .module('homer')
    .controller('DetailsCtrl', function($scope, $state, $stateParams, CommonService, OrderService) {
        var self = this;

        self.init = function() {
            self.getOrder($stateParams.id);
        };

        self.getOrder = function(id) {
            OrderService.getOrderById(id, function(data) {
                console.log(data);
                $scope.order = data;
            });
        };

        self.submit = function() {
            OrderService.grub($stateParams.id, function() {
                CommonService.success();
                $state.go('main.acceptorder');
            });
        };

        $scope.submit = self.submit;

        self.init();
    });