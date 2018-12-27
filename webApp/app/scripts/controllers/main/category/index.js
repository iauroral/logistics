angular
    .module('homer')
    .controller('CategoryIndexCtrl', function($scope, CommonService, CategoryService) {
        var self = this;

        self.init = function() {
            CategoryService.getAllCategories(function(data) {
                $scope.categories = data._embedded.goodCategories;
            });
        };

        self.delete = function(id) {
            CategoryService.delete(id, function() {
                CommonService.success();
                $scope.categories = $scope.categories.filter(function(value) {
                    return value.id !== id;
                });
            });
        };

        $scope.delete = self.delete;

        self.init();
    });