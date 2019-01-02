angular
    .module('homer')
    .controller('TaxIndexCtrl', function($scope, CommonService, TaxService) {
        var self = this;

        self.init = function() {
            TaxService.getAllTaxs(function(data) {
                $scope.taxes = data._embedded.taxes;
            });
        };

        self.delete = function(id) {
            CommonService.warning(function(success, error) {
                TaxService.delete(id, function() {
                    CommonService.success('删除成功');
                    $scope.taxes = $scope.taxes.filter(function(value) {
                        return value.id !== id;
                    });
                });
            });
        };

        $scope.delete = self.delete;

        self.init();
    });