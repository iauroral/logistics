angular
    .module('homer')
    .controller('PriceAddCtrl', function($scope, $state, CommonService, PriceService) {
        var self = this;

        self.init = function() {
            $scope.price = {
                minKilometres: 0.00,
                maxKilometres: 0.00,
                price: 5
            };
        };

        self.submit = function() {
            PriceService.save($scope.price, function() {
                CommonService.success();
                $state.go('main.price', {}, { reload: true });
            });
        };

        $scope.submit = self.submit;

        self.init();
    });