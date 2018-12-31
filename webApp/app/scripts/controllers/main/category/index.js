angular
    .module('homer')
    .controller('CategoryIndexCtrl', function($scope, CommonService, CargoService) {
        var self = this;

        self.init = function() {
            CargoService.getAllCategories(function(data) {
                $scope.categories = data._embedded.goodCategories;
            });
        };

        self.delete = function(id) {
            CargoService.delete(id, function() {
                CommonService.success();
                $scope.categories = $scope.categories.filter(function(value) {
                    return value.id !== id;
                });
            });
        };

        $scope.delete = self.delete;

        self.init();
    });