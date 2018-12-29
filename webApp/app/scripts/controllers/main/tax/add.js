angular
    .module('homer')
    .controller('TaxAddCtrl', function($scope, $state, CommonService, TaxService) {
        var self = this;

        self.init = function() {
            $scope.tax = {
                minPrice: 0,
                maxPrice: 0,
                rate: 0
            };
        };

        self.submit = function() {
            TaxService.save($scope.tax, function() {
                CommonService.success();
                $state.go('main.tax', {}, { reload: true });
            });
        };

        $scope.submit = self.submit;

        self.init();
    });