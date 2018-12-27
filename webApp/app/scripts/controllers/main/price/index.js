angular
    .module('homer')
    .controller('PriceIndexCtrl', function($scope, CommonService, PriceService) {
        var self = this;

        self.init = function() {
            PriceService.getAllPrices(function(data) {
                $scope.prices = data._embedded.prices;
            });
        };

        self.delete = function(id) {
            PriceService.delete(id, function() {
                CommonService.success();
                $scope.prices = $scope.prices.filter(function(value) {
                    return value.id !== id;
                });
            });
        };

        $scope.delete = self.delete;

        self.init();
    });