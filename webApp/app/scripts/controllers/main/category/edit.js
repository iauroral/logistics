angular
    .module('homer')
    .controller('CategoryEditCtrl', function($scope, $state, $stateParams, CommonService, CategoryService) {
        var self = this;

        self.init = function() {
            var id = $stateParams.id;
            CategoryService.getCategoryById(id, function(category) {
                $scope.category = category;
            });
        };

        self.submit = function() {
            CategoryService.update($stateParams.id, $scope.category, function() {
                CommonService.success();
                $state.go('main.category', {}, { reload: true });
            });
        };

        $scope.submit = self.submit;

        self.init();
    });