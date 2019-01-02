angular
    .module('homer')
    .controller('CategoryAddCtrl', function($scope, $state, CommonService, CargoService) {
        var self = this;

        self.init = function() {
            $scope.category = {
                name: '',
                multipleRate: 1.00
            };
        };

        self.submit = function() {
            CargoService.save($scope.category, function() {
                CommonService.success('保存成功', '添加货物类别成功');
                $state.go('main.category', {}, { reload: true });
            });
        };

        $scope.submit = self.submit;

        self.init();
    });