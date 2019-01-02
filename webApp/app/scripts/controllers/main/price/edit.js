angular
    .module('homer')
    .controller('PriceEditCtrl', function($scope, $state, $stateParams, CommonService, PriceService) {
        var self = this;

        self.init = function() {
            var id = $stateParams.id;
            PriceService.getPriceById(id, function(price) {
                $scope.price = price;
            });
        };

        self.submit = function() {
            PriceService.update($stateParams.id, $scope.price, function() {
                CommonService.success('更新成功', '更新定价成功');
                $state.go('main.price', {}, { reload: true });
            });
        };

        $scope.submit = self.submit;

        self.init();
    });