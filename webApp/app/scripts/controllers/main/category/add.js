angular
    .module('homer')
    .controller('CategoryAddCtrl', function($scope, $state, CommonService, CategoryService) {
        var self = this;

        self.init = function() {
            $scope.category = {
                name: '',
                multipleRate: 1.00
            };
        };

        self.submit = function() {
            CategoryService.save($scope.category, function() {
                CommonService.success();
                $state.go('main.category', {}, { reload: true });
            });
        };

        $scope.submit = self.submit;

        self.init();
    });