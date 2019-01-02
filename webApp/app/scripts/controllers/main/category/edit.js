angular
    .module('homer')
    .controller('CategoryEditCtrl', function($scope, $state, $stateParams, CommonService, CargoService) {
        var self = this;

        self.init = function() {
            var id = $stateParams.id;
            CargoService.getCategoryById(id, function(category) {
                $scope.category = category;
            });
        };

        self.submit = function() {
            CargoService.update($stateParams.id, $scope.category, function() {
                CommonService.success('更新成功', '更新货物类别成功');
                $state.go('main.category', {}, { reload: true });
            });
        };

        $scope.submit = self.submit;

        self.init();
    });