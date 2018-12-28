angular
    .module('homer')
    .controller('TaxEditCtrl', function($scope, $state, $stateParams, CommonService, TaxService) {
        var self = this;

        self.init = function() {
            var id = $stateParams.id;
            TaxService.getTaxById(id, function(tax) {
                $scope.tax = tax;
            });
        };

        self.submit = function() {
            TaxService.update($stateParams.id, $scope.tax, function() {
                CommonService.success();
                $state.go('main.tax', {}, { reload: true });
            });
        };

        $scope.submit = self.submit;

        self.init();
    });