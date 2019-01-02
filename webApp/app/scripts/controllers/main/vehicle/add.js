/**
 * 登录控制器
 */
angular
    .module('homer')
    .controller('VehicleAddCtrl', function($scope, $state, CommonService, VehicleService) {
        var self = this;

        self.init = function() {
            $scope.vehicle = {
                name: '',
                multipleRate: 1.00,
                pledge: 50000
            };
        };

        self.submit = function() {
            VehicleService.save($scope.vehicle, function() {
                CommonService.success('保存成功', '添加车型成功');
                $state.go('main.vehicle', {}, { reload: true });
            });
        };

        $scope.submit = self.submit;

        self.init();
    });